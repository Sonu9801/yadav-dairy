import Common "common";

module {
  public type OrderId = Common.OrderId;
  public type ProductId = Common.ProductId;
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type OrderStatus = {
    #pending;
    #confirmed;
    #processing;
    #shipped;
    #delivered;
    #cancelled;
  };

  public type PaymentMethod = {
    #cashOnDelivery;
    #upi;
    #card;
    #netBanking;
  };

  public type OrderItem = {
    productId : ProductId;
    productName : Text;
    quantity : Nat;
    price : Nat;
  };

  public type Order = {
    id : OrderId;
    userId : UserId;
    items : [OrderItem];
    totalAmount : Nat;
    deliveryFee : Nat;
    status : OrderStatus;
    paymentMethod : PaymentMethod;
    shippingAddress : Text;
    createdAt : Timestamp;
  };

  public type PlaceOrderArgs = {
    items : [OrderItem];
    totalAmount : Nat;
    deliveryFee : Nat;
    paymentMethod : PaymentMethod;
    shippingAddress : Text;
  };
};
