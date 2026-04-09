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

  // --- Public order placement (guest checkout) ---

  public shared func placeOrder(args : OrderTypes.PlaceOrderArgs) : async OrderTypes.Order {
    let order = OrdersLib.placeOrder(orders, state.nextOrderId, args);
    state.nextOrderId += 1;
    order;
  };

  public query func getOrder(id : OrderTypes.OrderId) : async ?OrderTypes.Order {
    OrdersLib.getOrder(orders, id);
  };

  // --- Admin-only order management ---

  public shared ({ caller }) func listOrders() : async [OrderTypes.Order] {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    OrdersLib.listOrders(orders);
  };

  public shared ({ caller }) func updateOrderStatus(id : OrderTypes.OrderId, status : OrderTypes.OrderStatus) : async ?OrderTypes.Order {
    AdminLib.requireAdmin(state.adminPrincipal, caller);
    OrdersLib.updateOrderStatus(orders, id, status);
  };
};
