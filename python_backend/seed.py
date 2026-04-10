"""
Seed script — run once to populate the database.
Usage: python seed.py
"""
import asyncio
import sys

from database import AsyncSessionLocal, create_tables
from models import Category, Product, User
from auth import hash_password


# ── Categories ────────────────────────────────────────────────────────────────

CATEGORIES = [
    {"name": "Milk", "name_hindi": "दूध", "slug": "milk", "icon_emoji": "🥛", "sort_order": 1},
    {"name": "Paneer & Butter", "name_hindi": "पनीर और मक्खन", "slug": "paneer-butter", "icon_emoji": "🧈", "sort_order": 2},
    {"name": "Ghee", "name_hindi": "घी", "slug": "ghee", "icon_emoji": "🫙", "sort_order": 3},
    {"name": "Curd & Yogurt", "name_hindi": "दही और योगर्ट", "slug": "curd-yogurt", "icon_emoji": "🥣", "sort_order": 4},
    {"name": "Cheese", "name_hindi": "चीज़", "slug": "cheese", "icon_emoji": "🧀", "sort_order": 5},
    {"name": "Desserts & Sweets", "name_hindi": "मिठाइयाँ", "slug": "desserts", "icon_emoji": "🍮", "sort_order": 6},
    {"name": "Beverages", "name_hindi": "पेय पदार्थ", "slug": "beverages", "icon_emoji": "🥤", "sort_order": 7},
    {"name": "Milk Products", "name_hindi": "दूध उत्पाद", "slug": "milk-products", "icon_emoji": "🥫", "sort_order": 8},
    {"name": "International", "name_hindi": "अंतर्राष्ट्रीय", "slug": "international", "icon_emoji": "🌍", "sort_order": 9},
    {"name": "Industrial", "name_hindi": "औद्योगिक", "slug": "industrial", "icon_emoji": "⚗️", "sort_order": 10},
]

# ── Products (69 total) ───────────────────────────────────────────────────────
# category_slug is resolved to category_id before insert

