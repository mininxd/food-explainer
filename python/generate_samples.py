#!/usr/bin/env python3
"""
Generate realistic mock food imagery for 1-click restaurant testing.
Creates both high-res (>512KB) and optimized (<512KB) test files.
"""

import os
from PIL import Image, ImageDraw, ImageFilter
import random

output_dir = "/root/ai/public/samples"
os.makedirs(output_dir, exist_ok=True)

samples = [
    {
        "id": "ramen",
        "name": "Spicy Tonkotsu Ramen",
        "base_color": (195, 110, 50),     # rich broth
        "secondary": (245, 230, 180),     # noodles
        "accent": (180, 40, 30),          # chili oil
        "garnish": (40, 140, 50),         # scallion
        "size": (1600, 1200),             # Large -> > 1MB
        "quality": 95
    },
    {
        "id": "pizza",
        "name": "Margherita Pizza",
        "base_color": (210, 140, 60),     # golden crust
        "secondary": (200, 45, 30),       # tomato sauce
        "accent": (245, 240, 220),        # mozzarella
        "garnish": (30, 130, 40),         # fresh basil
        "size": (1400, 1050),             # Large -> > 800KB
        "quality": 94
    },
    {
        "id": "cheeseburger",
        "name": "Angus Bacon Cheeseburger",
        "base_color": (185, 115, 55),     # brioche bun
        "secondary": (90, 45, 25),        # seared patty
        "accent": (250, 180, 20),         # melted cheddar
        "garnish": (50, 160, 60),         # lettuce & pickle
        "size": (640, 480),               # Small -> < 300KB
        "quality": 82
    },
    {
        "id": "sushi",
        "name": "Nigiri & Sashimi Platter",
        "base_color": (40, 40, 45),       # slate platter
        "secondary": (240, 120, 90),      # salmon
        "accent": (190, 40, 50),          # tuna
        "garnish": (160, 210, 80),        # wasabi
        "size": (1800, 1200),             # Large -> > 1.2MB
        "quality": 95
    },
    {
        "id": "tacos",
        "name": "Tacos al Pastor",
        "base_color": (230, 200, 110),    # corn tortilla
        "secondary": (165, 60, 30),       # spiced pork
        "accent": (240, 190, 30),         # pineapple
        "garnish": (45, 150, 50),         # cilantro
        "size": (680, 510),               # Small -> < 350KB
        "quality": 80
    },
    {
        "id": "risotto",
        "name": "Truffle Mushroom Risotto",
        "base_color": (235, 225, 200),    # creamy arborio rice
        "secondary": (110, 80, 55),       # wild porcini mushrooms
        "accent": (45, 35, 30),           # black truffle shavings
        "garnish": (240, 235, 210),       # shaved parmigiano
        "size": (1500, 1125),             # Large -> > 900KB
        "quality": 95
    }
]

for s in samples:
    w, h = s["size"]
    img = Image.new("RGB", (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)

    # Plate/Bowl surface
    margin = int(min(w, h) * 0.08)
    draw.ellipse([margin, margin, w - margin, h - margin], fill=s["base_color"])

    # Food layers
    inner_m = int(min(w, h) * 0.18)
    draw.ellipse([inner_m, inner_m, w - inner_m, h - inner_m], fill=s["secondary"])

    # Toppings & accents
    random.seed(42)
    for _ in range(35):
        cx = random.randint(inner_m + 30, w - inner_m - 30)
        cy = random.randint(inner_m + 30, h - inner_m - 30)
        rad = random.randint(int(min(w,h)*0.03), int(min(w,h)*0.08))
        draw.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=s["accent"])

    # Garnishes (herbs, seeds, scallions)
    for _ in range(60):
        gx = random.randint(inner_m + 20, w - inner_m - 20)
        gy = random.randint(inner_m + 20, h - inner_m - 20)
        grad = random.randint(int(min(w,h)*0.01), int(min(w,h)*0.025))
        draw.ellipse([gx - grad, gy - grad, gx + grad, gy + grad], fill=s["garnish"])

    # Apply soft blur for organic gradient look
    img = img.filter(ImageFilter.GaussianBlur(radius=int(min(w,h)*0.008)))

    # Add text label on image
    draw = ImageDraw.Draw(img)
    
    # Save
    out_file = os.path.join(output_dir, f"{s['id']}.jpg")
    img.save(out_file, "JPEG", quality=s["quality"], optimize=False)
    fsize = os.path.getsize(out_file) / 1024
    print(f"Generated {s['id']}.jpg: {w}x{h}, {fsize:.1f} KB (Target >512KB: {fsize > 512})")

print("Done generating sample food dishes!")
