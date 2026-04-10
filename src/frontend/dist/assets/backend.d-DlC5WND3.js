var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["shipped"] = "shipped";
  OrderStatus2["cancelled"] = "cancelled";
  OrderStatus2["pending"] = "pending";
  OrderStatus2["delivered"] = "delivered";
  OrderStatus2["confirmed"] = "confirmed";
  OrderStatus2["processing"] = "processing";
  return OrderStatus2;
})(OrderStatus || {});
var PaymentMethod = /* @__PURE__ */ ((PaymentMethod2) => {
  PaymentMethod2["upi"] = "upi";
  PaymentMethod2["cashOnDelivery"] = "cashOnDelivery";
  PaymentMethod2["card"] = "card";
  PaymentMethod2["netBanking"] = "netBanking";
  return PaymentMethod2;
})(PaymentMethod || {});
export {
  OrderStatus as O,
  PaymentMethod as P
};
