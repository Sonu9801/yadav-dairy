import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/users-reviews";

module {
  public type Review = Types.Review;
  public type ReviewsMap = Map.Map<Types.ProductId, List.List<Review>>;

  public func submitReview(
    reviewsMap : ReviewsMap,
    nextId : Nat,
    caller : Principal,
    args : Types.SubmitReviewArgs,
  ) : Review {
    let review : Review = {
      id = nextId;
      productId = args.productId;
      reviewerPrincipal = caller;
      reviewerName = args.reviewerName;
      rating = args.rating;
      comment = args.comment;
      createdAt = Time.now();
    };
    switch (reviewsMap.get(args.productId)) {
      case null {
        let list = List.empty<Review>();
        list.add(review);
        reviewsMap.add(args.productId, list);
      };
      case (?list) {
        list.add(review);
      };
    };
    review;
  };

  public func getProductReviews(reviewsMap : ReviewsMap, productId : Types.ProductId) : [Review] {
    switch (reviewsMap.get(productId)) {
      case null [];
      case (?list) list.toArray();
    };
  };

  public func listAllReviews(reviewsMap : ReviewsMap) : [Review] {
    var all : List.List<Review> = List.empty<Review>();
    for ((_, list) in reviewsMap.entries()) {
      all.append(list);
    };
    all.toArray();
  };

  public func deleteReview(
    reviewsMap : ReviewsMap,
    reviewId : Types.ReviewId,
    productId : Types.ProductId,
    caller : Principal,
    isAdmin : Bool,
  ) : Bool {
    switch (reviewsMap.get(productId)) {
      case null false;
      case (?list) {
        switch (list.findIndex(func(r) { r.id == reviewId })) {
          case null false;
          case (?i) {
            let review = list.at(i);
            if (not isAdmin and review.reviewerPrincipal != caller) {
              Runtime.trap("Unauthorized: can only delete your own reviews");
            };
            let filtered = list.filter(func(r) { r.id != reviewId });
            list.clear();
            list.append(filtered);
            true;
          };
        };
      };
    };
  };
};
