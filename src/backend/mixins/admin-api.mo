import Runtime "mo:core/Runtime";
import AdminLib "../lib/admin";

mixin (state : { var adminPrincipal : ?Principal }) {

  public shared ({ caller }) func setAdminPrincipal() : async () {
    state.adminPrincipal := ?AdminLib.setAdmin(state.adminPrincipal, caller);
  };

  public query func getAdminPrincipal() : async ?Principal {
    state.adminPrincipal;
  };
};
