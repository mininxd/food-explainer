#!/usr/bin/env python3
"""
Food Engine - Python Component for Food Explainer
Provides image analysis, color palette extraction, and PIL-based compression.
Integrated with the Node.js backend.
"""

import sys
import os
import json
import io
from PIL import Image, ImageStat

def get_file_size_kb(filepath):
    try:
        return os.path.getsize(filepath) / 1024.0
    except OSError:
        return 0.0

def analyze_palette(img):
    """Analyze image colors to determine food visual cues (e.g. golden crust, rich broth, greens, red sauce)."""
    # Resize small for fast statistics
    small = img.convert('RGB').resize((64, 64))
    stat = ImageStat.Stat(small)
    r_mean, g_mean, b_mean = stat.mean

    # Classify warmth and dominant visual tones
    is_warm = (r_mean > b_mean + 15)
    is_green = (g_mean > r_mean + 10 and g_mean > b_mean + 10)
    is_red = (r_mean > g_mean + 30 and r_mean > b_mean + 30)
    is_golden = (r_mean > 140 and g_mean > 100 and b_mean < 80)
    is_dark = (r_mean < 70 and g_mean < 70 and b_mean < 70)

    tone = "balanced"
    if is_golden:
        tone = "golden_fried_or_baked"
    elif is_red:
        tone = "rich_tomato_or_chili"
    elif is_green:
        tone = "fresh_herb_or_vegetable"
    elif is_warm:
        tone = "savory_caramelized_warm"
    elif is_dark:
        tone = "deep_roasted_or_sauced"

    return {
        "rgb_mean": [round(r_mean, 1), round(g_mean, 1), round(b_mean, 1)],
        "warmth_score": round(max(0, (r_mean - b_mean) / 2.55), 1),
        "visual_tone": tone
    }

def compress_if_needed(input_path, output_path=None, threshold_kb=512.0):
    """
    Check if image exceeds threshold_kb (default 512KB).
    If yes, compress with PIL down to smaller dimensions and quality.
    """
    original_size_kb = get_file_size_kb(input_path)
    threshold_bytes = threshold_kb * 1024

    if not output_path:
        output_path = input_path

    if original_size_kb <= threshold_kb:
        return {
            "compressed": False,
            "original_kb": round(original_size_kb, 1),
            "final_kb": round(original_size_kb, 1),
            "savings_pct": "0%",
            "reason": f"File is within {threshold_kb:.0f}KB budget."
        }

    with Image.open(input_path) as img:
        img = img.convert('RGB')
        width, height = img.size

        # Scale down if large
        max_dim = 800
        if max(width, height) > max_dim:
            if width > height:
                new_w = max_dim
                new_h = int(height * (max_dim / width))
            else:
                new_h = max_dim
                new_w = int(width * (max_dim / height))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

        # Iterative compression targeting < 400KB
        quality = 80
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=quality, optimize=True)

        while buffer.tell() > (threshold_bytes * 0.8) and quality > 40:
            quality -= 10
            buffer = io.BytesIO()
            img.save(buffer, format="JPEG", quality=quality, optimize=True)

        with open(output_path, 'wb') as f_out:
            f_out.write(buffer.getvalue())

    final_size_kb = get_file_size_kb(output_path)
    savings = max(0, ((original_size_kb - final_size_kb) / original_size_kb) * 100)

    return {
        "compressed": True,
        "original_kb": round(original_size_kb, 1),
        "final_kb": round(final_size_kb, 1),
        "savings_pct": f"{savings:.1f}%",
        "ratio": f"{(original_size_kb / max(1, final_size_kb)):.1f}x",
        "quality_used": quality,
        "engine": "python_pil"
    }

def analyze_full(image_path):
    """Full analysis pipeline invoked by Node or CLI."""
    if not os.path.exists(image_path):
        return {"error": f"Image not found at {image_path}"}

    original_size = get_file_size_kb(image_path)
    with Image.open(image_path) as img:
        dimensions = list(img.size)
        format_name = img.format or "JPEG"
        palette = analyze_palette(img)

    compression_info = {
        "original_kb": round(original_size, 1),
        "exceeds_threshold": original_size > 512.0,
        "threshold_kb": 512.0
    }

    return {
        "status": "success",
        "engine": "python_3.10_pil",
        "dimensions": dimensions,
        "format": format_name,
        "palette": palette,
        "compression_info": compression_info
    }

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Usage: food_engine.py <analyze|compress> <filepath> [args]"}))
        sys.exit(1)

    cmd = sys.argv[1]

    if cmd == "analyze":
        if len(sys.argv) < 3:
            print(json.dumps({"error": "Missing filepath"}))
            sys.exit(1)
        res = analyze_full(sys.argv[2])
        print(json.dumps(res))

    elif cmd == "compress":
        if len(sys.argv) < 3:
            print(json.dumps({"error": "Missing filepath"}))
            sys.exit(1)
        in_path = sys.argv[2]
        out_path = sys.argv[3] if len(sys.argv) > 3 else in_path
        thresh = float(sys.argv[4]) if len(sys.argv) > 4 else 512.0
        res = compress_if_needed(in_path, out_path, thresh)
        print(json.dumps(res))

    elif cmd == "ping":
        print(json.dumps({"status": "ready", "python_version": sys.version.split()[0], "pillow": True}))

    else:
        # Default to analyze if first arg is an existing file
        if os.path.exists(cmd):
            res = analyze_full(cmd)
            print(json.dumps(res))
        else:
            print(json.dumps({"error": f"Unknown command {cmd}"}))
            sys.exit(1)

if __name__ == "__main__":
    main()
