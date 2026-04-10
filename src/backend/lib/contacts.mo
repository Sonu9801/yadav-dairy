import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/users-reviews";

module {
  public type ContactMessage = Types.ContactMessage;
  public type ContactMessageList = List.List<ContactMessage>;

  public func submitMessage(
    messages : ContactMessageList,
    nextId : Nat,
    name : Text,
    email : Text,
    message : Text,
  ) : ContactMessage {
    let msg : ContactMessage = {
      id = nextId;
      name;
      email;
      message;
      createdAt = Time.now();
    };
    messages.add(msg);
    msg;
  };

  public func listMessages(messages : ContactMessageList) : [ContactMessage] {
    messages.toArray();
  };
};
