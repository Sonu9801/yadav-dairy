import Common "common";

module {
  public type ProductId = Common.ProductId;
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type ReviewId = Nat;
  public type ContactMessageId = Nat;

  // ── User Profile ─────────────────────────────────────────────────────
  public type UserProfile = {
    principal : Principal;
    displayName : Text;
    email : Text;
    phone : Text;
    address : Text;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };

  public type UpdateProfileArgs = {
    displayName : Text;
    email : Text;
    phone : Text;
    address : Text;
  };

  // ── Reviews ──────────────────────────────────────────────────────────
  public type Review = {
    id : ReviewId;
    productId : ProductId;
    reviewerPrincipal : Principal;
    reviewerName : Text;
    rating : Nat;       // 1–5
    comment : Text;
    createdAt : Timestamp;
  };

  public type SubmitReviewArgs = {
    productId : ProductId;
    rating : Nat;
    comment : Text;
    reviewerName : Text;
  };

  // ── Contact Messages ─────────────────────────────────────────────────
  public type ContactMessage = {
    id : ContactMessageId;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Timestamp;
  };

  // ── Wishlist ─────────────────────────────────────────────────────────
  public type WishlistItem = {
    productId : ProductId;
    addedAt : Timestamp;
  };
};
