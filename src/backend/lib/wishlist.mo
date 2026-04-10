import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/users-reviews";

module {
  public type WishlistItem = Types.WishlistItem;
  public type WishlistMap = Map.Map<Principal, List.List<WishlistItem>>;

  public func getWishlist(wishlistMap : WishlistMap, caller : Principal) : [WishlistItem] {
    switch (wishlistMap.get(caller)) {
      case null [];
      case (?list) list.toArray();
    };
  };

  public func addToWishlist(wishlistMap : WishlistMap, caller : Principal, productId : Types.ProductId) : Bool {
    switch (wishlistMap.get(caller)) {
      case null {
        let list = List.empty<WishlistItem>();
        list.add({ productId; addedAt = Time.now() });
        wishlistMap.add(caller, list);
        true;
      };
      case (?list) {
        // avoid duplicates
        switch (list.find(func(item) { item.productId == productId })) {
          case (?_) false; // already in wishlist
          case null {
            list.add({ productId; addedAt = Time.now() });
            true;
          };
        };
      };
    };
  };

  public func removeFromWishlist(wishlistMap : WishlistMap, caller : Principal, productId : Types.ProductId) : Bool {
    switch (wishlistMap.get(caller)) {
      case null false;
      case (?list) {
        switch (list.findIndex(func(item) { item.productId == productId })) {
          case null false;
          case (?_) {
            let filtered = list.filter(func(item) { item.productId != productId });
            list.clear();
            list.append(filtered);
            true;
          };
        };
      };
    };
  };
};
