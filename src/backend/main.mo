import List "mo:core/List";
import Map "mo:core/Map";
import Time "mo:core/Time";
import CatalogLib "lib/catalog";
import OrdersLib "lib/orders";
import UsersLib "lib/users";
import ReviewsLib "lib/reviews";
import CatalogApi "mixins/catalog-api";
import OrdersApi "mixins/orders-api";
import AdminApi "mixins/admin-api";
import UsersApi "mixins/users-api";
import ReviewsApi "mixins/reviews-api";
import ContactsApi "mixins/contacts-api";
import WishlistApi "mixins/wishlist-api";
import UsersReviewsTypes "types/users-reviews";





actor {
  // Shared mutable state (passed by reference to mixins)
  let state = {
    var adminPrincipal : ?Principal = null;
    var nextProductId : Nat = 1;
    var nextCategoryId : Nat = 1;
    var nextSubcategoryId : Nat = 1;
    var nextOrderId : Nat = 1;
    var nextReviewId : Nat = 1;
    var nextContactMessageId : Nat = 1;
  };
  // Migration: keep old sampleDataLoaded for stable var compatibility, use version for reseed logic
  var sampleDataLoaded : Bool = false;
  // Version 2 = full Yadav Dairy rebrand (forces reseed if canister has old data)
  var sampleDataVersion : Nat = 0;

  // Domain state
  let products = List.empty<CatalogLib.Product>();
  let categories = List.empty<CatalogLib.Category>();
  let subcategories = List.empty<CatalogLib.Subcategory>();
  let orders = List.empty<OrdersLib.Order>();

  // Users, reviews, contacts, wishlist state
  let profiles = Map.empty<Principal, UsersLib.UserProfile>();
  let reviewsMap = Map.empty<UsersReviewsTypes.ProductId, List.List<ReviewsLib.Review>>();
  let contactMessages = List.empty<UsersReviewsTypes.ContactMessage>();
  let wishlistMap = Map.empty<Principal, List.List<UsersReviewsTypes.WishlistItem>>();

  // ── Sample data helpers ────────────────────────────────────────────

  func addCat(name : Text, nameHindi : Text, icon : Text, colorClass : Text, sort : Nat) {
    let c : CatalogLib.Category = {
      id = state.nextCategoryId;
      name;
      nameHindi;
      icon;
      colorClass;
      sortOrder = sort;
    };
    categories.add(c);
    state.nextCategoryId += 1;
  };

  func addSub(catId : Nat, name : Text, nameHindi : Text) {
    let s : CatalogLib.Subcategory = {
      id = state.nextSubcategoryId;
      categoryId = catId;
      name;
      nameHindi;
    };
    subcategories.add(s);
    state.nextSubcategoryId += 1;
  };

  func addProd(
    name : Text, nameHindi : Text, desc : Text,
    price : Nat, orig : Nat, category : Text, subcategory : Text,
    pkg : Text, img : Text, qty : Text,
    stock : Nat, rating : Float, reviews : Nat,
    featured : Bool, trending : Bool, bestSeller : Bool, freshArrival : Bool,
  ) {
    let p : CatalogLib.Product = {
      id = state.nextProductId;
      name; nameHindi; description = desc;
      brand = "Yadav Dairy";
      price; originalPrice = orig;
      category; subcategory;
      packagingType = pkg;
      imageUrl = img;
      quantity = qty;
      inStock = stock > 0;
      stock;
      rating; reviewCount = reviews;
      isFeatured = featured; isTrending = trending;
      isBestSeller = bestSeller; isFreshArrival = freshArrival;
      createdAt = Time.now();
    };
    products.add(p);
    state.nextProductId += 1;
  };

  // ── Pre-populate sample data ───────────────────────────────────────

  func loadSampleData() {
    // Version 4 = force full reseed with all 69 products. Re-seed if version is older.
    if (sampleDataVersion >= 4) return;
    sampleDataVersion := 4;
    // Clear any stale data from previous seeding
    products.clear();
    categories.clear();
    subcategories.clear();
    state.nextProductId := 1;
    state.nextCategoryId := 1;
    state.nextSubcategoryId := 1;

    // === CATEGORIES (10) ===
    addCat("Milk", "दूध", "🥛", "bg-blue-100", 1);
    addCat("Paneer", "पनीर", "🧀", "bg-yellow-100", 2);
    addCat("Butter & Ghee", "मक्खन और घी", "🧈", "bg-amber-100", 3);
    addCat("Curd & Yogurt", "दही", "🥣", "bg-orange-100", 4);
    addCat("Cheese", "चीज़", "🧀", "bg-red-100", 5);
    addCat("Ice Cream", "आइसक्रीम", "🍦", "bg-pink-100", 6);
    addCat("Beverages", "पेय", "🥤", "bg-cyan-100", 7);
    addCat("Desserts", "मिठाई", "🍮", "bg-purple-100", 8);
    addCat("Plant-based", "पौधे-आधारित", "🌱", "bg-green-100", 9);
    addCat("Cream & Khoa", "क्रीम और खोया", "🍶", "bg-indigo-100", 10);

    // === SUBCATEGORIES ===
    addSub(1, "Cow Milk", "गाय का दूध");
    addSub(1, "Buffalo Milk", "भैंस का दूध");
    addSub(1, "Specialty Milk", "विशेष दूध");
    addSub(2, "Fresh Paneer", "ताज़ा पनीर");
    addSub(2, "Smoked Paneer", "स्मोक्ड पनीर");
    addSub(3, "Butter", "मक्खन");
    addSub(3, "Ghee", "घी");
    addSub(4, "Set Curd", "जमा दही");
    addSub(4, "Greek Yogurt", "ग्रीक योगर्ट");
    addSub(5, "Soft Cheese", "मुलायम चीज़");
    addSub(5, "Hard Cheese", "कठोर चीज़");
    addSub(6, "Ice Cream Tubs", "आइसक्रीम टब");
    addSub(6, "Kulfi & Sticks", "कुल्फी और स्टिक");
    addSub(7, "Lassi & Chaas", "लस्सी और छाछ");
    addSub(7, "Protein Drinks", "प्रोटीन ड्रिंक");
    addSub(8, "Indian Sweets", "भारतीय मिठाई");
    addSub(8, "Frozen Desserts", "फ्रोज़न डेसर्ट");
    addSub(9, "Nut Milk", "नट दूध");
    addSub(9, "Grain Milk", "अनाज दूध");
    addSub(10, "Fresh Cream", "ताज़ी क्रीम");
    addSub(10, "Khoa & Mawa", "खोया और मावा");

    // ================================================================
    // === PRODUCTS (55) — brand = "Yadav Dairy" ===
    // ================================================================

    // -- CAT 1: Milk (8 products) --
    addProd("Full Cream Milk", "सम्पूर्ण क्रीम दूध",
      "Rich, creamy full-fat cow milk perfect for chai and cooking.",
      28, 30, "Milk", "Cow Milk", "milk_pouch", "milk_pouch", "500ml",
      200, 4.5, 1280, true, false, true, false);

    addProd("Toned Milk Tetra Pack", "टोन्ड दूध टेट्रा पैक",
      "Low-fat UHT toned milk in a convenient long-life tetra pack carton.",
      52, 55, "Milk", "Cow Milk", "milk_tetrapack", "milk_tetrapack", "1L",
      150, 4.3, 890, false, true, false, false);

    addProd("A2 Cow Milk", "A2 गाय का दूध",
      "Premium A2 protein milk from desi Gir cow — nutritious and delicious.",
      120, 140, "Milk", "Specialty Milk", "milk_tetrapack", "milk_tetrapack", "1L",
      80, 4.7, 420, true, true, false, true);

    addProd("Buffalo Milk Pouch", "भैंस का दूध पाउच",
      "Fresh buffalo milk with high fat content, great for making paneer and khoya.",
      32, 35, "Milk", "Buffalo Milk", "milk_pouch", "milk_pouch", "500ml",
      180, 4.4, 560, false, false, true, false);

    addProd("Lactose-Free Milk", "लैक्टोज-फ्री दूध",
      "Easy-to-digest lactose-free milk in a tetra pack carton.",
      85, 90, "Milk", "Specialty Milk", "milk_tetrapack", "milk_tetrapack", "1L",
      60, 4.2, 310, false, true, false, false);

    addProd("Double Toned Milk Pouch", "डबल टोन्ड दूध पाउच",
      "Extra low-fat double toned milk for calorie-conscious households.",
      25, 28, "Milk", "Cow Milk", "milk_pouch", "milk_pouch", "500ml",
      220, 4.1, 680, false, false, false, true);

    addProd("Skim Milk Tetra Pack", "स्किम दूध टेट्रा पैक",
      "Zero-fat skim milk in a tetra pack carton for weight watchers.",
      48, 52, "Milk", "Cow Milk", "milk_tetrapack", "milk_tetrapack", "1L",
      120, 4.0, 445, true, false, false, false);

    addProd("Organic Cow Milk Tetra Pack", "जैविक गाय का दूध",
      "Certified organic cow milk in tetra pack, free from hormones and antibiotics.",
      110, 125, "Milk", "Specialty Milk", "milk_tetrapack", "milk_tetrapack", "1L",
      70, 4.6, 320, true, true, true, false);

    // -- CAT 2: Paneer (5 products) --
    addProd("Fresh Paneer Block", "ताज़ा पनीर ब्लॉक",
      "Soft and fresh paneer block made from pure cow milk.",
      89, 95, "Paneer", "Fresh Paneer", "paneer_block", "paneer_block", "200g",
      180, 4.5, 980, true, false, false, true);

    addProd("Malai Paneer Block", "मलाई पनीर ब्लॉक",
      "Creamy malai paneer with higher fat content for rich gravies.",
      110, 120, "Paneer", "Fresh Paneer", "paneer_block", "paneer_block", "200g",
      150, 4.6, 760, true, true, true, false);

    addProd("Smoked Paneer Block", "स्मोक्ड पनीर ब्लॉक",
      "Lightly smoked paneer block with a distinctive smoky aroma.",
      130, 145, "Paneer", "Smoked Paneer", "paneer_block", "paneer_block", "200g",
      80, 4.4, 380, false, true, false, false);

    addProd("Low-Fat Paneer Block", "लो-फैट पनीर ब्लॉक",
      "Low-fat paneer made from toned milk, ideal for health-conscious cooking.",
      95, 105, "Paneer", "Fresh Paneer", "paneer_block", "paneer_block", "200g",
      100, 4.2, 420, false, false, false, true);

    addProd("Buffalo Milk Paneer Block", "भैंस दूध पनीर ब्लॉक",
      "Rich and dense paneer made from pure buffalo milk.",
      105, 115, "Paneer", "Fresh Paneer", "paneer_block", "paneer_block", "250g",
      120, 4.5, 540, true, false, true, false);

    // -- CAT 3: Butter & Ghee (6 products) --
    addProd("Salted Butter Box", "नमकीन मक्खन बॉक्स",
      "Rich creamy salted butter in a flat rectangular box.",
      265, 280, "Butter & Ghee", "Butter", "butter_box", "butter_box", "500g",
      200, 4.8, 2100, true, true, true, false);

    addProd("Unsalted White Butter Box", "सफेद मक्खन बॉक्स",
      "Pure unsalted white butter in a box, perfect for cooking and baking.",
      245, 265, "Butter & Ghee", "Butter", "butter_box", "butter_box", "500g",
      180, 4.6, 1400, false, true, false, false);

    addProd("Pure Cow Ghee Jar", "शुद्ध गाय का घी जार",
      "Pure cow ghee with the traditional bilona method in a wide-mouth glass jar.",
      599, 650, "Butter & Ghee", "Ghee", "ghee_jar", "ghee_jar", "1L",
      120, 4.6, 1560, true, true, true, false);

    addProd("Buffalo Ghee Jar", "भैंस का घी जार",
      "Pure clarified buffalo ghee in a glass jar with a rich golden colour.",
      499, 550, "Butter & Ghee", "Ghee", "ghee_jar", "ghee_jar", "1L",
      100, 4.4, 780, false, false, true, false);

    addProd("Desi Ghee Tin", "देसी घी टिन",
      "Traditional desi ghee in a cylindrical tin, bulk value pack.",
      1150, 1299, "Butter & Ghee", "Ghee", "ghee_tin", "ghee_tin", "2L",
      60, 4.7, 920, true, true, false, false);

    addProd("Cooking Butter Pouch", "कुकिंग मक्खन बॉक्स",
      "Affordable cooking butter in a convenient flat box for everyday use.",
      185, 200, "Butter & Ghee", "Butter", "butter_box", "butter_box", "200g",
      300, 4.3, 1100, false, false, false, true);

    // -- CAT 4: Curd & Yogurt (6 products) --
    addProd("Set Curd Cup", "ताज़ा दही कप",
      "Thick and creamy set curd with a perfect tangy taste in a plastic cup.",
      42, 45, "Curd & Yogurt", "Set Curd", "curd_cup", "curd_cup", "400g",
      250, 4.4, 1340, false, true, true, false);

    addProd("Greek Yogurt Cup", "ग्रीक दही कप",
      "Thick, protein-rich Greek yogurt with no added sugar in a cup.",
      130, 145, "Curd & Yogurt", "Greek Yogurt", "yogurt_cup", "yogurt_cup", "400g",
      100, 4.5, 780, true, true, false, false);

    addProd("Mishti Dahi Cup", "मिष्टी दही कप",
      "Bengali-style sweet curd set in a cup. Authentic creamy taste.",
      65, 70, "Curd & Yogurt", "Set Curd", "curd_cup", "curd_cup", "200g",
      120, 4.7, 680, true, true, true, false);

    addProd("Mango Yogurt Cup", "आम दही कप",
      "Creamy yogurt blended with real alphonso mango pulp.",
      75, 85, "Curd & Yogurt", "Greek Yogurt", "yogurt_cup", "yogurt_cup", "200g",
      160, 4.3, 560, false, true, false, true);

    addProd("Strawberry Yogurt Cup", "स्ट्रॉबेरी दही कप",
      "Smooth yogurt with real strawberry pieces and a sweet fruity taste.",
      75, 85, "Curd & Yogurt", "Greek Yogurt", "yogurt_cup", "yogurt_cup", "200g",
      140, 4.2, 480, false, false, false, false);

    addProd("Buttermilk Pouch", "छाछ पाउच",
      "Refreshing spiced buttermilk in a convenient pouch, made from fresh curd.",
      20, 22, "Curd & Yogurt", "Set Curd", "butter_milk_pouch", "butter_milk_pouch", "200ml",
      300, 4.2, 560, false, false, false, true);

    // -- CAT 5: Cheese (5 products) --
    addProd("Mozzarella Block", "मोज़रेला चीज़ ब्लॉक",
      "Stretchy mozzarella cheese block, perfect for pizzas and salads.",
      199, 220, "Cheese", "Soft Cheese", "mozzarella_block", "mozzarella_block", "200g",
      90, 4.5, 730, true, true, false, false);

    addProd("Cheddar Cheese Block", "चेडर चीज़ ब्लॉक",
      "Aged cheddar cheese block with a sharp, rich flavour.",
      220, 245, "Cheese", "Hard Cheese", "cheddar_block", "cheddar_block", "200g",
      80, 4.4, 580, false, true, false, true);

    addProd("Cheddar Cheese Slices Box", "चेडर चीज़ स्लाइस बॉक्स",
      "Individually wrapped cheddar cheese slices in a handy box.",
      175, 195, "Cheese", "Hard Cheese", "cheese_slices_box", "cheese_slices_box", "200g",
      100, 4.3, 610, false, false, true, false);

    addProd("Processed Cheese Block", "प्रोसेस्ड चीज़ ब्लॉक",
      "Versatile processed cheese block for cooking, sandwiches, and snacking.",
      185, 200, "Cheese", "Hard Cheese", "cheese_slices_box", "cheese_slices_box", "400g",
      110, 4.1, 820, true, false, true, false);

    addProd("Cream Cheese Tub", "क्रीम चीज़ टब",
      "Smooth and spreadable cream cheese for bagels and cheesecakes.",
      220, 240, "Cheese", "Soft Cheese", "mozzarella_block", "mozzarella_block", "180g",
      70, 4.4, 480, true, true, false, false);

    // -- CAT 6: Ice Cream (6 products) --
    addProd("Vanilla Ice Cream Tub", "वनीला आइसक्रीम टब",
      "Classic creamy vanilla ice cream made with real dairy in a large tub.",
      190, 210, "Ice Cream", "Ice Cream Tubs", "ice_cream_tub", "ice_cream_tub", "1L",
      80, 4.6, 1450, true, true, true, false);

    addProd("Chocolate Ice Cream Tub", "चॉकलेट आइसक्रीम टब",
      "Rich and creamy chocolate ice cream with cocoa and fresh dairy in a tub.",
      200, 220, "Ice Cream", "Ice Cream Tubs", "ice_cream_tub", "ice_cream_tub", "1L",
      75, 4.5, 1100, true, true, false, false);

    addProd("Strawberry Ice Cream Tub", "स्ट्रॉबेरी आइसक्रीम टब",
      "Fruity strawberry ice cream with real berry pieces in a tub.",
      190, 210, "Ice Cream", "Ice Cream Tubs", "ice_cream_tub", "ice_cream_tub", "1L",
      70, 4.4, 860, false, false, true, true);

    addProd("Malai Kulfi Stick", "मलाई कुल्फी स्टिक",
      "Traditional Indian malai kulfi on a stick with rich creamy texture.",
      35, 40, "Ice Cream", "Kulfi & Sticks", "kulfi_stick", "kulfi_stick", "1 pc",
      200, 4.7, 1280, true, true, true, false);

    addProd("Mango Kulfi Stick", "आम कुल्फी स्टिक",
      "Summer special mango kulfi stick bursting with real mango flavour.",
      40, 45, "Ice Cream", "Kulfi & Sticks", "kulfi_stick", "kulfi_stick", "1 pc",
      180, 4.6, 950, true, false, false, true);

    addProd("Butter Pecan Ice Cream Tub", "बटर पेकान आइसक्रीम टब",
      "Premium butter pecan ice cream with crunchy pecan nuts in a tub.",
      220, 245, "Ice Cream", "Ice Cream Tubs", "ice_cream_tub", "ice_cream_tub", "1L",
      55, 4.3, 480, false, true, false, false);

    // -- CAT 7: Beverages (5 products) --
    addProd("Mango Lassi Bottle", "आम लस्सी बोतल",
      "Chilled sweet mango lassi in a bottle, made from fresh dahi and alphonso mango.",
      60, 65, "Beverages", "Lassi & Chaas", "lassi_bottle", "lassi_bottle", "300ml",
      200, 4.5, 980, true, true, true, false);

    addProd("Masala Chaas Bottle", "मसाला छाछ बोतल",
      "Spiced buttermilk in a bottle with ginger, coriander, and green chilli.",
      25, 28, "Beverages", "Lassi & Chaas", "chaas_bottle", "chaas_bottle", "200ml",
      300, 4.4, 1100, false, true, false, true);

    addProd("Flavoured Milk Tetra Pack", "फ्लेवर्ड दूध टेट्रा पैक",
      "Chocolate-flavoured milk in a tetra pack — a delicious treat for kids.",
      30, 35, "Beverages", "Protein Drinks", "flavored_milk_tetrapack", "flavored_milk_tetrapack", "200ml",
      300, 4.3, 1680, false, true, true, false);

    addProd("Protein Drink Bottle", "प्रोटीन ड्रिंक बोतल",
      "Ready-to-drink whey protein shake. 25g protein per bottle.",
      120, 135, "Beverages", "Protein Drinks", "protein_drink_bottle", "protein_drink_bottle", "300ml",
      90, 4.2, 450, false, false, false, false);

    addProd("Rose Lassi Bottle", "गुलाब लस्सी बोतल",
      "Chilled sweet rose lassi with a delicate floral sweetness.",
      55, 60, "Beverages", "Lassi & Chaas", "lassi_bottle", "lassi_bottle", "300ml",
      160, 4.3, 520, true, false, false, true);

    // -- CAT 8: Desserts (5 products) --
    addProd("Condensed Milk Can", "कंडेंस्ड दूध कैन",
      "Sweetened condensed milk in a can for desserts, cakes, and beverages.",
      95, 105, "Desserts", "Indian Sweets", "condensed_milk_can", "condensed_milk_can", "400g",
      200, 4.6, 1200, true, true, true, false);

    addProd("Rasgulla Can", "रसगुल्ला कैन",
      "Soft and spongy Bengali rasgulla in sugar syrup in a can. Pack of 10.",
      85, 95, "Desserts", "Indian Sweets", "condensed_milk_can", "condensed_milk_can", "500g",
      150, 4.4, 1120, true, false, true, false);

    addProd("Milk Peda Box", "दूध पेड़ा बॉक्स",
      "Classic milk peda made from khoya with cardamom in a gift box.",
      180, 200, "Desserts", "Indian Sweets", "khoa_box", "khoa_box", "250g",
      70, 4.6, 560, true, false, false, false);

    addProd("Rabri Cup", "रबड़ी कप",
      "Slow-cooked thickened milk with sugar and cardamom in a serving cup.",
      95, 105, "Desserts", "Indian Sweets", "condensed_milk_can", "condensed_milk_can", "250g",
      60, 4.5, 470, false, true, false, true);

    addProd("Milk Barfi Box", "दूध बर्फी बॉक्स",
      "Classic milk barfi with a fudge-like texture, made from khoya in a box.",
      175, 195, "Desserts", "Indian Sweets", "khoa_box", "khoa_box", "250g",
      65, 4.5, 480, false, false, false, false);

    // -- CAT 9: Plant-based (4 products) --
    addProd("Almond Milk Tetra Pack", "बादाम दूध टेट्रा पैक",
      "Creamy unsweetened almond milk in a tall tetra pack carton.",
      180, 199, "Plant-based", "Nut Milk", "almond_milk_tetrapack", "almond_milk_tetrapack", "1L",
      90, 4.3, 620, true, true, false, false);

    addProd("Oat Milk Tetra Pack", "ओट दूध टेट्रा पैक",
      "Barista-style oat milk in a tetra pack carton, froths perfectly for coffee.",
      175, 195, "Plant-based", "Grain Milk", "oat_milk_tetrapack", "oat_milk_tetrapack", "1L",
      85, 4.4, 530, false, true, false, true);

    addProd("Soy Milk Tetra Pack", "सोया दूध टेट्रा पैक",
      "High-protein soy milk enriched with calcium and vitamin D in a tetra pack.",
      120, 135, "Plant-based", "Grain Milk", "soy_milk_tetrapack", "soy_milk_tetrapack", "1L",
      100, 4.1, 480, false, false, true, false);

    addProd("Coconut Milk Tetra Pack", "नारियल दूध टेट्रा पैक",
      "Rich and creamy coconut milk in a tetra pack, perfect for curries and desserts.",
      110, 125, "Plant-based", "Nut Milk", "coconut_milk_tetrapack", "coconut_milk_tetrapack", "1L",
      80, 4.2, 390, true, false, false, true);

    // -- CAT 10: Cream & Khoa (5 products) --
    addProd("Fresh Cream Tub", "ताज़ी क्रीम टब",
      "Smooth fresh cream in a tub for cooking, baking, and desserts.",
      65, 70, "Cream & Khoa", "Fresh Cream", "cream_tub", "cream_tub", "200ml",
      150, 4.3, 420, false, false, false, false);

    addProd("Whipping Cream Tub", "व्हिपिंग क्रीम टब",
      "Light whipping cream in a tub that whips up fluffy for cakes and desserts.",
      110, 120, "Cream & Khoa", "Fresh Cream", "cream_tub", "cream_tub", "250ml",
      100, 4.5, 680, true, true, false, false);

    addProd("Khoya / Mawa Block", "खोया / मावा ब्लॉक",
      "Authentic khoa (mawa) block made by slow-cooking buffalo milk. Perfect for sweets.",
      220, 240, "Cream & Khoa", "Khoa & Mawa", "khoa_box", "khoa_box", "500g",
      80, 4.5, 520, true, false, false, true);

    addProd("Malai Khoa Box", "मलाई खोया बॉक्स",
      "Premium quality malai khoa in a box, ideal for making barfi and halwa.",
      250, 275, "Cream & Khoa", "Khoa & Mawa", "khoa_box", "khoa_box", "500g",
      60, 4.6, 390, false, true, true, false);

    addProd("Clotted Cream Tub", "क्लॉटेड क्रीम टब",
      "Rich and thick clotted cream in a tub, perfect with scones and desserts.",
      180, 199, "Cream & Khoa", "Fresh Cream", "cream_tub", "cream_tub", "200g",
      45, 4.4, 280, false, false, false, false);

    // -- NEW PRODUCTS (56-69) --

    // Product 56: Buffalo Milk
    addProd("Buffalo Milk", "भैंस का दूध",
      "Rich, creamy buffalo milk with high fat content.",
      70, 80, "Milk", "Buffalo Milk", "milk_pouch", "milk_pouch", "500ml Pouch",
      80, 4.5, 0, false, true, false, false);

    // Product 57: Goat Milk
    addProd("Goat Milk", "बकरी का दूध",
      "Nutritious goat milk, easy to digest and rich in minerals.",
      120, 140, "Milk", "Specialty Milk", "milk_bottle", "milk_bottle", "500ml Bottle",
      50, 4.3, 0, false, false, false, true);

    // Product 58: Camel Milk
    addProd("Camel Milk", "ऊंटनी का दूध",
      "Rare premium camel milk, high in vitamins and immune-boosting properties.",
      250, 290, "Milk", "Specialty Milk", "milk_bottle", "milk_bottle", "250ml Bottle",
      30, 4.2, 0, true, false, false, true);

    // Product 59: A2 Cow Milk (new variant)
    addProd("A2 Cow Milk", "ए2 गाय का दूध",
      "Premium A2 protein cow milk from indigenous breeds, easy on digestion.",
      90, 110, "Milk", "Specialty Milk", "milk_bottle", "milk_bottle", "500ml Bottle",
      100, 4.7, 0, true, true, true, false);

    // Product 60: Misti Dahi (Sweet Yogurt)
    addProd("Misti Dahi", "मिष्टी दही",
      "Traditional Bengali sweet yogurt, thick and creamy with natural sweetness.",
      60, 70, "Curd & Yogurt", "Set Curd", "yogurt_cup", "yogurt_cup", "200g Cup",
      70, 4.6, 0, false, true, true, false);

    // Product 61: Sour Cream
    addProd("Sour Cream", "खट्टी क्रीम",
      "Thick, tangy sour cream perfect for dips, baked potatoes, and European recipes.",
      180, 210, "Cream & Khoa", "Fresh Cream", "cream_tub", "cream_tub", "200g Tub",
      45, 4.2, 0, false, false, false, true);

    // Product 62: Kefir
    addProd("Kefir", "केफिर",
      "Probiotic-rich fermented milk drink, excellent for gut health and immunity.",
      220, 260, "Beverages", "Protein Drinks", "milk_bottle", "milk_bottle", "500ml Bottle",
      40, 4.4, 0, false, true, false, true);

    // Product 63: Whey Protein Powder
     addProd("Whey Protein Powder", "व्हे प्रोटीन पाउडर",
       "Pure dairy-derived whey protein concentrate, ideal for fitness and muscle recovery.",
       1200, 1500, "Cream & Khoa", "Khoa & Mawa", "whey_protein_can", "whey_protein_can", "500g Can",
      60, 4.5, 0, true, true, false, false);

    // Product 64: Casein Protein Powder
     addProd("Casein Protein Powder", "केसीन प्रोटीन पाउडर",
       "Slow-digesting dairy casein protein for sustained muscle nourishment overnight.",
       1400, 1700, "Cream & Khoa", "Khoa & Mawa", "casein_protein_can", "casein_protein_can", "500g Can",
      40, 4.3, 0, false, false, false, false);

    // Product 65: Lactose-Free Milk (1L tetra pack variant)
    addProd("Lactose-Free Milk", "लैक्टोज-फ्री दूध",
      "Full-cream milk with lactose removed — all the nutrition without the intolerance symptoms.",
      85, 100, "Milk", "Specialty Milk", "milk_tetrapack", "milk_tetrapack", "1L Tetra Pack",
      90, 4.5, 0, true, false, true, false);

    // Product 66: Full Cream Milk Powder
     addProd("Full Cream Milk Powder", "फुल क्रीम मिल्क पाउडर",
       "Rich full cream milk powder, perfect for baking, sweets, and beverages.",
       380, 450, "Cream & Khoa", "Khoa & Mawa", "milk_powder_pack", "milk_powder_pack", "500g Pack",
      75, 4.4, 0, false, false, true, false);

    // Product 67: Basundi
     addProd("Basundi", "बासुंदी",
       "Traditional Gujarati and Maharashtrian dessert — thickened sweetened milk with cardamom and saffron.",
       140, 160, "Desserts", "Indian Sweets", "basundi_tub", "basundi_tub", "250g Tub",
      50, 4.6, 0, true, true, false, false);

    // Product 68: Rabri
     addProd("Rabri", "रबड़ी",
       "Indulgent North Indian sweet made from thickened milk with layers of cream and dry fruits.",
       160, 190, "Desserts", "Indian Sweets", "rabri_tub", "rabri_tub", "250g Tub",
      45, 4.7, 0, true, false, true, false);

    // Product 69: Dairy Lactose Powder (Industrial)
     addProd("Dairy Lactose Powder", "डेयरी लैक्टोज पाउडर",
       "Food-grade lactose powder for confectionery, pharmaceuticals, and infant formula.",
       850, 1000, "Cream & Khoa", "Khoa & Mawa", "lactose_powder_pack", "lactose_powder_pack", "1kg Pack",
      25, 4.0, 0, false, false, false, false);
  };

  // Trigger sample data load on first call
  loadSampleData();

  // Mixin composition
  include AdminApi(state);
  include CatalogApi(products, categories, subcategories, state);
  include OrdersApi(orders, state);
  include UsersApi(profiles);
  include ReviewsApi(reviewsMap, state);
  include ContactsApi(contactMessages, state);
  include WishlistApi(wishlistMap);
};