PRODUCTS = [
    # ── MILK TYPES (cat: milk) ────────────────────────────────────────────────
    {
        "name": "Whole Milk", "name_hindi": "पूर्ण वसा दूध",
        "category_slug": "milk", "subcategory": "Full Fat",
        "packaging_type": "pouch", "price": 28.0, "mrp": 30.0, "discount_percent": 6.7,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.5, "review_count": 320,
        "description": "Fresh whole milk with full fat content, rich and creamy.",
        "description_hindi": "ताजा पूर्ण वसा दूध, समृद्ध और मलाईदार।",
        "is_featured": True, "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Toned Milk", "name_hindi": "टोंड दूध",
        "category_slug": "milk", "subcategory": "Toned",
        "packaging_type": "pouch", "price": 24.0, "mrp": 26.0, "discount_percent": 7.7,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.3, "review_count": 580,
        "description": "Standardized toned milk, ideal for everyday use.",
        "description_hindi": "मानकीकृत टोंड दूध, रोज़ के उपयोग के लिए आदर्श।",
        "is_featured": True, "is_best_seller": True,
    },
    {
        "name": "Double Toned Milk", "name_hindi": "डबल टोंड दूध",
        "category_slug": "milk", "subcategory": "Double Toned",
        "packaging_type": "pouch", "price": 22.0, "mrp": 24.0, "discount_percent": 8.3,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.2, "review_count": 210,
        "description": "Low-fat double toned milk for a lighter diet.",
        "description_hindi": "कम वसा वाला डबल टोंड दूध, हल्के आहार के लिए।",
        "is_recommended": True,
    },
    {
        "name": "Skim Milk", "name_hindi": "स्किम्ड दूध",
        "category_slug": "milk", "subcategory": "Skim",
        "packaging_type": "tetra_pack", "price": 52.0, "mrp": 58.0, "discount_percent": 10.3,
        "unit": "L", "weight_volume": "1L", "rating": 4.1, "review_count": 145,
        "description": "Fat-free skim milk, perfect for calorie-conscious consumers.",
        "description_hindi": "वसा-मुक्त स्किम्ड दूध, कैलोरी सचेत उपभोक्ताओं के लिए।",
        "is_recommended": True,
    },
    {
        "name": "Organic Milk", "name_hindi": "जैविक दूध",
        "category_slug": "milk", "subcategory": "Organic",
        "packaging_type": "tetra_pack", "price": 75.0, "mrp": 82.0, "discount_percent": 8.5,
        "unit": "L", "weight_volume": "1L", "rating": 4.6, "review_count": 198,
        "description": "Certified organic milk from free-range cows, no hormones.",
        "description_hindi": "प्रमाणित जैविक दूध, हार्मोन-मुक्त।",
        "is_featured": True, "is_trending": True,
    },
    {
        "name": "Lactose-Free Milk", "name_hindi": "लैक्टोज-मुक्त दूध",
        "category_slug": "milk", "subcategory": "Lactose-Free",
        "packaging_type": "tetra_pack", "price": 85.0, "mrp": 95.0, "discount_percent": 10.5,
        "unit": "L", "weight_volume": "1L", "rating": 4.4, "review_count": 167,
        "description": "Specially processed milk for lactose-intolerant individuals.",
        "description_hindi": "लैक्टोज असहिष्णु व्यक्तियों के लिए विशेष रूप से प्रसंस्कृत दूध।",
        "is_fresh_arrival": True,
    },
    {
        "name": "A2 Cow Milk", "name_hindi": "A2 गाय का दूध",
        "category_slug": "milk", "subcategory": "A2",
        "packaging_type": "glass_bottle", "price": 65.0, "mrp": 72.0, "discount_percent": 9.7,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.7, "review_count": 289,
        "description": "Pure A2 protein cow milk from desi breed cows.",
        "description_hindi": "देसी नस्ल की गायों से शुद्ध A2 प्रोटीन दूध।",
        "is_featured": True, "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Buffalo Milk", "name_hindi": "भैंस का दूध",
        "category_slug": "milk", "subcategory": "Buffalo",
        "packaging_type": "pouch", "price": 35.0, "mrp": 38.0, "discount_percent": 7.9,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.4, "review_count": 302,
        "description": "Rich and creamy buffalo milk, higher fat content.",
        "description_hindi": "समृद्ध और मलाईदार भैंस का दूध, उच्च वसा सामग्री।",
        "is_best_seller": True,
    },
    {
        "name": "Goat Milk", "name_hindi": "बकरी का दूध",
        "category_slug": "milk", "subcategory": "Goat",
        "packaging_type": "glass_bottle", "price": 55.0, "mrp": 62.0, "discount_percent": 11.3,
        "unit": "ml", "weight_volume": "250ml", "rating": 4.3, "review_count": 89,
        "description": "Fresh goat milk, easier to digest than cow milk.",
        "description_hindi": "ताजा बकरी का दूध, गाय के दूध से पचने में आसान।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Camel Milk", "name_hindi": "ऊंट का दूध",
        "category_slug": "milk", "subcategory": "Camel",
        "packaging_type": "tetra_pack", "price": 120.0, "mrp": 135.0, "discount_percent": 11.1,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.2, "review_count": 45,
        "description": "Nutrient-rich camel milk, naturally low in fat.",
        "description_hindi": "पोषक तत्वों से भरपूर ऊंट का दूध, प्राकृतिक रूप से कम वसा।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Almond Milk", "name_hindi": "बादाम दूध",
        "category_slug": "milk", "subcategory": "Plant-Based",
        "packaging_type": "tetra_pack", "price": 180.0, "mrp": 199.0, "discount_percent": 9.5,
        "unit": "L", "weight_volume": "1L", "rating": 4.5, "review_count": 312,
        "description": "Creamy almond milk, dairy-free and vegan-friendly.",
        "description_hindi": "क्रीमी बादाम दूध, डेयरी-मुक्त और शाकाहारी।",
        "is_trending": True, "is_featured": True,
    },
    {
        "name": "Oat Milk", "name_hindi": "ओट मिल्क",
        "category_slug": "milk", "subcategory": "Plant-Based",
        "packaging_type": "tetra_pack", "price": 160.0, "mrp": 175.0, "discount_percent": 8.6,
        "unit": "L", "weight_volume": "1L", "rating": 4.4, "review_count": 276,
        "description": "Smooth oat milk, great for coffee and cereals.",
        "description_hindi": "मुलायम ओट मिल्क, कॉफी और अनाज के लिए बेहतरीन।",
        "is_trending": True,
    },
    # ── CORE DAIRY (cat: paneer-butter / ghee / curd-yogurt) ─────────────────
    {
        "name": "Fresh Paneer", "name_hindi": "ताजा पनीर",
        "category_slug": "paneer-butter", "subcategory": "Paneer",
        "packaging_type": "block_pack", "price": 80.0, "mrp": 90.0, "discount_percent": 11.1,
        "unit": "g", "weight_volume": "200g", "rating": 4.6, "review_count": 745,
        "description": "Soft and fresh paneer made from full-fat cow milk.",
        "description_hindi": "पूर्ण वसा गाय के दूध से बना मुलायम और ताजा पनीर।",
        "is_featured": True, "is_best_seller": True,
    },
    {
        "name": "Malai Paneer", "name_hindi": "मलाई पनीर",
        "category_slug": "paneer-butter", "subcategory": "Paneer",
        "packaging_type": "block_pack", "price": 95.0, "mrp": 105.0, "discount_percent": 9.5,
        "unit": "g", "weight_volume": "200g", "rating": 4.7, "review_count": 512,
        "description": "Extra creamy malai paneer with a rich, melt-in-mouth texture.",
        "description_hindi": "अतिरिक्त मलाईदार मलाई पनीर, मुँह में पिघलने वाली बनावट।",
        "is_featured": True, "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "White Butter", "name_hindi": "सफेद मक्खन",
        "category_slug": "paneer-butter", "subcategory": "Butter",
        "packaging_type": "box", "price": 55.0, "mrp": 60.0, "discount_percent": 8.3,
        "unit": "g", "weight_volume": "100g", "rating": 4.5, "review_count": 389,
        "description": "Freshly churned white butter, no salt added.",
        "description_hindi": "ताजा मंथन किया हुआ सफेद मक्खन, बिना नमक।",
        "is_best_seller": True,
    },
    {
        "name": "Salted Butter", "name_hindi": "नमकीन मक्खन",
        "category_slug": "paneer-butter", "subcategory": "Butter",
        "packaging_type": "box", "price": 58.0, "mrp": 65.0, "discount_percent": 10.8,
        "unit": "g", "weight_volume": "100g", "rating": 4.4, "review_count": 421,
        "description": "Smooth salted butter, perfect for bread and cooking.",
        "description_hindi": "मुलायम नमकीन मक्खन, ब्रेड और खाना बनाने के लिए।",
        "is_best_seller": True,
    },
    {
        "name": "Pure Ghee", "name_hindi": "शुद्ध घी",
        "category_slug": "ghee", "subcategory": "Cow Ghee",
        "packaging_type": "jar", "price": 320.0, "mrp": 360.0, "discount_percent": 11.1,
        "unit": "g", "weight_volume": "500g", "rating": 4.8, "review_count": 934,
        "description": "Traditional slow-cooked pure desi ghee with rich aroma.",
        "description_hindi": "पारंपरिक धीमी आँच पर पकाया शुद्ध देसी घी, समृद्ध सुगंध के साथ।",
        "is_featured": True, "is_best_seller": True, "is_trending": True,
    },
    {
        "name": "Cow Ghee", "name_hindi": "गाय का घी",
        "category_slug": "ghee", "subcategory": "Cow Ghee",
        "packaging_type": "jar", "price": 380.0, "mrp": 420.0, "discount_percent": 9.5,
        "unit": "g", "weight_volume": "500g", "rating": 4.9, "review_count": 1102,
        "description": "Premium A2 cow ghee made using traditional bilona method.",
        "description_hindi": "पारंपरिक बिलोना विधि से बना प्रीमियम A2 गाय का घी।",
        "is_featured": True, "is_best_seller": True,
    },
    {
        "name": "Dahi", "name_hindi": "दही",
        "category_slug": "curd-yogurt", "subcategory": "Curd",
        "packaging_type": "cup", "price": 45.0, "mrp": 50.0, "discount_percent": 10.0,
        "unit": "g", "weight_volume": "400g", "rating": 4.5, "review_count": 672,
        "description": "Fresh thick dahi, set at perfect temperature.",
        "description_hindi": "ताजा गाढ़ा दही, सही तापमान पर जमाया गया।",
        "is_best_seller": True, "is_featured": True,
    },
    {
        "name": "Mishti Dahi", "name_hindi": "मिष्टी दही",
        "category_slug": "curd-yogurt", "subcategory": "Curd",
        "packaging_type": "cup", "price": 38.0, "mrp": 42.0, "discount_percent": 9.5,
        "unit": "g", "weight_volume": "200g", "rating": 4.6, "review_count": 445,
        "description": "Bengali-style sweet mishti dahi with caramel notes.",
        "description_hindi": "बंगाली शैली की मीठी मिष्टी दही, कैरेमल स्वाद के साथ।",
        "is_trending": True,
    },
    {
        "name": "Chaach Buttermilk", "name_hindi": "छाछ",
        "category_slug": "curd-yogurt", "subcategory": "Buttermilk",
        "packaging_type": "pouch", "price": 20.0, "mrp": 22.0, "discount_percent": 9.1,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.3, "review_count": 389,
        "description": "Refreshing spiced buttermilk, ideal for hot summer days.",
        "description_hindi": "ताजगी भरी मसालेदार छाछ, गर्मियों के लिए आदर्श।",
        "is_best_seller": True,
    },
    {
        "name": "Fresh Cream", "name_hindi": "ताजी क्रीम",
        "category_slug": "paneer-butter", "subcategory": "Cream",
        "packaging_type": "tub", "price": 65.0, "mrp": 72.0, "discount_percent": 9.7,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.5, "review_count": 267,
        "description": "Fresh dairy cream, perfect for desserts and curries.",
        "description_hindi": "ताजी डेयरी क्रीम, मिठाइयों और करी के लिए।",
        "is_recommended": True,
    },
    # ── CHEESE (cat: cheese) ──────────────────────────────────────────────────
    {
        "name": "Mozzarella Cheese", "name_hindi": "मोज़रेला चीज़",
        "category_slug": "cheese", "subcategory": "Mozzarella",
        "packaging_type": "block_pack", "price": 180.0, "mrp": 200.0, "discount_percent": 10.0,
        "unit": "g", "weight_volume": "200g", "rating": 4.6, "review_count": 512,
        "description": "Stretchy mozzarella cheese, ideal for pizzas and salads.",
        "description_hindi": "खिंचाव वाला मोज़रेला, पिज्जा और सलाद के लिए।",
        "is_featured": True, "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Cheddar Cheese", "name_hindi": "चेडर चीज़",
        "category_slug": "cheese", "subcategory": "Cheddar",
        "packaging_type": "block_pack", "price": 195.0, "mrp": 218.0, "discount_percent": 10.6,
        "unit": "g", "weight_volume": "200g", "rating": 4.5, "review_count": 378,
        "description": "Aged cheddar with sharp, tangy flavour.",
        "description_hindi": "परिपक्व चेडर, तीखे और खट्टे स्वाद के साथ।",
        "is_trending": True,
    },
    {
        "name": "Processed Cheese", "name_hindi": "प्रोसेस्ड चीज़",
        "category_slug": "cheese", "subcategory": "Processed",
        "packaging_type": "box", "price": 120.0, "mrp": 135.0, "discount_percent": 11.1,
        "unit": "g", "weight_volume": "200g", "rating": 4.3, "review_count": 621,
        "description": "Smooth processed cheese block, great for sandwiches.",
        "description_hindi": "मुलायम प्रोसेस्ड चीज़ ब्लॉक, सैंडविच के लिए।",
        "is_best_seller": True,
    },
    {
        "name": "Cheese Slices", "name_hindi": "चीज़ स्लाइस",
        "category_slug": "cheese", "subcategory": "Processed",
        "packaging_type": "box", "price": 135.0, "mrp": 150.0, "discount_percent": 10.0,
        "unit": "g", "weight_volume": "200g", "rating": 4.4, "review_count": 489,
        "description": "Pre-sliced cheese for quick and easy burgers and toasts.",
        "description_hindi": "पहले से कटी चीज़ स्लाइस, बर्गर और टोस्ट के लिए।",
        "is_best_seller": True,
    },
    {
        "name": "Cream Cheese", "name_hindi": "क्रीम चीज़",
        "category_slug": "cheese", "subcategory": "Cream Cheese",
        "packaging_type": "tub", "price": 160.0, "mrp": 178.0, "discount_percent": 10.1,
        "unit": "g", "weight_volume": "180g", "rating": 4.5, "review_count": 312,
        "description": "Smooth and creamy cream cheese, perfect for cheesecakes.",
        "description_hindi": "मुलायम क्रीम चीज़, चीज़केक के लिए।",
        "is_recommended": True,
    },
    {
        "name": "Parmesan Cheese", "name_hindi": "परमेसान चीज़",
        "category_slug": "cheese", "subcategory": "Hard Cheese",
        "packaging_type": "block_pack", "price": 220.0, "mrp": 245.0, "discount_percent": 10.2,
        "unit": "g", "weight_volume": "100g", "rating": 4.4, "review_count": 178,
        "description": "Hard aged parmesan, perfect grated over pasta.",
        "description_hindi": "कठोर परिपक्व परमेसान, पास्ता पर कद्दूकस करने के लिए।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Feta Cheese", "name_hindi": "फेटा चीज़",
        "category_slug": "cheese", "subcategory": "Specialty",
        "packaging_type": "jar", "price": 240.0, "mrp": 268.0, "discount_percent": 10.4,
        "unit": "g", "weight_volume": "150g", "rating": 4.3, "review_count": 145,
        "description": "Crumbly Greek-style feta in brine, tangy and salty.",
        "description_hindi": "ग्रीक शैली की फेटा ब्राइन में, खट्टी और नमकीन।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Ricotta Cheese", "name_hindi": "रिकोटा चीज़",
        "category_slug": "cheese", "subcategory": "Soft Cheese",
        "packaging_type": "tub", "price": 185.0, "mrp": 205.0, "discount_percent": 9.8,
        "unit": "g", "weight_volume": "200g", "rating": 4.4, "review_count": 134,
        "description": "Light and fluffy ricotta, great for lasagna and desserts.",
        "description_hindi": "हल्का और फूला हुआ रिकोटा, लसागना और मिठाइयों के लिए।",
        "is_recommended": True,
    },
    {
        "name": "Brie Cheese", "name_hindi": "ब्री चीज़",
        "category_slug": "cheese", "subcategory": "Specialty",
        "packaging_type": "block_pack", "price": 290.0, "mrp": 325.0, "discount_percent": 10.8,
        "unit": "g", "weight_volume": "125g", "rating": 4.3, "review_count": 98,
        "description": "Soft ripened French-style brie with edible rind.",
        "description_hindi": "खाने योग्य छिलके वाली फ्रेंच शैली की सॉफ्ट ब्री।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Blue Cheese", "name_hindi": "ब्लू चीज़",
        "category_slug": "cheese", "subcategory": "Specialty",
        "packaging_type": "block_pack", "price": 310.0, "mrp": 345.0, "discount_percent": 10.1,
        "unit": "g", "weight_volume": "100g", "rating": 4.1, "review_count": 76,
        "description": "Bold and pungent blue cheese with distinctive veins.",
        "description_hindi": "विशिष्ट नसों वाली तीखी ब्लू चीज़।",
        "is_fresh_arrival": True,
    },
    # ── YOGURT (cat: curd-yogurt) ─────────────────────────────────────────────
    {
        "name": "Plain Yogurt", "name_hindi": "सादा दही",
        "category_slug": "curd-yogurt", "subcategory": "Yogurt",
        "packaging_type": "cup", "price": 48.0, "mrp": 54.0, "discount_percent": 11.1,
        "unit": "g", "weight_volume": "400g", "rating": 4.4, "review_count": 398,
        "description": "Thick set plain yogurt with natural live cultures.",
        "description_hindi": "प्राकृतिक जीवित कल्चर के साथ गाढ़ा दही।",
        "is_best_seller": True,
    },
    {
        "name": "Strawberry Yogurt", "name_hindi": "स्ट्रॉबेरी दही",
        "category_slug": "curd-yogurt", "subcategory": "Flavored Yogurt",
        "packaging_type": "cup", "price": 35.0, "mrp": 40.0, "discount_percent": 12.5,
        "unit": "g", "weight_volume": "150g", "rating": 4.5, "review_count": 456,
        "description": "Creamy yogurt with real strawberry fruit pieces.",
        "description_hindi": "असली स्ट्रॉबेरी फल के टुकड़ों के साथ क्रीमी दही।",
        "is_trending": True, "is_featured": True,
    },
    {
        "name": "Mango Yogurt", "name_hindi": "आम दही",
        "category_slug": "curd-yogurt", "subcategory": "Flavored Yogurt",
        "packaging_type": "cup", "price": 35.0, "mrp": 40.0, "discount_percent": 12.5,
        "unit": "g", "weight_volume": "150g", "rating": 4.6, "review_count": 534,
        "description": "Delicious mango yogurt with Alphonso mango pulp.",
        "description_hindi": "अल्फांसो आम के गूदे के साथ स्वादिष्ट आम दही।",
        "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Greek Yogurt", "name_hindi": "ग्रीक योगर्ट",
        "category_slug": "curd-yogurt", "subcategory": "Yogurt",
        "packaging_type": "tub", "price": 110.0, "mrp": 125.0, "discount_percent": 12.0,
        "unit": "g", "weight_volume": "400g", "rating": 4.7, "review_count": 623,
        "description": "High-protein strained Greek yogurt, thick and velvety.",
        "description_hindi": "उच्च-प्रोटीन छाना हुआ ग्रीक योगर्ट, गाढ़ा और मखमली।",
        "is_featured": True, "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Low Fat Yogurt", "name_hindi": "लो-फैट दही",
        "category_slug": "curd-yogurt", "subcategory": "Yogurt",
        "packaging_type": "cup", "price": 42.0, "mrp": 48.0, "discount_percent": 12.5,
        "unit": "g", "weight_volume": "200g", "rating": 4.3, "review_count": 287,
        "description": "Light low-fat yogurt for a healthier choice.",
        "description_hindi": "स्वस्थ विकल्प के लिए हल्का लो-फैट दही।",
        "is_recommended": True,
    },
    # ── DESSERTS & SWEETS (cat: desserts) ─────────────────────────────────────
    {
        "name": "Vanilla Ice Cream", "name_hindi": "वनीला आइसक्रीम",
        "category_slug": "desserts", "subcategory": "Ice Cream",
        "packaging_type": "tub", "price": 145.0, "mrp": 165.0, "discount_percent": 12.1,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.6, "review_count": 789,
        "description": "Classic creamy vanilla ice cream with Madagascar vanilla.",
        "description_hindi": "मेडागास्कर वनीला के साथ क्लासिक वनीला आइसक्रीम।",
        "is_featured": True, "is_best_seller": True,
    },
    {
        "name": "Chocolate Ice Cream", "name_hindi": "चॉकलेट आइसक्रीम",
        "category_slug": "desserts", "subcategory": "Ice Cream",
        "packaging_type": "tub", "price": 155.0, "mrp": 175.0, "discount_percent": 11.4,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.7, "review_count": 912,
        "description": "Rich dark chocolate ice cream made with Belgian cocoa.",
        "description_hindi": "बेल्जियन कोको से बनी समृद्ध डार्क चॉकलेट आइसक्रीम।",
        "is_featured": True, "is_best_seller": True, "is_trending": True,
    },
    {
        "name": "Kesar Kulfi", "name_hindi": "केसर कुल्फी",
        "category_slug": "desserts", "subcategory": "Kulfi",
        "packaging_type": "stick_pack", "price": 120.0, "mrp": 135.0, "discount_percent": 11.1,
        "unit": "sticks", "weight_volume": "6 sticks", "rating": 4.8, "review_count": 654,
        "description": "Traditional kesar kulfi with premium saffron strands.",
        "description_hindi": "प्रीमियम केसर के धागों के साथ पारंपरिक केसर कुल्फी।",
        "is_featured": True, "is_best_seller": True, "is_trending": True,
    },
    {
        "name": "Mango Kulfi", "name_hindi": "आम कुल्फी",
        "category_slug": "desserts", "subcategory": "Kulfi",
        "packaging_type": "stick_pack", "price": 110.0, "mrp": 125.0, "discount_percent": 12.0,
        "unit": "sticks", "weight_volume": "6 sticks", "rating": 4.7, "review_count": 589,
        "description": "Creamy mango kulfi with real Alphonso mango pulp.",
        "description_hindi": "असली अल्फांसो आम के गूदे के साथ क्रीमी मैंगो कुल्फी।",
        "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Rabri", "name_hindi": "रबड़ी",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "tub", "price": 85.0, "mrp": 95.0, "discount_percent": 10.5,
        "unit": "g", "weight_volume": "250g", "rating": 4.6, "review_count": 312,
        "description": "Thick rabri made by slow-cooking full-fat milk with cardamom.",
        "description_hindi": "इलायची के साथ धीमी आँच पर पूर्ण वसा दूध से बनी गाढ़ी रबड़ी।",
        "is_featured": True,
    },
    {
        "name": "Basundi", "name_hindi": "बासुंदी",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "tub", "price": 90.0, "mrp": 100.0, "discount_percent": 10.0,
        "unit": "g", "weight_volume": "250g", "rating": 4.5, "review_count": 287,
        "description": "Gujarati-style basundi with dry fruits and saffron.",
        "description_hindi": "ड्राई फ्रूट्स और केसर के साथ गुजराती शैली की बासुंदी।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Milk Cake", "name_hindi": "मिल्क केक",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "box", "price": 95.0, "mrp": 110.0, "discount_percent": 13.6,
        "unit": "g", "weight_volume": "200g", "rating": 4.4, "review_count": 234,
        "description": "Alwar-style milk cake, dense and caramelized.",
        "description_hindi": "अलवर शैली का मिल्क केक, घना और कैरेमलाइज्ड।",
        "is_recommended": True,
    },
    {
        "name": "Peda", "name_hindi": "पेड़ा",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "box", "price": 110.0, "mrp": 125.0, "discount_percent": 12.0,
        "unit": "g", "weight_volume": "200g", "rating": 4.6, "review_count": 456,
        "description": "Mathura-style peda made from khoya and cardamom.",
        "description_hindi": "खोया और इलायची से बना मथुरा शैली का पेड़ा।",
        "is_best_seller": True, "is_trending": True,
    },
    {
        "name": "Rasgulla", "name_hindi": "रसगुल्ला",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "can", "price": 75.0, "mrp": 85.0, "discount_percent": 11.8,
        "unit": "g", "weight_volume": "500g", "rating": 4.5, "review_count": 678,
        "description": "Soft spongy rasgulla soaked in light sugar syrup.",
        "description_hindi": "हल्की शक्कर की चाशनी में भिगोया नरम स्पंजी रसगुल्ला।",
        "is_best_seller": True,
    },
    {
        "name": "Kaju Barfi", "name_hindi": "काजू बर्फी",
        "category_slug": "desserts", "subcategory": "Traditional Sweets",
        "packaging_type": "box", "price": 180.0, "mrp": 200.0, "discount_percent": 10.0,
        "unit": "g", "weight_volume": "200g", "rating": 4.7, "review_count": 512,
        "description": "Premium kaju barfi made with cashews and milk solids.",
        "description_hindi": "काजू और दूध के ठोस पदार्थ से बनी प्रीमियम काजू बर्फी।",
        "is_featured": True, "is_best_seller": True,
    },
    # ── MILK-BASED PRODUCTS (cat: milk-products) ──────────────────────────────
    {
        "name": "Condensed Milk", "name_hindi": "कंडेंस्ड मिल्क",
        "category_slug": "milk-products", "subcategory": "Condensed",
        "packaging_type": "can", "price": 95.0, "mrp": 108.0, "discount_percent": 12.0,
        "unit": "g", "weight_volume": "400g", "rating": 4.6, "review_count": 423,
        "description": "Sweet condensed milk, perfect for desserts and baking.",
        "description_hindi": "मीठा कंडेंस्ड मिल्क, मिठाइयों और बेकिंग के लिए।",
        "is_best_seller": True,
    },
    {
        "name": "Milk Powder", "name_hindi": "दूध पाउडर",
        "category_slug": "milk-products", "subcategory": "Powder",
        "packaging_type": "pouch", "price": 220.0, "mrp": 245.0, "discount_percent": 10.2,
        "unit": "g", "weight_volume": "500g", "rating": 4.4, "review_count": 312,
        "description": "Full-cream milk powder for tea, coffee and baking.",
        "description_hindi": "चाय, कॉफी और बेकिंग के लिए फुल-क्रीम दूध पाउडर।",
        "is_recommended": True,
    },
    {
        "name": "Khoya/Mawa", "name_hindi": "खोया/मावा",
        "category_slug": "milk-products", "subcategory": "Khoya",
        "packaging_type": "block_pack", "price": 110.0, "mrp": 125.0, "discount_percent": 12.0,
        "unit": "g", "weight_volume": "200g", "rating": 4.5, "review_count": 267,
        "description": "Fresh khoya/mawa, essential for Indian sweets.",
        "description_hindi": "ताजा खोया/मावा, भारतीय मिठाइयों के लिए आवश्यक।",
        "is_best_seller": True,
    },
    {
        "name": "Soy Milk", "name_hindi": "सोया मिल्क",
        "category_slug": "milk-products", "subcategory": "Plant-Based",
        "packaging_type": "tetra_pack", "price": 120.0, "mrp": 135.0, "discount_percent": 11.1,
        "unit": "L", "weight_volume": "1L", "rating": 4.3, "review_count": 198,
        "description": "Protein-rich soy milk, dairy-free alternative.",
        "description_hindi": "प्रोटीन युक्त सोया मिल्क, डेयरी-मुक्त विकल्प।",
        "is_recommended": True,
    },
    {
        "name": "Coconut Milk", "name_hindi": "नारियल दूध",
        "category_slug": "milk-products", "subcategory": "Plant-Based",
        "packaging_type": "can", "price": 85.0, "mrp": 95.0, "discount_percent": 10.5,
        "unit": "ml", "weight_volume": "400ml", "rating": 4.4, "review_count": 234,
        "description": "Thick coconut milk for curries and desserts.",
        "description_hindi": "करी और मिठाइयों के लिए गाढ़ा नारियल दूध।",
        "is_recommended": True,
    },
    {
        "name": "Strawberry Flavored Milk", "name_hindi": "स्ट्रॉबेरी फ्लेवर्ड मिल्क",
        "category_slug": "milk-products", "subcategory": "Flavored Milk",
        "packaging_type": "tetra_pack", "price": 25.0, "mrp": 28.0, "discount_percent": 10.7,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.4, "review_count": 489,
        "description": "Refreshing strawberry flavored milk drink for kids.",
        "description_hindi": "बच्चों के लिए ताजगी भरा स्ट्रॉबेरी फ्लेवर्ड मिल्क।",
        "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Chocolate Flavored Milk", "name_hindi": "चॉकलेट फ्लेवर्ड मिल्क",
        "category_slug": "milk-products", "subcategory": "Flavored Milk",
        "packaging_type": "tetra_pack", "price": 25.0, "mrp": 28.0, "discount_percent": 10.7,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.5, "review_count": 567,
        "description": "Rich chocolate milk drink, loved by kids and adults.",
        "description_hindi": "समृद्ध चॉकलेट मिल्क ड्रिंक, बच्चों और बड़ों दोनों को पसंद।",
        "is_trending": True, "is_best_seller": True,
    },
    {
        "name": "Vanilla Milkshake", "name_hindi": "वनीला मिल्कशेक",
        "category_slug": "milk-products", "subcategory": "Milkshake",
        "packaging_type": "bottle", "price": 55.0, "mrp": 62.0, "discount_percent": 11.3,
        "unit": "ml", "weight_volume": "250ml", "rating": 4.5, "review_count": 345,
        "description": "Thick and creamy vanilla milkshake, ready to drink.",
        "description_hindi": "गाढ़ा और क्रीमी वनीला मिल्कशेक, पीने के लिए तैयार।",
        "is_recommended": True,
    },
    # ── BEVERAGES (cat: beverages) ────────────────────────────────────────────
    {
        "name": "Mango Lassi", "name_hindi": "आम लस्सी",
        "category_slug": "beverages", "subcategory": "Lassi",
        "packaging_type": "bottle", "price": 40.0, "mrp": 45.0, "discount_percent": 11.1,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.7, "review_count": 678,
        "description": "Chilled mango lassi made with fresh dahi and mango pulp.",
        "description_hindi": "ताजी दही और आम के गूदे से बनी ठंडी मैंगो लस्सी।",
        "is_featured": True, "is_best_seller": True, "is_trending": True,
    },
    {
        "name": "Rose Lassi", "name_hindi": "गुलाब लस्सी",
        "category_slug": "beverages", "subcategory": "Lassi",
        "packaging_type": "bottle", "price": 38.0, "mrp": 42.0, "discount_percent": 9.5,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.5, "review_count": 423,
        "description": "Sweet rose lassi with rose water and gulkand.",
        "description_hindi": "गुलाब जल और गुलकंद के साथ मीठी गुलाब लस्सी।",
        "is_trending": True,
    },
    {
        "name": "Masala Chaach", "name_hindi": "मसाला छाछ",
        "category_slug": "beverages", "subcategory": "Buttermilk",
        "packaging_type": "pouch", "price": 18.0, "mrp": 20.0, "discount_percent": 10.0,
        "unit": "ml", "weight_volume": "200ml", "rating": 4.4, "review_count": 512,
        "description": "Spiced masala chaach with jeera, ginger and mint.",
        "description_hindi": "जीरा, अदरक और पुदीना के साथ मसाला छाछ।",
        "is_best_seller": True,
    },
    {
        "name": "Cold Coffee", "name_hindi": "कोल्ड कॉफी",
        "category_slug": "beverages", "subcategory": "Coffee",
        "packaging_type": "bottle", "price": 55.0, "mrp": 62.0, "discount_percent": 11.3,
        "unit": "ml", "weight_volume": "250ml", "rating": 4.5, "review_count": 389,
        "description": "Chilled cold coffee with rich milk and premium coffee extract.",
        "description_hindi": "समृद्ध दूध और प्रीमियम कॉफी एक्सट्रैक्ट के साथ ठंडी कॉफी।",
        "is_trending": True,
    },
    {
        "name": "Turmeric Milk Mix", "name_hindi": "हल्दी दूध मिक्स",
        "category_slug": "beverages", "subcategory": "Premix",
        "packaging_type": "box", "price": 65.0, "mrp": 75.0, "discount_percent": 13.3,
        "unit": "g", "weight_volume": "100g", "rating": 4.6, "review_count": 312,
        "description": "Golden milk mix with turmeric, ginger and black pepper.",
        "description_hindi": "हल्दी, अदरक और काली मिर्च के साथ गोल्डन मिल्क मिक्स।",
        "is_featured": True, "is_recommended": True,
    },
    {
        "name": "Tea Premix", "name_hindi": "चाय प्रीमिक्स",
        "category_slug": "beverages", "subcategory": "Premix",
        "packaging_type": "box", "price": 85.0, "mrp": 95.0, "discount_percent": 10.5,
        "unit": "g", "weight_volume": "200g", "rating": 4.3, "review_count": 267,
        "description": "Instant masala tea premix with milk powder and spices.",
        "description_hindi": "दूध पाउडर और मसालों के साथ इंस्टेंट मसाला चाय प्रीमिक्स।",
        "is_recommended": True,
    },
    # ── INTERNATIONAL (cat: international) ────────────────────────────────────
    {
        "name": "Kefir", "name_hindi": "केफिर",
        "category_slug": "international", "subcategory": "Fermented",
        "packaging_type": "glass_bottle", "price": 195.0, "mrp": 220.0, "discount_percent": 11.4,
        "unit": "ml", "weight_volume": "500ml", "rating": 4.3, "review_count": 89,
        "description": "Probiotic-rich kefir fermented drink for gut health.",
        "description_hindi": "आंत स्वास्थ्य के लिए प्रोबायोटिक युक्त किण्वित पेय।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Sour Cream", "name_hindi": "खट्टी क्रीम",
        "category_slug": "international", "subcategory": "Cream",
        "packaging_type": "tub", "price": 145.0, "mrp": 162.0, "discount_percent": 10.5,
        "unit": "g", "weight_volume": "200g", "rating": 4.2, "review_count": 76,
        "description": "Tangy sour cream for dips, tacos and baked potatoes.",
        "description_hindi": "डिप्स, टैको और बेक्ड आलू के लिए खट्टी क्रीम।",
        "is_fresh_arrival": True,
    },
    # ── INDUSTRIAL/SPECIALTY (cat: industrial) ────────────────────────────────
    {
        "name": "Whey Protein", "name_hindi": "व्हे प्रोटीन",
        "category_slug": "industrial", "subcategory": "Protein",
        "packaging_type": "can", "price": 1850.0, "mrp": 2100.0, "discount_percent": 11.9,
        "unit": "kg", "weight_volume": "1kg", "rating": 4.5, "review_count": 456,
        "description": "High-quality whey protein concentrate from dairy, 24g protein/serving.",
        "description_hindi": "डेयरी से उच्च गुणवत्ता व्हे प्रोटीन, 24g प्रोटीन/सर्विंग।",
        "is_featured": True, "is_trending": True,
    },
    {
        "name": "Casein Protein", "name_hindi": "कैसिन प्रोटीन",
        "category_slug": "industrial", "subcategory": "Protein",
        "packaging_type": "can", "price": 1950.0, "mrp": 2200.0, "discount_percent": 11.4,
        "unit": "kg", "weight_volume": "1kg", "rating": 4.4, "review_count": 234,
        "description": "Slow-digesting micellar casein for overnight muscle recovery.",
        "description_hindi": "रात भर मांसपेशी रिकवरी के लिए धीरे पचने वाला मिसेलर कैसिन।",
        "is_trending": True,
    },
    {
        "name": "Lactose Powder", "name_hindi": "लैक्टोज पाउडर",
        "category_slug": "industrial", "subcategory": "Ingredient",
        "packaging_type": "pouch", "price": 380.0, "mrp": 425.0, "discount_percent": 10.6,
        "unit": "g", "weight_volume": "500g", "rating": 4.2, "review_count": 56,
        "description": "Food-grade lactose powder for baking and confectionery.",
        "description_hindi": "बेकिंग और कन्फेक्शनरी के लिए खाद्य-ग्रेड लैक्टोज पाउडर।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Dairy Enzymes", "name_hindi": "डेयरी एंजाइम",
        "category_slug": "industrial", "subcategory": "Ingredient",
        "packaging_type": "bottle", "price": 450.0, "mrp": 500.0, "discount_percent": 10.0,
        "unit": "ml", "weight_volume": "100ml", "rating": 4.1, "review_count": 34,
        "description": "Rennet and lactase enzyme blend for cheese and dairy processing.",
        "description_hindi": "चीज़ और डेयरी प्रसंस्करण के लिए रेनेट और लैक्टेस एंजाइम।",
        "is_fresh_arrival": True,
    },
    {
        "name": "Milk Custard Powder", "name_hindi": "मिल्क कस्टर्ड पाउडर",
        "category_slug": "industrial", "subcategory": "Baking",
        "packaging_type": "box", "price": 55.0, "mrp": 62.0, "discount_percent": 11.3,
        "unit": "g", "weight_volume": "100g", "rating": 4.3, "review_count": 189,
        "description": "Vanilla custard powder made with real milk solids.",
        "description_hindi": "असली दूध के ठोस पदार्थ से बना वनीला कस्टर्ड पाउडर।",
        "is_recommended": True,
    },
    {
        "name": "Protein Dairy Drink", "name_hindi": "प्रोटीन डेयरी ड्रिंक",
        "category_slug": "industrial", "subcategory": "Protein",
        "packaging_type": "bottle", "price": 75.0, "mrp": 85.0, "discount_percent": 11.8,
        "unit": "ml", "weight_volume": "250ml", "rating": 4.4, "review_count": 312,
        "description": "Ready-to-drink high-protein dairy beverage, 20g protein.",
        "description_hindi": "पीने के लिए तैयार उच्च-प्रोटीन डेयरी पेय, 20g प्रोटीन।",
        "is_trending": True, "is_featured": True,
    },
]


