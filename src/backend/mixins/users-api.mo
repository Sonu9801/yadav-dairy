import Map "mo:core/Map";
import Principal "mo:core/Principal";
import UsersLib "../lib/users";
import UsersReviewsTypes "../types/users-reviews";

mixin (
  profiles : Map.Map<Principal, UsersLib.UserProfile>,
) {

  public query ({ caller }) func getUserProfile() : async ?UsersReviewsTypes.UserProfile {
    UsersLib.getProfile(profiles, caller);
  };

  public shared ({ caller }) func updateUserProfile(args : UsersReviewsTypes.UpdateProfileArgs) : async UsersReviewsTypes.UserProfile {
    UsersLib.upsertProfile(profiles, caller, args);
  };

  public shared ({ caller }) func deleteUserProfile() : async Bool {
    UsersLib.deleteProfile(profiles, caller);
  };
};
