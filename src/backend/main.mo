import List "mo:core/List";
import Time "mo:core/Time";
import CatalogLib "lib/catalog";
import OrdersLib "lib/orders";
import CatalogApi "mixins/catalog-api";
import OrdersApi "mixins/orders-api";
import AdminApi "mixins/admin-api";



actor {
  // Shared mutable state (passed by reference to mixins)
  let state = {
    var adminPrincipal : ?Principal = null;
    var nextProductId : Nat = 1;
    var nextCategoryId : Nat = 1;
    var nextSubcategoryId : Nat = 1;
    var nextOrderId : Nat = 1;
  };
  var sampleDataLoaded : Bool = false;

  // Domain state
  let products = List.empty<CatalogLib.Product>();
  let categories = List.empty<CatalogLib.Category>();
  let subcategories = List.empty<CatalogLib.Subcategory>();
  let orders = List.empty<OrdersLib.Order>();

  // ── Sample data helpers ────────────────────────────────────────────

  func addCat(name : Text, nameHi : Text, desc : Text, icon : Text, sort : Nat) {
    let c : CatalogLib.Category = {
      id = state.nextCategoryId;
      name;
      nameHi;
      description = desc;
      iconEmoji = icon;
      sortOrder = sort;
    };
    categories.add(c);
    state.nextCategoryId += 1;
  };

  func addSub(catId : Nat, name : Text, nameHi : Text) {
    let s : CatalogLib.Subcategory = {
      id = state.nextSubcategoryId;
      categoryId = catId;
      name;
      nameHi;
    };
    subcategories.add(s);
    state.nextSubcategoryId += 1;
  };

  func addProd(
    nameEn : Text, nameHi : Text, desc : Text,
    price : Nat, orig : Nat, catId : Nat, subId : Nat,
    pkg : Text, fat : Text, img : Text,
    stock : Nat, rating : Float, reviews : Nat,
    featured : Bool, trending : Bool,
  ) {
    let p : CatalogLib.Product = {
      id = state.nextProductId;
      nameEn; nameHi; description = desc;
      brand = "Yadav Dairy";
      price; originalPrice = orig;
      categoryId = catId; subcategoryId = subId;
      packagingType = pkg; fatContent = fat;
      imageUrl = img;
      inStock = stock > 0;
      stockCount = stock;
      rating; reviewCount = reviews;
      isFeatured = featured; isTrending = trending;
      createdAt = Time.now();
    };
    products.add(p);
    state.nextProductId += 1;
  };

  // ── Pre-populate sample data ───────────────────────────────────────

  func loadSampleData() {
    if (sampleDataLoaded) return;
    sampleDataLoaded := true;

    // === CATEGORIES (10) ===
    // 1: Milk Types
    addCat("Milk Types", "दूध के प्रकार", "Fresh and packaged milk varieties", "🥛", 1);
    // 2: Plant-Based Milk
    addCat("Plant-Based Milk", "पौधा-आधारित दूध", "Dairy-free milk alternatives", "🌱", 2);
    // 3: Core Dairy
    addCat("Core Dairy", "मुख्य डेयरी", "Butter, ghee, paneer, curd and more", "🧈", 3);
    // 4: Cheese
    addCat("Cheese", "पनीर / चीज़", "All types of cheese from around the world", "🧀", 4);
    // 5: Desserts & Sweets
    addCat("Desserts & Sweets", "मिठाई और डेसर्ट", "Indian and international dairy desserts", "🍮", 5);
    // 6: Milk-Based Products
    addCat("Milk-Based Products", "दूध से बने उत्पाद", "Condensed milk, milk powder, flavoured milk", "🫙", 6);
    // 7: Beverages
    addCat("Beverages", "पेय पदार्थ", "Lassi, chaas, protein drinks and more", "🥤", 7);
    // 8: International Dairy
    addCat("International Dairy", "अंतरराष्ट्रीय डेयरी", "Kefir, sour cream and global specialities", "🌍", 8);
    // 9: Industrial Dairy
    addCat("Industrial Dairy", "औद्योगिक डेयरी", "Whey protein, casein and dairy ingredients", "⚗️", 9);
    // 10: Packaging
    addCat("Packaging", "पैकेजिंग", "Milk in special packaging formats", "📦", 10);

    // === SUBCATEGORIES ===
    // Cat 1: Milk Types
    addSub(1, "Cow Milk", "गाय का दूध");       // sub 1
    addSub(1, "Buffalo Milk", "भैंस का दूध");    // sub 2
    addSub(1, "Specialty Milk", "विशेष दूध");    // sub 3
    // Cat 2: Plant-Based
    addSub(2, "Nut Milk", "नट दूध");             // sub 4
    addSub(2, "Grain Milk", "अनाज दूध");         // sub 5
    // Cat 3: Core Dairy
    addSub(3, "Paneer & Cheese", "पनीर");        // sub 6
    addSub(3, "Butter & Ghee", "मक्खन और घी");   // sub 7
    addSub(3, "Curd & Yogurt", "दही");            // sub 8
    // Cat 4: Cheese
    addSub(4, "Soft Cheese", "मुलायम चीज़");      // sub 9
    addSub(4, "Hard Cheese", "कठोर चीज़");        // sub 10
    // Cat 5: Desserts
    addSub(5, "Ice Cream", "आइसक्रीम");          // sub 11
    addSub(5, "Indian Sweets", "भारतीय मिठाई");  // sub 12
    // Cat 6: Milk Products
    addSub(6, "Condensed & Powder", "कंडेंस्ड दूध"); // sub 13
    addSub(6, "Flavoured Milk", "फ्लेवर्ड दूध");     // sub 14
    // Cat 7: Beverages
    addSub(7, "Lassi & Chaas", "लस्सी और छाछ"); // sub 15
    addSub(7, "Protein Drinks", "प्रोटीन ड्रिंक"); // sub 16
    // Cat 8: International
    addSub(8, "Fermented", "किण्वित");             // sub 17
    // Cat 9: Industrial
    addSub(9, "Protein Powders", "प्रोटीन पाउडर"); // sub 18
    // Cat 10: Packaging
    addSub(10, "Special Pack", "विशेष पैक");       // sub 19

    // ================================================================
    // === PRODUCTS (60) — brand = "Yadav Dairy", SVG packaging keys ==
    // ================================================================

    // -- CAT 1: Milk Types (8 products) --
    addProd("Full Cream Milk", "सम्पूर्ण क्रीम दूध",
      "Rich, creamy full-fat cow milk perfect for chai and cooking. 500ml pouch.",
      28, 30, 1, 1, "pouch", "6%", "milk_pouch",
      200, 4.5, 1280, true, false);

    addProd("Toned Milk", "टोन्ड दूध",
      "Low-fat toned milk, ideal for health-conscious families. 1L tetra pack.",
      52, 55, 1, 1, "tetra-pack", "3%", "milk_tetrapack",
      150, 4.3, 890, false, true);

    addProd("A2 Cow Milk", "A2 गाय का दूध",
      "Premium A2 protein milk from desi Gir cow. 1L glass bottle.",
      120, 140, 1, 3, "bottle", "4.5%", "milk_bottle",
      80, 4.7, 420, true, true);

    addProd("Buffalo Milk", "भैंस का दूध",
      "Fresh buffalo milk with high fat content, great for making paneer and khoya. 500ml.",
      32, 35, 1, 2, "pouch", "7%", "milk_pouch",
      180, 4.4, 560, false, false);

    addProd("Lactose-Free Milk", "लैक्टोज-फ्री दूध",
      "Easy-to-digest lactose-free milk for lactose-intolerant individuals. 1L tetra pack.",
      85, 90, 1, 3, "tetra-pack", "3.5%", "milk_tetrapack",
      60, 4.2, 310, false, true);

    addProd("Goat Milk", "बकरी का दूध",
      "Nutritious and easily digestible goat milk. Rich in calcium and vitamins. 500ml bottle.",
      95, 100, 1, 3, "bottle", "4%", "milk_bottle",
      40, 4.1, 190, false, false);

    addProd("Skim Milk", "स्किम दूध",
      "Zero-fat skim milk for weight watchers and fitness enthusiasts. 1L tetra pack.",
      48, 52, 1, 1, "tetra-pack", "0.5%", "milk_tetrapack",
      120, 4.0, 445, true, false);

    addProd("Organic Cow Milk", "जैविक गाय का दूध",
      "Certified organic cow milk, free from hormones and antibiotics. 1L.",
      110, 125, 1, 1, "bottle", "4%", "milk_bottle",
      70, 4.6, 320, true, true);

    // -- CAT 2: Plant-Based Milk (7 products) --
    addProd("Almond Milk", "बादाम दूध",
      "Creamy unsweetened almond milk, great for smoothies and cereals. 1L tetra pack.",
      180, 199, 2, 4, "tetra-pack", "0%", "plant_milk_carton",
      90, 4.3, 620, true, true);

    addProd("Oat Milk", "ओट दूध",
      "Barista-style oat milk that froths perfectly for coffee. 1L.",
      175, 195, 2, 5, "tetra-pack", "0%", "plant_milk_carton",
      85, 4.4, 530, false, true);

    addProd("Soy Milk", "सोया दूध",
      "High-protein soy milk enriched with calcium and vitamin D. 1L tetra pack.",
      120, 135, 2, 5, "tetra-pack", "0%", "plant_milk_carton",
      100, 4.1, 480, false, false);

    addProd("Coconut Milk", "नारियल दूध",
      "Rich and creamy coconut milk, perfect for curries and desserts. 400ml can.",
      95, 110, 2, 4, "can", "0%", "plant_milk_carton",
      110, 4.2, 390, false, false);

    addProd("Cashew Milk", "काजू दूध",
      "Velvety smooth cashew milk with a naturally sweet taste. 1L.",
      210, 230, 2, 4, "tetra-pack", "0%", "plant_milk_carton",
      50, 4.3, 210, true, false);

    addProd("Pea Protein Milk", "मटर प्रोटीन दूध",
      "High-protein plant-based milk made from yellow peas. 946ml.",
      220, 245, 2, 5, "bottle", "0%", "plant_milk_carton",
      40, 4.0, 155, false, true);

    addProd("Rice Milk", "चावल का दूध",
      "Light and mildly sweet rice milk, allergen-friendly alternative. 1L.",
      140, 155, 2, 5, "tetra-pack", "0%", "plant_milk_carton",
      60, 3.9, 180, false, false);

    // -- CAT 3: Core Dairy (8 products) --
    addProd("Salted Butter", "नमकीन मक्खन",
      "Rich creamy butter with a perfect hint of salt. 500g pack.",
      265, 280, 3, 7, "tub", "80%", "butter_box",
      200, 4.8, 2100, true, true);

    addProd("Pure Cow Ghee", "शुद्ध गाय का घी",
      "Pure cow ghee with the traditional bilona method. Rich aroma and golden colour. 1L jar.",
      599, 650, 3, 7, "jar", "99%", "ghee_jar",
      120, 4.6, 1560, true, true);

    addProd("Fresh Paneer", "ताज़ा पनीर",
      "Soft and fresh paneer made from pure cow milk. 200g block.",
      89, 95, 3, 6, "tub", "20%", "paneer_block",
      180, 4.5, 980, true, false);

    addProd("Set Curd", "ताज़ा दही",
      "Thick and creamy set curd with a perfect tangy taste. 400g tub.",
      42, 45, 3, 8, "tub", "4%", "curd_cup",
      250, 4.4, 1340, false, true);

    addProd("Greek Yogurt", "ग्रीक दही",
      "Thick, protein-rich Greek yogurt with no added sugar. 400g tub.",
      130, 145, 3, 8, "tub", "5%", "yogurt_cup",
      100, 4.5, 780, true, true);

    addProd("Buttermilk", "ताज़ी छाछ",
      "Refreshing spiced buttermilk made from fresh curd. 200ml bottle.",
      20, 22, 3, 8, "bottle", "1%", "buttermilk_pouch",
      300, 4.2, 560, false, true);

    addProd("Fresh Cream", "ताज़ी क्रीम",
      "Smooth fresh cream for cooking, baking, and desserts. 200ml tetra pack.",
      65, 70, 3, 7, "tetra-pack", "25%", "cream_box",
      150, 4.3, 420, false, false);

    addProd("Mishti Dahi", "मिष्टी दही",
      "Bengali-style sweet curd set in an earthen pot. Authentic creamy taste. 200g.",
      65, 70, 3, 8, "jar", "5%", "curd_cup",
      120, 4.7, 680, true, true);

    // -- CAT 4: Cheese (7 products) --
    addProd("Mozzarella Cheese", "मोज़रेला चीज़",
      "Stretchy mozzarella perfect for pizzas and salads. 200g block.",
      199, 220, 4, 9, "tub", "22%", "cheese_block",
      90, 4.5, 730, true, true);

    addProd("Cheddar Cheese Slices", "चेडर चीज़ स्लाइस",
      "Individually wrapped cheddar cheese slices for sandwiches and burgers. 200g pack.",
      175, 195, 4, 10, "tub", "25%", "cheese_slices",
      100, 4.3, 610, false, true);

    addProd("Cream Cheese", "क्रीम चीज़",
      "Smooth and spreadable cream cheese for bagels and cheesecakes. 180g tub.",
      220, 240, 4, 9, "tub", "33%", "cream_cheese_tub",
      70, 4.4, 480, true, false);

    addProd("Parmesan Cheese", "परमेज़ान चीज़",
      "Aged Parmesan with sharp, nutty flavour. Perfect grated over pasta. 100g.",
      380, 420, 4, 10, "jar", "28%", "cheese_block",
      45, 4.6, 290, false, false);

    addProd("Feta Cheese", "फेटा चीज़",
      "Crumbly and tangy feta cheese, great in salads and wraps. 200g block.",
      299, 330, 4, 9, "tub", "20%", "cheese_block",
      55, 4.3, 340, false, false);

    addProd("Processed Cheese Block", "प्रोसेस्ड चीज़ ब्लॉक",
      "Versatile processed cheese block for cooking and snacking. 400g.",
      185, 200, 4, 10, "tub", "22%", "cheese_block",
      110, 4.1, 820, true, false);

    addProd("Ricotta Cheese", "रिकोटा चीज़",
      "Light and creamy ricotta, ideal for lasagnas and desserts. 250g tub.",
      260, 285, 4, 9, "tub", "13%", "cream_cheese_tub",
      40, 4.2, 210, false, true);

    // -- CAT 5: Desserts & Sweets (8 products) --
    addProd("Vanilla Ice Cream", "वनीला आइसक्रीम",
      "Classic creamy vanilla ice cream made with real dairy. 1L tub.",
      190, 210, 5, 11, "tub", "10%", "ice_cream_tub",
      80, 4.6, 1450, true, true);

    addProd("Chocolate Ice Cream", "चॉकलेट आइसक्रीम",
      "Rich and creamy chocolate ice cream made with cocoa and fresh dairy. 1L tub.",
      200, 220, 5, 11, "tub", "10%", "ice_cream_tub",
      75, 4.5, 1100, true, true);

    addProd("Kulfi", "मलाई कुल्फी",
      "Traditional Indian frozen dessert with a rich malai flavour. Pack of 4 sticks.",
      120, 130, 5, 11, "tub", "15%", "kulfi_stick",
      100, 4.7, 890, true, true);

    addProd("Rabri", "रबड़ी",
      "Slow-cooked thickened milk with sugar and cardamom. 250g tub.",
      95, 105, 5, 12, "tub", "12%", "dessert_cup",
      60, 4.5, 470, false, true);

    addProd("Rasgulla", "रसगुल्ला",
      "Soft and spongy Bengali rasgulla in sugar syrup. Pack of 10.",
      85, 95, 5, 12, "can", "8%", "dessert_cup",
      150, 4.4, 1120, true, false);

    addProd("Milk Peda", "दूध पेड़ा",
      "Classic milk peda made from khoya with cardamom. 250g box.",
      180, 200, 5, 12, "jar", "15%", "dessert_cup",
      70, 4.6, 560, true, false);

    addProd("Gulab Jamun Rabri", "गुलाब जामुन रबड़ी",
      "Soft gulab jamun served with rich rabri topping. 200g tub.",
      110, 125, 5, 12, "tub", "12%", "dessert_cup",
      80, 4.4, 640, false, true);

    addProd("Milk Cake", "दूध की बर्फी",
      "Classic milk barfi with a fudge-like texture, made from khoya. 250g box.",
      175, 195, 5, 12, "jar", "15%", "dessert_cup",
      65, 4.5, 480, false, false);

    // -- CAT 6: Milk-Based Products (7 products) --
    addProd("Condensed Milk", "कंडेंस्ड दूध",
      "Sweetened condensed milk for desserts, cakes and beverages. 400g tin.",
      95, 105, 6, 13, "can", "8%", "condensed_milk_can",
      200, 4.6, 1200, true, true);

    addProd("Whole Milk Powder", "सम्पूर्ण दूध पाउडर",
      "Full-cream milk powder, rich in protein and calcium. 500g pouch.",
      270, 300, 6, 13, "pouch", "26%", "milk_powder_box",
      130, 4.4, 670, false, false);

    addProd("Khoya / Mawa", "खोया / मावा",
      "Authentic khoa (mawa) made by slow-cooking buffalo milk. 500g. Perfect for sweets.",
      220, 240, 6, 13, "tub", "30%", "dessert_cup",
      80, 4.5, 520, true, false);

    addProd("Chocolate Flavoured Milk", "चॉकलेट फ्लेवर्ड दूध",
      "Delicious chocolate-flavoured milk for kids and adults. 200ml tetra pack.",
      30, 35, 6, 14, "tetra-pack", "3%", "flavored_milk_bottle",
      300, 4.3, 1680, false, true);

    addProd("Strawberry Flavoured Milk", "स्ट्राबेरी फ्लेवर्ड दूध",
      "Sweet strawberry-flavoured chilled milk. 200ml bottle.",
      30, 35, 6, 14, "bottle", "3%", "flavored_milk_bottle",
      250, 4.1, 890, false, false);

    addProd("Custard Powder", "कस्टर्ड पाउडर",
      "Vanilla custard powder for easy dessert preparation. 100g jar.",
      75, 85, 6, 13, "jar", "0%", "milk_powder_box",
      150, 4.2, 430, false, false);

    addProd("Vanilla Milkshake", "वनीला मिल्कशेक",
      "Thick and creamy vanilla milkshake ready to drink. 300ml bottle.",
      65, 70, 6, 14, "bottle", "5%", "flavored_milk_bottle",
      180, 4.4, 620, true, true);

    // -- CAT 7: Beverages (6 products) --
    addProd("Mango Lassi", "आम की लस्सी",
      "Chilled sweet mango lassi made from fresh dahi and alphonso mango pulp. 300ml.",
      60, 65, 7, 15, "bottle", "3%", "lassi_bottle",
      200, 4.5, 980, true, true);

    addProd("Plain Lassi", "सादी लस्सी",
      "Refreshing plain lassi with a perfect creamy texture. 300ml bottle.",
      50, 55, 7, 15, "bottle", "3%", "lassi_bottle",
      180, 4.3, 670, false, false);

    addProd("Masala Chaas", "मसाला छाछ",
      "Spiced buttermilk with ginger, coriander, and green chilli. 200ml bottle.",
      25, 28, 7, 15, "bottle", "1%", "buttermilk_pouch",
      300, 4.4, 1100, false, true);

    addProd("Rose Milk", "गुलाब दूध",
      "Chilled rose-flavoured milk with a delicate floral sweetness. 200ml bottle.",
      35, 40, 7, 15, "bottle", "3%", "flavored_milk_bottle",
      160, 4.2, 430, false, false);

    addProd("Protein Milkshake", "प्रोटीन मिल्कशेक",
      "Ready-to-drink whey protein shake. 25g protein per bottle. 300ml.",
      120, 135, 7, 16, "bottle", "2%", "protein_powder_jar",
      90, 4.2, 450, false, true);

    addProd("Masala Tea Premix", "मसाला चाय प्रीमिक्स",
      "Instant masala chai premix with milk powder and spices. 10 sachets.",
      99, 110, 7, 16, "pouch", "0%", "milk_powder_box",
      150, 4.1, 560, true, false);

    // -- CAT 8: International Dairy (6 products) --
    addProd("Plain Kefir", "प्लेन केफिर",
      "Probiotic-rich fermented kefir milk with billions of live cultures. 500ml bottle.",
      280, 310, 8, 17, "bottle", "3.5%", "kefir_bottle",
      45, 4.4, 280, true, false);

    addProd("Sour Cream", "सॉर क्रीम",
      "Thick and tangy sour cream for dips, dressings, and baked potatoes. 200g tub.",
      195, 215, 8, 17, "tub", "20%", "kefir_bottle",
      50, 4.2, 230, false, false);

    addProd("Crème Fraîche", "क्रेम फ्रेश",
      "French-style thick cultured cream with a slightly tangy flavour. 200ml tub.",
      250, 275, 8, 17, "tub", "28%", "cream_box",
      35, 4.3, 170, false, false);

    addProd("Mascarpone Cheese", "मास्कारपोन चीज़",
      "Italian cream cheese for tiramisu and rich desserts. 250g tub.",
      320, 350, 8, 17, "tub", "41%", "cream_cheese_tub",
      40, 4.5, 250, true, true);

    addProd("Labneh Cheese", "लबनेह",
      "Strained Lebanese yogurt cheese, creamy with a tangy punch. 250g jar.",
      275, 300, 8, 17, "jar", "10%", "yogurt_cup",
      30, 4.3, 140, false, false);

    addProd("Quark", "क्वार्क",
      "German fresh cheese with a creamy, mild flavour. High in protein. 250g tub.",
      240, 260, 8, 17, "tub", "5%", "cream_cheese_tub",
      30, 4.1, 120, false, true);

    // -- CAT 9: Industrial Dairy (6 products) --
    addProd("Whey Protein Isolate", "व्हे प्रोटीन आइसोलेट",
      "Unflavoured whey protein isolate with 90% protein content. 1kg pouch.",
      1499, 1699, 9, 18, "pouch", "2%", "protein_powder_jar",
      60, 4.4, 320, true, true);

    addProd("Casein Protein", "कैसीन प्रोटीन",
      "Slow-release micellar casein protein powder. Vanilla flavour. 1kg.",
      1699, 1900, 9, 18, "pouch", "2%", "protein_powder_jar",
      45, 4.3, 210, false, false);

    addProd("Lactose Powder", "लैक्टोज पाउडर",
      "Pharmaceutical-grade lactose powder for food and supplement manufacturing. 500g.",
      450, 499, 9, 18, "pouch", "0%", "milk_powder_box",
      30, 4.0, 85, false, false);

    addProd("Dairy Enzymes Mix", "डेयरी एंजाइम मिश्रण",
      "Rennet and lipase enzyme blend for artisan cheese making. 50g jar.",
      380, 420, 9, 18, "jar", "0%", "protein_powder_jar",
      25, 4.2, 60, false, false);

    addProd("Skim Milk Powder", "स्किम दूध पाउडर",
      "Low-fat skim milk powder for bakeries and food processing. 1kg pouch.",
      320, 350, 9, 18, "pouch", "1%", "milk_powder_box",
      50, 4.1, 130, false, true);

    addProd("Whey Protein Concentrate", "व्हे प्रोटीन कॉन्सन्ट्रेट",
      "80% whey protein concentrate for food fortification. 1kg.",
      1099, 1249, 9, 18, "pouch", "5%", "protein_powder_jar",
      40, 4.3, 175, true, false);

    // -- CAT 10: Packaging (6 products) --
    addProd("Glass Bottle Full Cream Milk", "कांच की बोतल दूध",
      "Premium farm-fresh full cream milk delivered in returnable glass bottles. 500ml.",
      55, 60, 10, 19, "bottle", "6%", "milk_bottle",
      100, 4.6, 380, true, false);

    addProd("Tetra Pack Toned Milk", "टेट्रा पैक दूध",
      "Long-life UHT toned milk in eco-friendly tetra pack. No refrigeration needed. 1L.",
      58, 62, 10, 19, "tetra-pack", "3%", "milk_tetrapack",
      200, 4.2, 560, false, false);

    addProd("Bulk Milk Can 5L", "5 लीटर दूध कैन",
      "Value pack bulk fresh milk in food-grade stainless steel can. 5L.",
      260, 290, 10, 19, "can", "4%", "milk_bottle",
      40, 4.3, 210, false, true);

    addProd("Pouch Milk Pack", "पाउच दूध",
      "Affordable daily-use toned milk in convenient 500ml pouch.",
      26, 28, 10, 19, "pouch", "3%", "milk_pouch",
      400, 4.0, 1800, false, true);

    addProd("Insulated Milk Jug 2L", "इन्सुलेटेड दूध जग",
      "2L insulated milk jug that keeps milk fresh for 6 hours. Reusable.",
      85, 95, 10, 19, "jar", "4%", "milk_bottle",
      60, 4.4, 190, false, false);

    addProd("Premium Gold Milk Bottle", "प्रीमियम गोल्ड दूध",
      "Premium A2 grass-fed cow milk in a beautiful 1L amber glass bottle.",
      140, 160, 10, 19, "bottle", "5%", "milk_bottle",
      50, 4.7, 280, true, false);
  };

  // Trigger sample data load on first call
  loadSampleData();

  // Mixin composition
  include AdminApi(state);
  include CatalogApi(products, categories, subcategories, state);
  include OrdersApi(orders, state);
};
