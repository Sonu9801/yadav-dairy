import Common "common";

module {
  public type ProductId = Common.ProductId;
  public type CategoryId = Common.CategoryId;
  public type SubcategoryId = Common.SubcategoryId;
  public type Timestamp = Common.Timestamp;

  public type Category = {
    id : CategoryId;
    name : Text;
    nameHindi : Text;
    icon : Text;
    colorClass : Text;
    sortOrder : Nat;
  };

  public type Subcategory = {
    id : SubcategoryId;
    categoryId : CategoryId;
    name : Text;
    nameHindi : Text;
  };

  public type Product = {
    id : ProductId;
    name : Text;
    nameHindi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    category : Text;
    subcategory : Text;
    packagingType : Text;
    imageUrl : Text;
    quantity : Text;
    inStock : Bool;
    stock : Nat;
    rating : Float;
    reviewCount : Nat;
    isFeatured : Bool;
    isTrending : Bool;
    isBestSeller : Bool;
    isFreshArrival : Bool;
    createdAt : Timestamp;
  };

  public type CreateProductArgs = {
    name : Text;
    nameHindi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    category : Text;
    subcategory : Text;
    packagingType : Text;
    imageUrl : Text;
    quantity : Text;
    inStock : Bool;
    stock : Nat;
    isFeatured : Bool;
    isTrending : Bool;
    isBestSeller : Bool;
    isFreshArrival : Bool;
  };

  public type UpdateProductArgs = {
    id : ProductId;
    name : Text;
    nameHindi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    category : Text;
    subcategory : Text;
    packagingType : Text;
    imageUrl : Text;
    quantity : Text;
    inStock : Bool;
    stock : Nat;
    isFeatured : Bool;
    isTrending : Bool;
    isBestSeller : Bool;
    isFreshArrival : Bool;
  };

  public type CreateCategoryArgs = {
    name : Text;
    nameHindi : Text;
    icon : Text;
    colorClass : Text;
    sortOrder : Nat;
  };

  public type UpdateCategoryArgs = {
    id : CategoryId;
    name : Text;
    nameHindi : Text;
    icon : Text;
    colorClass : Text;
    sortOrder : Nat;
  };

  public type CreateSubcategoryArgs = {
    categoryId : CategoryId;
    name : Text;
    nameHindi : Text;
  };
};
