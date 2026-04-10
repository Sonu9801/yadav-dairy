import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import WishlistLib "../lib/wishlist";
import UsersReviewsTypes "../types/users-reviews";

mixin (
  wishlistMap : Map.Map<Principal, List.List<WishlistLib.WishlistItem>>,
) {

  public query ({ caller }) func getWishlist() : async [UsersReviewsTypes.WishlistItem] {
    WishlistLib.getWishlist(wishlistMap, caller);
  };

  public shared ({ caller }) func addToWishlist(productId : UsersReviewsTypes.ProductId) : async Bool {
    WishlistLib.addToWishlist(wishlistMap, caller, productId);
  };

  public shared ({ caller }) func removeFromWishlist(productId : UsersReviewsTypes.ProductId) : async Bool {
    WishlistLib.removeFromWishlist(wishlistMap, caller, productId);
  };
};
