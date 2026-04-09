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
    let cat : Category = {
      id = nextId;
      name = args.name;
      nameHi = args.nameHi;
      description = args.description;
      iconEmoji = args.iconEmoji;
      sortOrder = args.sortOrder;
    };
    categories.add(cat);
    cat;
  };

  public func updateCategory(categories : List.List<Category>, args : Types.UpdateCategoryArgs) : ?Category {
    var updated : ?Category = null;
    categories.mapInPlace(func(c) {
      if (c.id == args.id) {
        let u : Category = {
          id = c.id;
          name = args.name;
          nameHi = args.nameHi;
          description = args.description;
          iconEmoji = args.iconEmoji;
          sortOrder = args.sortOrder;
        };
        updated := ?u;
        u;
      } else { c };
    });
    updated;
  };

  public func deleteCategory(categories : List.List<Category>, id : Types.CategoryId) : Bool {
    let sizeBefore = categories.size();
    let filtered = categories.filter(func(c) { c.id != id });
    categories.clear();
    categories.append(filtered);
    categories.size() < sizeBefore;
  };

  public func listSubcategories(subcategories : List.List<Subcategory>) : [Subcategory] {
    subcategories.toArray();
  };

  public func listSubcategoriesByCategory(subcategories : List.List<Subcategory>, categoryId : Types.CategoryId) : [Subcategory] {
    subcategories.filter(func(s) { s.categoryId == categoryId }).toArray();
  };

  public func createSubcategory(subcategories : List.List<Subcategory>, nextId : Nat, args : Types.CreateSubcategoryArgs) : Subcategory {
    let sub : Subcategory = {
      id = nextId;
      categoryId = args.categoryId;
      name = args.name;
      nameHi = args.nameHi;
    };
    subcategories.add(sub);
    sub;
  };

  public func deleteSubcategory(subcategories : List.List<Subcategory>, id : Types.SubcategoryId) : Bool {
    let sizeBefore = subcategories.size();
    let filtered = subcategories.filter(func(s) { s.id != id });
    subcategories.clear();
    subcategories.append(filtered);
    subcategories.size() < sizeBefore;
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

  public func listProductsByCategory(products : List.List<Product>, categoryId : Types.CategoryId) : [Product] {
    products.filter(func(p) { p.categoryId == categoryId }).toArray();
  };

  public func searchProducts(products : List.List<Product>, term : Text) : [Product] {
    let lower = term.toLower();
    products.filter(func(p) {
      p.nameEn.toLower().contains(#text lower) or p.nameHi.toLower().contains(#text lower)
    }).toArray();
  };

  public func filterProducts(
    products : List.List<Product>,
    categoryId : ?Types.CategoryId,
    maxPrice : ?Nat,
    packagingType : ?Text,
  ) : [Product] {
    products.filter(func(p) {
      let catOk = switch (categoryId) { case (?cid) { p.categoryId == cid }; case null { true } };
      let priceOk = switch (maxPrice) { case (?mp) { p.price <= mp }; case null { true } };
      let pkgOk = switch (packagingType) { case (?pkg) { p.packagingType == pkg }; case null { true } };
      catOk and priceOk and pkgOk;
    }).toArray();
  };

  public func createProduct(products : List.List<Product>, nextId : Nat, args : Types.CreateProductArgs) : Product {
    let prod : Product = {
      id = nextId;
      nameEn = args.nameEn;
      nameHi = args.nameHi;
      brand = args.brand;
      description = args.description;
      price = args.price;
      originalPrice = args.originalPrice;
      categoryId = args.categoryId;
      subcategoryId = args.subcategoryId;
      packagingType = args.packagingType;
      fatContent = args.fatContent;
      imageUrl = args.imageUrl;
      inStock = args.inStock;
      stockCount = args.stockCount;
      rating = 4.0;
      reviewCount = 0;
      isFeatured = args.isFeatured;
      isTrending = args.isTrending;
      createdAt = Time.now();
    };
    products.add(prod);
    prod;
  };

  public func updateProduct(products : List.List<Product>, args : Types.UpdateProductArgs) : ?Product {
    var updated : ?Product = null;
    products.mapInPlace(func(p) {
      if (p.id == args.id) {
        let u : Product = {
          id = p.id;
          nameEn = args.nameEn;
          nameHi = args.nameHi;
          brand = args.brand;
          description = args.description;
          price = args.price;
          originalPrice = args.originalPrice;
          categoryId = args.categoryId;
          subcategoryId = args.subcategoryId;
          packagingType = args.packagingType;
          fatContent = args.fatContent;
          imageUrl = args.imageUrl;
          inStock = args.inStock;
          stockCount = args.stockCount;
          isFeatured = args.isFeatured;
          isTrending = args.isTrending;
          rating = p.rating;
          reviewCount = p.reviewCount;
          createdAt = p.createdAt;
        };
        updated := ?u;
        u;
      } else { p };
    });
    updated;
  };

  public func deleteProduct(products : List.List<Product>, id : Types.ProductId) : Bool {
    let sizeBefore = products.size();
    let filtered = products.filter(func(p) { p.id != id });
    products.clear();
    products.append(filtered);
    products.size() < sizeBefore;
  };
};
