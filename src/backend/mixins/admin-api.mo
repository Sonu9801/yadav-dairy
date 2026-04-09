import AdminLib "../lib/admin";

mixin (state : { var adminPrincipal : ?Principal }) {

  public shared ({ caller }) func setAdmin() : async () {
    let newAdmin = AdminLib.setAdmin(state.adminPrincipal, caller);
    state.adminPrincipal := ?newAdmin;
  };

  public query func getAdmin() : async ?Principal {
    state.adminPrincipal;
  };
};
