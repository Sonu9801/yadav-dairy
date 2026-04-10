import Map "mo:core/Map";
import Time "mo:core/Time";
import Types "../types/users-reviews";

module {
  public type UserProfile = Types.UserProfile;
  public type UserProfileMap = Map.Map<Principal, UserProfile>;

  public func getProfile(profiles : UserProfileMap, caller : Principal) : ?UserProfile {
    profiles.get(caller);
  };

  public func upsertProfile(profiles : UserProfileMap, caller : Principal, args : Types.UpdateProfileArgs) : UserProfile {
    let now = Time.now();
    let profile : UserProfile = switch (profiles.get(caller)) {
      case null {
        {
          principal = caller;
          displayName = args.displayName;
          email = args.email;
          phone = args.phone;
          address = args.address;
          createdAt = now;
          updatedAt = now;
        };
      };
      case (?existing) {
        {
          existing with
          displayName = args.displayName;
          email = args.email;
          phone = args.phone;
          address = args.address;
          updatedAt = now;
        };
      };
    };
    profiles.add(caller, profile);
    profile;
  };

  public func deleteProfile(profiles : UserProfileMap, caller : Principal) : Bool {
    switch (profiles.get(caller)) {
      case null false;
      case (?_) {
        profiles.remove(caller);
        true;
      };
    };
  };
};