async def seed():
    await create_tables()
    async with AsyncSessionLocal() as db:
        # Check if already seeded
        from sqlalchemy import select, func
        count = (await db.execute(select(func.count(Product.id)))).scalar_one()
        if count > 0:
            print(f"Database already has {count} products. Skipping seed.")
            print("To reseed, delete yadav_dairy.db and run again.")
            return

        print("Seeding categories...")
        cat_map: dict[str, int] = {}
        for cat_data in CATEGORIES:
            cat = Category(**cat_data)
            db.add(cat)
            await db.flush()
            cat_map[cat.slug] = cat.id
            print(f"  ✓ {cat.name}")

        print("\nSeeding admin user...")
        admin = User(
            email="admin@yadavdairy.com",
            password_hash=hash_password("admin123"),
            full_name="Yadav Dairy Admin",
            is_admin=True,
        )
        db.add(admin)

        print("\nSeeding 69 products...")
        for i, p_data in enumerate(PRODUCTS, 1):
            slug = p_data.pop("category_slug")
            p_data["category_id"] = cat_map[slug]
            p_data.setdefault("brand", "Yadav Dairy")
            p_data.setdefault("stock", 100)
            product = Product(**p_data)
            db.add(product)
            print(f"  ✓ [{i:02d}] {product.name}")

        await db.commit()
        print("\n✅ Seed complete!")
        print("   Admin: admin@yadavdairy.com / admin123")
        print("   DB:    yadav_dairy.db")
        print("   Run:   uvicorn main:app --reload")


if __name__ == "__main__":
    asyncio.run(seed())
