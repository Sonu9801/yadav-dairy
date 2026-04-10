import Runtime "mo:core/Runtime";

module {
  public func setAdmin(currentAdmin : ?Principal, caller : Principal) : Principal {
    switch (currentAdmin) {
      case null caller;
      case (?admin) {
        if (admin == caller) caller
        else Runtime.trap("Unauthorized: only the current admin can transfer admin rights");
      };
    };
  };

  public func isAdmin(adminPrincipal : ?Principal, caller : Principal) : Bool {
    switch (adminPrincipal) {
      case null true; // no admin set yet — allow first caller
      case (?admin) admin == caller;
    };
  };

  public func requireAdmin(adminPrincipal : ?Principal, caller : Principal) {
    if (not isAdmin(adminPrincipal, caller)) {
      Runtime.trap("Unauthorized: admin access required");
    };
  };
};
