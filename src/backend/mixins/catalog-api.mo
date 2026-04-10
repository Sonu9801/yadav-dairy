import List "mo:core/List";
import CatalogLib "../lib/catalog";
import AdminLib "../lib/admin";
import CatalogTypes "../types/catalog";

mixin (
  products : List.List<CatalogLib.Product>,
  categories : List.List<CatalogLib.Category>,
  subcategories : List.List<CatalogLib.Subcategory>,
  state : {
    var nextProductId : Nat;
    var nextCategoryId : Nat;
    var nextSubcategoryId : Nat;
    var adminPrincipal : ?Principal;
  },
) {

  // --- Public read-only catalog queries ---

  public query func listCategories() : async [CatalogTypes.Category] {
    CatalogLib.listCategories(categories);
  };

  public query func getCategory(id : CatalogTypes.CategoryId) : async ?CatalogTypes.Category {
    CatalogLib.getCategory(categories, id);
  };

  public query func listSubcategories() : async [CatalogTypes.Subcategory] {
    CatalogLib.listSubcategories(subcategories);
  };

  public query func listSubcategoriesByCategory(categoryId : CatalogTypes.CategoryId) : async [CatalogTypes.Subcategory] {
    CatalogLib.listSubcategoriesByCategory(subcategories, categoryId);
  };

  public query func listProducts() : async [CatalogTypes.Product] {
    CatalogLib.listProducts(products);
  };

  public query func getProduct(id : CatalogTypes.ProductId) : async ?CatalogTypes.Product {
    CatalogLib.getProduct(products, id);
  };

  public query func listFeaturedProducts() : async [CatalogTypes.Product] {
    CatalogLib.listFeaturedProducts(products);
  };

  public query func listTrendingProducts() : async [CatalogTypes.Product] {
    CatalogLib.listTrendingProducts(products);
  };

  public query func listBestSellers() : async [CatalogTypes.Product] {
    CatalogLib.listBestSellers(products);
  };

  public query func listFreshArrivals() : async [CatalogTypes.Product] {
    CatalogLib.listFreshArrivals(products);
  };

  public query func listProductsByCategory(category : Text) : async [CatalogTypes.Product] {
    CatalogLib.listProductsByCategory(products, category);
  };

  public query func searchProducts(term : Text) : async [CatalogTypes.Product] {
    CatalogLib.searchProducts(products, term);
  };

  public query func filterProducts(
    category : ?Text,
    maxPrice : ?Nat,
    packagingType : ?Text,
  ) : async [CatalogTypes.Product] {
    CatalogLib.filterProducts(products, category, maxPrice, packagingType);
  };

  // --- Admin-only catalog mutations ---

  public shared ({ caller }) func createCategory(args : CatalogTypes.CreateCategoryArgs) : async CatalogTypes.Category {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    let cat = CatalogLib.createCategory(categories, state.nextCategoryId, args);
    state.nextCategoryId += 1;
    cat;
  };

  public shared ({ caller }) func updateCategory(args : CatalogTypes.UpdateCategoryArgs) : async ?CatalogTypes.Category {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    CatalogLib.updateCategory(categories, args);
  };

  public shared ({ caller }) func deleteCategory(id : CatalogTypes.CategoryId) : async Bool {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    CatalogLib.deleteCategory(categories, id);
  };

  public shared ({ caller }) func createSubcategory(args : CatalogTypes.CreateSubcategoryArgs) : async CatalogTypes.Subcategory {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    let sub = CatalogLib.createSubcategory(subcategories, state.nextSubcategoryId, args);
    state.nextSubcategoryId += 1;
    sub;
  };

  public shared ({ caller }) func deleteSubcategory(id : CatalogTypes.SubcategoryId) : async Bool {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    CatalogLib.deleteSubcategory(subcategories, id);
  };

  public shared ({ caller }) func createProduct(args : CatalogTypes.CreateProductArgs) : async CatalogTypes.Product {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    let prod = CatalogLib.createProduct(products, state.nextProductId, args);
    state.nextProductId += 1;
    prod;
  };

  public shared ({ caller }) func updateProduct(args : CatalogTypes.UpdateProductArgs) : async ?CatalogTypes.Product {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    CatalogLib.updateProduct(products, args);
  };

  public shared ({ caller }) func deleteProduct(id : CatalogTypes.ProductId) : async Bool {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    CatalogLib.deleteProduct(products, id);
  };
};
