import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import ReviewsLib "../lib/reviews";
import AdminLib "../lib/admin";
import UsersReviewsTypes "../types/users-reviews";

mixin (
  reviewsMap : Map.Map<UsersReviewsTypes.ProductId, List.List<ReviewsLib.Review>>,
  state : {
    var nextReviewId : Nat;
    var adminPrincipal : ?Principal;
  },
) {

  public query func getProductReviews(productId : UsersReviewsTypes.ProductId) : async [UsersReviewsTypes.Review] {
    ReviewsLib.getProductReviews(reviewsMap, productId);
  };

  public query func listAllReviews() : async [UsersReviewsTypes.Review] {
    ReviewsLib.listAllReviews(reviewsMap);
  };

  public shared ({ caller }) func addReview(args : UsersReviewsTypes.SubmitReviewArgs) : async UsersReviewsTypes.Review {
    let review = ReviewsLib.submitReview(reviewsMap, state.nextReviewId, caller, args);
    state.nextReviewId += 1;
    review;
  };

  public shared ({ caller }) func deleteReview(reviewId : UsersReviewsTypes.ReviewId, productId : UsersReviewsTypes.ProductId) : async Bool {
    let isAdmin = AdminLib.isAdmin(state.adminPrincipal, caller);
    ReviewsLib.deleteReview(reviewsMap, reviewId, productId, caller, isAdmin);
  };
};
