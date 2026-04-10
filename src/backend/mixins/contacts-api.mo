import List "mo:core/List";
import ContactsLib "../lib/contacts";
import AdminLib "../lib/admin";
import UsersReviewsTypes "../types/users-reviews";

mixin (
  contactMessages : List.List<ContactsLib.ContactMessage>,
  state : {
    var nextContactMessageId : Nat;
    var adminPrincipal : ?Principal;
  },
) {

  public shared func addContact(
    name : Text,
    email : Text,
    message : Text,
  ) : async UsersReviewsTypes.ContactMessage {
    let msg = ContactsLib.submitMessage(contactMessages, state.nextContactMessageId, name, email, message);
    state.nextContactMessageId += 1;
    msg;
  };

  public query ({ caller }) func listContacts() : async [UsersReviewsTypes.ContactMessage] {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    ContactsLib.listMessages(contactMessages);
  };
};
