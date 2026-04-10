import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Banknote,
  Building2,
  ChevronRight,
  CreditCard,
  Loader2,
  Lock,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PaymentMethod } from "../backend.d";
import ProductPackageSVG from "../components/products/ProductPackageSVG";
import { useAuth } from "../contexts/AuthContext";
import { usePlaceOrder } from "../hooks/use-backend";
import { useCart } from "../hooks/use-cart";
import { formatPrice } from "../lib/utils";

interface AddressFormData {
  customerName: string;
  customerPhone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

interface CardDetails {
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardHolder: string;
}

interface UpiDetails {
  vpa: string;
}

const paymentOptions: {
  id: PaymentMethod;
  label: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    id: PaymentMethod.cashOnDelivery,
    label: "Cash on Delivery",
    desc: "Pay when order arrives",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    id: PaymentMethod.upi,
    label: "UPI",
    desc: "GPay, PhonePe, Paytm",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: PaymentMethod.card,
    label: "Credit / Debit Card",
    desc: "Visa, Mastercard, RuPay",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: PaymentMethod.netBanking,
    label: "Net Banking",
    desc: "All major banks",
    icon: <Building2 className="w-5 h-5" />,
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  const { isAuthenticated, login } = useAuth();
  const { mutateAsync: placeOrder, isPending } = usePlaceOrder();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(
    PaymentMethod.cashOnDelivery,
  );
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardHolder: "",
  });
  const [upiDetails, setUpiDetails] = useState<UpiDetails>({ vpa: "" });

  const deliveryFee =
    items.length > 0 && cartTotal < BigInt(500) ? BigInt(40) : BigInt(0);
  const grandTotal = cartTotal + deliveryFee;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>();

  // Protected route guard
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-sm"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Lock className="w-9 h-9 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Login to Continue
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Please log in to proceed to checkout and place your order securely.
          </p>
          <Button
            onClick={login}
            className="btn-accent h-12 px-8 text-base gap-2"
            data-ocid="checkout-login-btn"
          >
            <User className="w-4 h-4" />
            Login with Internet Identity
          </Button>
          <Link to="/cart" className="block mt-3">
            <Button variant="ghost" className="text-sm text-muted-foreground">
              ← Back to Cart
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Link to="/products">
          <Button className="btn-accent">Shop Now</Button>
        </Link>
      </div>
    );
  }

  const onSubmit = async (data: AddressFormData) => {
    try {
      const orderItems = items.map((item) => ({
        productId: item.productId,
        productName: item.name,
        quantity: BigInt(item.quantity),
        price: item.price,
      }));

      const shippingAddress = `${data.customerName}, ${data.customerPhone} | ${data.addressLine1}${data.addressLine2 ? `, ${data.addressLine2}` : ""}, ${data.city}, ${data.state} - ${data.pincode}`;

      const order = await placeOrder({
        paymentMethod: selectedPayment,
        shippingAddress,
        items: orderItems,
        totalAmount: grandTotal,
        deliveryFee: deliveryFee,
      });

      clearCart();
      toast.success("Order placed successfully! 🎉");
      navigate({
        to: "/order-confirmation/$id",
        params: { id: order.id.toString() },
      });
    } catch (err) {
      console.error("Failed to place order:", err);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background" data-ocid="checkout-page">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-5"
        >
          <Link to="/cart">
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </button>
          </Link>
        </motion.div>

        <h1 className="font-display text-2xl font-bold text-foreground mb-6">
          Checkout
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Left: Address + Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-card rounded-2xl border border-border p-5 shadow-sm"
                data-ocid="checkout-address-section"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-base">
                    Delivery Address
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="customerName"
                        className="text-sm font-medium flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5" /> Full Name
                      </Label>
                      <Input
                        id="customerName"
                        placeholder="Ravi Kumar"
                        className="h-11"
                        data-ocid="checkout-name-input"
                        {...register("customerName", {
                          required: "Name is required",
                          minLength: { value: 2, message: "Name too short" },
                        })}
                      />
                      {errors.customerName && (
                        <p className="text-destructive text-xs">
                          {errors.customerName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="customerPhone"
                        className="text-sm font-medium flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> Phone Number
                      </Label>
                      <Input
                        id="customerPhone"
                        placeholder="9876543210"
                        type="tel"
                        className="h-11"
                        data-ocid="checkout-phone-input"
                        {...register("customerPhone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter valid 10-digit phone",
                          },
                        })}
                      />
                      {errors.customerPhone && (
                        <p className="text-destructive text-xs">
                          {errors.customerPhone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="addressLine1"
                      className="text-sm font-medium"
                    >
                      Address Line 1
                    </Label>
                    <Input
                      id="addressLine1"
                      placeholder="House No., Street, Locality"
                      className="h-11"
                      data-ocid="checkout-address-input"
                      {...register("addressLine1", {
                        required: "Address is required",
                        minLength: {
                          value: 10,
                          message: "Please enter complete address",
                        },
                      })}
                    />
                    {errors.addressLine1 && (
                      <p className="text-destructive text-xs">
                        {errors.addressLine1.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="addressLine2"
                      className="text-sm font-medium"
                    >
                      Address Line 2{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="addressLine2"
                      placeholder="Apartment, Floor, Landmark"
                      className="h-11"
                      data-ocid="checkout-address2-input"
                      {...register("addressLine2")}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="Delhi"
                        className="h-11"
                        data-ocid="checkout-city-input"
                        {...register("city", {
                          required: "City is required",
                        })}
                      />
                      {errors.city && (
                        <p className="text-destructive text-xs">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State
                      </Label>
                      <Input
                        id="state"
                        placeholder="Delhi"
                        className="h-11"
                        data-ocid="checkout-state-input"
                        {...register("state", {
                          required: "State is required",
                        })}
                      />
                      {errors.state && (
                        <p className="text-destructive text-xs">
                          {errors.state.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="pincode" className="text-sm font-medium">
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        placeholder="110001"
                        className="h-11"
                        data-ocid="checkout-pincode-input"
                        {...register("pincode", {
                          required: "Pincode is required",
                          pattern: {
                            value: /^\d{6}$/,
                            message: "Enter valid 6-digit pincode",
                          },
                        })}
                      />
                      {errors.pincode && (
                        <p className="text-destructive text-xs">
                          {errors.pincode.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-5 shadow-sm"
                data-ocid="checkout-payment-section"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-accent" />
                  </div>
                  <h2 className="font-display font-bold text-base">
                    Payment Method
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {paymentOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedPayment(option.id)}
                      data-ocid={`payment-option-${option.id}`}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-smooth text-left ${
                        selectedPayment === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/40"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${selectedPayment === option.id ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                      >
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{option.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {option.desc}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedPayment === option.id
                            ? "border-primary"
                            : "border-border"
                        }`}
                      >
                        {selectedPayment === option.id && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* UPI additional fields */}
                {selectedPayment === PaymentMethod.upi && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 space-y-2"
                    data-ocid="payment-upi-fields"
                  >
                    <Label htmlFor="upi-vpa" className="text-sm font-medium">
                      UPI ID / VPA
                    </Label>
                    <Input
                      id="upi-vpa"
                      placeholder="yourname@upi"
                      className="h-11"
                      value={upiDetails.vpa}
                      onChange={(e) => setUpiDetails({ vpa: e.target.value })}
                      data-ocid="checkout-upi-vpa-input"
                    />
                    <p className="text-xs text-muted-foreground">
                      E.g. 9876543210@paytm or name@okicici
                    </p>
                  </motion.div>
                )}

                {/* Card additional fields */}
                {selectedPayment === PaymentMethod.card && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 space-y-3"
                    data-ocid="payment-card-fields"
                  >
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        Cardholder Name
                      </Label>
                      <Input
                        placeholder="Name on card"
                        className="h-11"
                        value={cardDetails.cardHolder}
                        onChange={(e) =>
                          setCardDetails((p) => ({
                            ...p,
                            cardHolder: e.target.value,
                          }))
                        }
                        data-ocid="checkout-card-holder-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">Card Number</Label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="h-11 font-mono"
                        value={cardDetails.cardNumber}
                        onChange={(e) => {
                          const v = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)
                            .replace(/(.{4})/g, "$1 ")
                            .trim();
                          setCardDetails((p) => ({ ...p, cardNumber: v }));
                        }}
                        data-ocid="checkout-card-number-input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium">
                          Expiry (MM/YY)
                        </Label>
                        <Input
                          placeholder="08/27"
                          maxLength={5}
                          className="h-11"
                          value={cardDetails.expiry}
                          onChange={(e) => {
                            const v = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 4)
                              .replace(/^(\d{2})(\d)/, "$1/$2");
                            setCardDetails((p) => ({ ...p, expiry: v }));
                          }}
                          data-ocid="checkout-card-expiry-input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium">CVV</Label>
                        <Input
                          placeholder="•••"
                          type="password"
                          maxLength={4}
                          className="h-11"
                          value={cardDetails.cvv}
                          onChange={(e) =>
                            setCardDetails((p) => ({
                              ...p,
                              cvv: e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 4),
                            }))
                          }
                          data-ocid="checkout-card-cvv-input"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2">
                      <Lock className="w-3.5 h-3.5" />
                      Mock payment — no real charges will be made
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  All payments are secure and encrypted
                </div>
              </motion.div>
            </div>

            {/* Right: Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 lg:mt-0"
            >
              <div
                className="bg-card rounded-2xl border border-border p-5 shadow-sm sticky top-24"
                data-ocid="checkout-order-summary"
              >
                <h2 className="font-display font-bold text-base mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.productId.toString()}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <ProductPackageSVG
                          packagingKey={item.imageUrl}
                          productName={item.name}
                          size="sm"
                          className="w-9 h-9"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ×{item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-accent">
                        {formatPrice(item.price * BigInt(item.quantity))}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span
                      className={
                        deliveryFee === BigInt(0) ? "text-primary" : ""
                      }
                    >
                      {deliveryFee === BigInt(0)
                        ? "FREE"
                        : formatPrice(deliveryFee)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span className="text-accent">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full mt-5 h-12 text-base font-semibold btn-accent rounded-xl gap-2"
                  data-ocid="checkout-place-order-btn"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Placing Order...
                    </>
                  ) : (
                    <>
                      Place Order
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Secure &amp; encrypted checkout
                </p>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
