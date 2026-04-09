import Common "common";

module {
  public type ProductId = Common.ProductId;
  public type CategoryId = Common.CategoryId;
  public type SubcategoryId = Common.SubcategoryId;
  public type Timestamp = Common.Timestamp;

  public type Category = {
    id : CategoryId;
    name : Text;
    nameHi : Text;
    description : Text;
    iconEmoji : Text;
    sortOrder : Nat;
  };

  public type Subcategory = {
    id : SubcategoryId;
    categoryId : CategoryId;
    name : Text;
    nameHi : Text;
  };

  public type Product = {
    id : ProductId;
    nameEn : Text;
    nameHi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    categoryId : CategoryId;
    subcategoryId : SubcategoryId;
    packagingType : Text;
    fatContent : Text;
    imageUrl : Text;
    inStock : Bool;
    stockCount : Nat;
    rating : Float;
    reviewCount : Nat;
    isFeatured : Bool;
    isTrending : Bool;
    createdAt : Timestamp;
  };

  public type CreateProductArgs = {
    nameEn : Text;
    nameHi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    categoryId : CategoryId;
    subcategoryId : SubcategoryId;
    packagingType : Text;
    fatContent : Text;
    imageUrl : Text;
    inStock : Bool;
    stockCount : Nat;
    isFeatured : Bool;
    isTrending : Bool;
  };

  public type UpdateProductArgs = {
    id : ProductId;
    nameEn : Text;
    nameHi : Text;
    brand : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    categoryId : CategoryId;
    subcategoryId : SubcategoryId;
    packagingType : Text;
    fatContent : Text;
    imageUrl : Text;
    inStock : Bool;
    stockCount : Nat;
    isFeatured : Bool;
    isTrending : Bool;
  };

  public type CreateCategoryArgs = {
    name : Text;
    nameHi : Text;
    description : Text;
    iconEmoji : Text;
    sortOrder : Nat;
  };

  public type UpdateCategoryArgs = {
    id : CategoryId;
    name : Text;
    nameHi : Text;
    description : Text;
    iconEmoji : Text;
    sortOrder : Nat;
  };

  public type CreateSubcategoryArgs = {
    categoryId : CategoryId;
    name : Text;
    nameHi : Text;
  };
};
