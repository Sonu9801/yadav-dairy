import List "mo:core/List";
import OrdersLib "../lib/orders";
import AdminLib "../lib/admin";
import OrderTypes "../types/orders";

mixin (
  orders : List.List<OrdersLib.Order>,
  state : {
    var nextOrderId : Nat;
    var adminPrincipal : ?Principal;
  },
) {

  // --- Authenticated user: place and view own orders ---

  public shared ({ caller }) func placeOrder(args : OrderTypes.PlaceOrderArgs) : async OrderTypes.Order {
    let order = OrdersLib.placeOrder(orders, state.nextOrderId, caller, args);
    state.nextOrderId += 1;
    order;
  };

  public query func getOrder(id : OrderTypes.OrderId) : async ?OrderTypes.Order {
    OrdersLib.getOrder(orders, id);
  };

  public query ({ caller }) func listOrders() : async [OrderTypes.Order] {
    OrdersLib.listOrdersByUser(orders, caller);
  };

  // --- Admin-only order management ---

  public shared ({ caller }) func updateOrderStatus(id : OrderTypes.OrderId, status : OrderTypes.OrderStatus) : async ?OrderTypes.Order {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    OrdersLib.updateOrderStatus(orders, id, status);
  };
};
