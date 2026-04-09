import Common "common";

module {
  public type OrderId = Common.OrderId;
  public type ProductId = Common.ProductId;
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
    customerName : Text;
    customerPhone : Text;
    address : Text;
    city : Text;
    pincode : Text;
    paymentMethod : PaymentMethod;
    items : [OrderItem];
    totalAmount : Nat;
    status : OrderStatus;
    createdAt : Timestamp;
  };

  public type PlaceOrderArgs = {
    customerName : Text;
    customerPhone : Text;
    address : Text;
    city : Text;
    pincode : Text;
    paymentMethod : PaymentMethod;
    items : [OrderItem];
    totalAmount : Nat;
  };
};
