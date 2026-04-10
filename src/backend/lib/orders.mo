import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/orders";

module {
  public type Order = Types.Order;

  public func placeOrder(orders : List.List<Order>, nextId : Nat, caller : Principal, args : Types.PlaceOrderArgs) : Order {
    let order : Order = {
      id = nextId;
      userId = caller;
      items = args.items;
      totalAmount = args.totalAmount;
      deliveryFee = args.deliveryFee;
      status = #pending;
      paymentMethod = args.paymentMethod;
      shippingAddress = args.shippingAddress;
      createdAt = Time.now();
    };
    orders.add(order);
    order;
  };

  public func getOrder(orders : List.List<Order>, id : Types.OrderId) : ?Order {
    orders.find(func(o) { o.id == id });
  };

  public func listOrders(orders : List.List<Order>) : [Order] {
    orders.toArray();
  };

  public func listOrdersByUser(orders : List.List<Order>, userId : Principal) : [Order] {
    orders.filter(func(o) { o.userId == userId }).toArray();
  };

  public func updateOrderStatus(orders : List.List<Order>, id : Types.OrderId, status : Types.OrderStatus) : ?Order {
    switch (orders.findIndex(func(o) { o.id == id })) {
      case null null;
      case (?i) {
        let existing = orders.at(i);
        let updated : Order = { existing with status };
        orders.put(i, updated);
        ?updated;
      };
    };
  };
};
