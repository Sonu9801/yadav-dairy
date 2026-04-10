import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/catalog";

module {
  public type Category = Types.Category;
  public type Subcategory = Types.Subcategory;
  public type Product = Types.Product;

  public func listCategories(categories : List.List<Category>) : [Category] {
    categories.toArray();
  };

  public func getCategory(categories : List.List<Category>, id : Types.CategoryId) : ?Category {
    categories.find(func(c) { c.id == id });
  };

  public func createCategory(categories : List.List<Category>, nextId : Nat, args : Types.CreateCategoryArgs) : Category {
    let c : Category = {
      id = nextId;
      name = args.name;
      nameHindi = args.nameHindi;
      icon = args.icon;
      colorClass = args.colorClass;
      sortOrder = args.sortOrder;
    };
    categories.add(c);
    c;
  };

  public func updateCategory(categories : List.List<Category>, args : Types.UpdateCategoryArgs) : ?Category {
    switch (categories.findIndex(func(c) { c.id == args.id })) {
      case null null;
      case (?i) {
        let updated : Category = {
          id = args.id;
          name = args.name;
          nameHindi = args.nameHindi;
          icon = args.icon;
          colorClass = args.colorClass;
          sortOrder = args.sortOrder;
        };
        categories.put(i, updated);
        ?updated;
      };
    };
  };

  public func deleteCategory(categories : List.List<Category>, id : Types.CategoryId) : Bool {
    switch (categories.findIndex(func(c) { c.id == id })) {
      case null false;
      case (?i) {
        let filtered = categories.filter(func(c) { c.id != id });
        categories.clear();
        categories.append(filtered);
        true;
      };
    };
  };

  public func listSubcategories(subcategories : List.List<Subcategory>) : [Subcategory] {
    subcategories.toArray();
  };

  public func listSubcategoriesByCategory(subcategories : List.List<Subcategory>, categoryId : Types.CategoryId) : [Subcategory] {
    subcategories.filter(func(s) { s.categoryId == categoryId }).toArray();
  };

  public func createSubcategory(subcategories : List.List<Subcategory>, nextId : Nat, args : Types.CreateSubcategoryArgs) : Subcategory {
    let s : Subcategory = {
      id = nextId;
      categoryId = args.categoryId;
      name = args.name;
      nameHindi = args.nameHindi;
    };
    subcategories.add(s);
    s;
  };

  public func deleteSubcategory(subcategories : List.List<Subcategory>, id : Types.SubcategoryId) : Bool {
    switch (subcategories.findIndex(func(s) { s.id == id })) {
      case null false;
      case (?_) {
        let filtered = subcategories.filter(func(s) { s.id != id });
        subcategories.clear();
        subcategories.append(filtered);
        true;
      };
    };
  };

  public func listProducts(products : List.List<Product>) : [Product] {
    products.toArray();
  };

  public func getProduct(products : List.List<Product>, id : Types.ProductId) : ?Product {
    products.find(func(p) { p.id == id });
  };

  public func listFeaturedProducts(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.isFeatured }).toArray();
  };

  public func listTrendingProducts(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.isTrending }).toArray();
  };

  public func listBestSellers(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.isBestSeller }).toArray();
  };

  public func listFreshArrivals(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.isFreshArrival }).toArray();
  };

  public func listProductsByCategory(products : List.List<Product>, category : Text) : [Product] {
    products.filter(func(p) { p.category == category }).toArray();
  };

  public func searchProducts(products : List.List<Product>, term : Text) : [Product] {
    let lower = term.toLower();
    products.filter(func(p) {
      p.name.toLower().contains(#text lower) or
      p.nameHindi.toLower().contains(#text lower) or
      p.description.toLower().contains(#text lower) or
      p.category.toLower().contains(#text lower)
    }).toArray();
  };

  public func filterProducts(
    products : List.List<Product>,
    category : ?Text,
    maxPrice : ?Nat,
    packagingType : ?Text,
  ) : [Product] {
    products.filter(func(p) {
      let catMatch = switch (category) {
        case null true;
        case (?c) p.category == c;
      };
      let priceMatch = switch (maxPrice) {
        case null true;
        case (?mp) p.price <= mp;
      };
      let pkgMatch = switch (packagingType) {
        case null true;
        case (?pkg) p.packagingType == pkg;
      };
      catMatch and priceMatch and pkgMatch;
    }).toArray();
  };

  public func createProduct(products : List.List<Product>, nextId : Nat, args : Types.CreateProductArgs) : Product {
    let p : Product = {
      id = nextId;
      name = args.name;
      nameHindi = args.nameHindi;
      brand = args.brand;
      description = args.description;
      price = args.price;
      originalPrice = args.originalPrice;
      category = args.category;
      subcategory = args.subcategory;
      packagingType = args.packagingType;
      imageUrl = args.imageUrl;
      quantity = args.quantity;
      inStock = args.inStock;
      stock = args.stock;
      rating = 0.0;
      reviewCount = 0;
      isFeatured = args.isFeatured;
      isTrending = args.isTrending;
      isBestSeller = args.isBestSeller;
      isFreshArrival = args.isFreshArrival;
      createdAt = Time.now();
    };
    products.add(p);
    p;
  };

  public func updateProduct(products : List.List<Product>, args : Types.UpdateProductArgs) : ?Product {
    switch (products.findIndex(func(p) { p.id == args.id })) {
      case null null;
      case (?i) {
        let existing = products.at(i);
        let updated : Product = {
          existing with
          name = args.name;
          nameHindi = args.nameHindi;
          brand = args.brand;
          description = args.description;
          price = args.price;
          originalPrice = args.originalPrice;
          category = args.category;
          subcategory = args.subcategory;
          packagingType = args.packagingType;
          imageUrl = args.imageUrl;
          quantity = args.quantity;
          inStock = args.inStock;
          stock = args.stock;
          isFeatured = args.isFeatured;
          isTrending = args.isTrending;
          isBestSeller = args.isBestSeller;
          isFreshArrival = args.isFreshArrival;
        };
        products.put(i, updated);
        ?updated;
      };
    };
  };

  public func deleteProduct(products : List.List<Product>, id : Types.ProductId) : Bool {
    switch (products.findIndex(func(p) { p.id == id })) {
      case null false;
      case (?_) {
        let filtered = products.filter(func(p) { p.id != id });
        products.clear();
        products.append(filtered);
        true;
      };
    };
  };
};
