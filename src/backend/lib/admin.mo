import Runtime "mo:core/Runtime";

module {
  public func setAdmin(currentAdmin : ?Principal, caller : Principal) : Principal {
    switch (currentAdmin) {
      case (?_) { Runtime.trap("Admin already set") };
      case null { caller };
    };
  };

  public func isAdmin(adminPrincipal : ?Principal, caller : Principal) : Bool {
    switch (adminPrincipal) {
      case (?admin) { admin == caller };
      case null { false };
    };
  };

  public func requireAdmin(adminPrincipal : ?Principal, caller : Principal) {
    if (not isAdmin(adminPrincipal, caller)) {
      Runtime.trap("Unauthorized: admin access required");
    };
  };
};
