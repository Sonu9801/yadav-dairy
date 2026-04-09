import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/orders";

module {
  public type Order = Types.Order;

  public func placeOrder(orders : List.List<Order>, nextId : Nat, args : Types.PlaceOrderArgs) : Order {
    let order : Order = {
      id = nextId;
      customerName = args.customerName;
      customerPhone = args.customerPhone;
      address = args.address;
      city = args.city;
      pincode = args.pincode;
      paymentMethod = args.paymentMethod;
      items = args.items;
      totalAmount = args.totalAmount;
      status = #pending;
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

  public func updateOrderStatus(orders : List.List<Order>, id : Types.OrderId, status : Types.OrderStatus) : ?Order {
    var updated : ?Order = null;
    orders.mapInPlace(func(o) {
      if (o.id == id) {
        let u : Order = { o with status };
        updated := ?u;
        u;
      } else { o };
    });
    updated;
  };
};
