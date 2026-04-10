import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useOrders,
  useUpdateUserProfile,
  useUserProfile,
} from "@/hooks/use-backend";
import { formatPrice } from "@/lib/utils";
import type { Order } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  LogOut,
  Mail,
  MapPin,
  Package,
  Pencil,
  Phone,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { OrderStatus } from "../backend.d";
import { useAuth } from "../contexts/AuthContext";

// ─── Status badge config ──────────────────────────────────────────────────────

interface StatusConfig {
  label: string;
  className: string;
}

const STATUS_CONFIG: Record<string, StatusConfig> = {
  [OrderStatus.pending]: { label: "Pending", className: "border" },
  [OrderStatus.confirmed]: { label: "Confirmed", className: "border" },
  [OrderStatus.processing]: { label: "Processing", className: "border" },
  [OrderStatus.shipped]: { label: "Shipped", className: "border" },
  [OrderStatus.delivered]: { label: "Delivered", className: "border" },
  [OrderStatus.cancelled]: { label: "Cancelled", className: "border" },
};

const STATUS_STYLES: Record<string, React.CSSProperties> = {
  [OrderStatus.pending]: {
    background: "color-mix(in oklch, var(--color-accent) 15%, transparent)",
    color: "var(--color-accent)",
    borderColor: "color-mix(in oklch, var(--color-accent) 30%, transparent)",
  },
  [OrderStatus.confirmed]: {
    background: "color-mix(in oklch, var(--color-primary) 15%, transparent)",
    color: "var(--color-primary)",
    borderColor: "color-mix(in oklch, var(--color-primary) 30%, transparent)",
  },
  [OrderStatus.processing]: {
    background: "color-mix(in oklch, var(--color-primary) 20%, transparent)",
    color: "var(--color-primary)",
    borderColor: "color-mix(in oklch, var(--color-primary) 35%, transparent)",
  },
  [OrderStatus.shipped]: {
    background: "color-mix(in oklch, var(--color-secondary) 20%, transparent)",
    color: "var(--color-secondary)",
    borderColor: "color-mix(in oklch, var(--color-secondary) 35%, transparent)",
  },
  [OrderStatus.delivered]: {
    background: "color-mix(in oklch, var(--color-primary) 15%, transparent)",
    color: "var(--color-primary)",
    borderColor: "color-mix(in oklch, var(--color-primary) 30%, transparent)",
  },
  [OrderStatus.cancelled]: {
    background:
      "color-mix(in oklch, var(--color-destructive) 15%, transparent)",
    color: "var(--color-destructive)",
    borderColor:
      "color-mix(in oklch, var(--color-destructive) 30%, transparent)",
  },
};

// ─── Avatar ───────────────────────────────────────────────────────────────────

function AvatarCircle({
  name,
  size = "lg",
}: { name: string; size?: "sm" | "lg" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const colors = [
    "from-orange-400 to-amber-500",
    "from-blue-400 to-indigo-500",
    "from-emerald-400 to-teal-500",
    "from-pink-400 to-rose-500",
    "from-violet-400 to-purple-500",
  ];
  const colorIndex = (name.charCodeAt(0) || 0) % colors.length;

  const sizeClasses =
    size === "lg"
      ? "w-20 h-20 text-2xl font-bold"
      : "w-10 h-10 text-sm font-semibold";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white flex-shrink-0 shadow-md`}
      aria-label={`Avatar for ${name}`}
    >
      {initials || <User className="w-1/2 h-1/2" />}
    </div>
  );
}

// ─── Order card ───────────────────────────────────────────────────────────────

function OrderCard({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(false);
  const config = STATUS_CONFIG[order.status] ?? {
    label: order.status,
    className: "border",
  };
  const statusStyle = STATUS_STYLES[order.status] ?? {
    background: "color-mix(in oklch, var(--color-muted) 30%, transparent)",
    color: "var(--color-muted-foreground)",
    borderColor: "var(--color-border)",
  };

  const date = new Date(Number(order.createdAt) / 1_000_000).toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "short", year: "numeric" },
  );

  return (
    <Card
      className="overflow-hidden transition-all duration-200 hover:shadow-md"
      data-ocid="order-history-item"
    >
      <button
        type="button"
        className="w-full text-left p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-xl"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-label={`Order #${order.id.toString()} details`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground text-sm">
                Order #{order.id.toString()}
              </span>
              <span
                className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${config.className}`}
                style={statusStyle}
              >
                {config.label}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">
                <CalendarDays className="w-3 h-3" />
                {date}
              </span>
              <span>
                {order.items.length} item{order.items.length !== 1 ? "s" : ""}
              </span>
            </div>
            <p className="text-sm font-semibold text-accent">
              {formatPrice(order.totalAmount)}
            </p>
          </div>
          <div className="flex-shrink-0 text-muted-foreground mt-1">
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border bg-muted/30 px-4 py-3 space-y-3 animate-in slide-in-from-top-1 duration-200">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Items
            </p>
            {order.items.map((item) => (
              <div
                key={`${item.productId.toString()}-${item.productName}`}
                className="flex items-center justify-between text-sm"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-foreground truncate block">
                    {item.productName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Qty: {item.quantity.toString()}
                  </span>
                </div>
                <span className="text-foreground font-medium ml-3 flex-shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="col-span-2">
              <p className="text-muted-foreground">Shipping Address</p>
              <p className="text-foreground font-medium">
                {order.shippingAddress}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Payment</p>
              <p className="text-foreground font-medium capitalize">
                {order.paymentMethod === "cashOnDelivery"
                  ? "COD"
                  : order.paymentMethod}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Total</p>
              <p className="text-foreground font-semibold text-accent">
                {formatPrice(order.totalAmount)}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

// ─── Address fields ───────────────────────────────────────────────────────────

interface AddressFields {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

interface ProfileForm {
  displayName: string;
  email: string;
  phone: string;
  address: AddressFields;
}

function parseAddress(raw: string): AddressFields {
  const parts = raw.split(",").map((s) => s.trim());
  return {
    street: parts[0] ?? "",
    city: parts[1] ?? "",
    state: parts[2] ?? "",
    pincode: parts[3] ?? "",
  };
}

function serializeAddress(a: AddressFields): string {
  return [a.street, a.city, a.state, a.pincode].filter(Boolean).join(", ");
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const { principal, clear } = useAuth();
  const navigate = useNavigate();
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const { data: backendProfile } = useUserProfile();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<ProfileForm>({
    displayName: backendProfile?.displayName ?? "",
    email: backendProfile?.email ?? "",
    phone: backendProfile?.phone ?? "",
    address: parseAddress(backendProfile?.address ?? ""),
  });

  const setField = <K extends keyof Omit<ProfileForm, "address">>(
    key: K,
    value: string,
  ) => setForm((f) => ({ ...f, [key]: value }));

  const setAddr = (key: keyof AddressFields, value: string) =>
    setForm((f) => ({ ...f, address: { ...f.address, [key]: value } }));

  const updateProfileMutation = useUpdateUserProfile();

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfileMutation.mutateAsync({
        displayName: form.displayName,
        email: form.email,
        phone: form.phone,
        address: serializeAddress(form.address),
      });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch {
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setForm({
      displayName: backendProfile?.displayName ?? "",
      email: backendProfile?.email ?? "",
      phone: backendProfile?.phone ?? "",
      address: parseAddress(backendProfile?.address ?? ""),
    });
    setEditing(false);
  };

  const handleLogout = () => {
    clear();
    toast.success("Logged out successfully");
    void navigate({ to: "/" });
  };

  const displayName =
    backendProfile?.displayName ||
    `${principal?.slice(0, 8) ?? ""}…` ||
    "Dairy Lover";
  const memberSince = "April 2026";

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 animate-in fade-in duration-300">
      {/* ── Profile header card ── */}
      <Card className="overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/10" />
        <CardContent className="pt-0 pb-5 px-5">
          <div className="flex items-end justify-between -mt-10 mb-4">
            <AvatarCircle name={displayName} size="lg" />
            <div className="flex items-center gap-2 mb-1">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5"
                    data-ocid="profile-logout-btn"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Sign out of Yadav Dairy?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You'll be logged out of your account. Your cart and
                      wishlist will be cleared.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleLogout}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      data-ocid="profile-logout-confirm-btn"
                    >
                      Yes, Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground leading-tight">
              {displayName}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
              {backendProfile?.email && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Mail className="w-3 h-3" />
                  {backendProfile.email}
                </span>
              )}
              {backendProfile?.phone && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  {backendProfile.phone}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <CalendarDays className="w-3 h-3" />
                Member since {memberSince}
              </span>
            </div>
            {principal && (
              <p className="text-xs text-muted-foreground/60 mt-1.5 truncate max-w-xs font-mono">
                {principal.slice(0, 30)}…
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ── Tabs ── */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger
            value="profile"
            className="gap-1.5"
            data-ocid="tab-my-profile"
          >
            <User className="w-4 h-4" />
            My Profile
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="gap-1.5"
            data-ocid="tab-my-orders"
          >
            <Package className="w-4 h-4" />
            My Orders
            {orders && orders.length > 0 && (
              <Badge
                variant="secondary"
                className="ml-1 text-xs h-4 px-1.5 py-0"
              >
                {orders.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {/* ── My Profile Tab ── */}
        <TabsContent value="profile" className="space-y-0 mt-0">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Personal Information
                </CardTitle>
                {!editing && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => setEditing(true)}
                    data-ocid="profile-edit-toggle"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {editing ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        value={form.displayName}
                        onChange={(e) =>
                          setField("displayName", e.target.value)
                        }
                        placeholder="Your name"
                        data-ocid="profile-name-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        placeholder="you@example.com"
                        data-ocid="profile-email-input"
                      />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        placeholder="+91 XXXXXXXXXX"
                        data-ocid="profile-phone-input"
                      />
                    </div>
                  </div>

                  <Separator />

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Delivery Address
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="street">Street / Flat / Area</Label>
                      <Input
                        id="street"
                        value={form.address.street}
                        onChange={(e) => setAddr("street", e.target.value)}
                        placeholder="123 Main St, Sector 4"
                        data-ocid="profile-street-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={form.address.city}
                        onChange={(e) => setAddr("city", e.target.value)}
                        placeholder="Delhi"
                        data-ocid="profile-city-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={form.address.state}
                        onChange={(e) => setAddr("state", e.target.value)}
                        placeholder="Uttar Pradesh"
                        data-ocid="profile-state-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={form.address.pincode}
                        onChange={(e) => setAddr("pincode", e.target.value)}
                        placeholder="110001"
                        maxLength={6}
                        data-ocid="profile-pincode-input"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex-1"
                      data-ocid="profile-save-btn"
                    >
                      {saving ? "Saving…" : "Save Changes"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      data-ocid="profile-cancel-btn"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  {[
                    {
                      icon: <User className="w-3.5 h-3.5" />,
                      label: "Name",
                      value: backendProfile?.displayName,
                    },
                    {
                      icon: <Mail className="w-3.5 h-3.5" />,
                      label: "Email",
                      value: backendProfile?.email,
                    },
                    {
                      icon: <Phone className="w-3.5 h-3.5" />,
                      label: "Phone",
                      value: backendProfile?.phone,
                    },
                    {
                      icon: <MapPin className="w-3.5 h-3.5" />,
                      label: "Address",
                      value: backendProfile?.address,
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-muted-foreground flex-shrink-0">
                        {icon}
                      </span>
                      <span className="w-16 text-muted-foreground flex-shrink-0 text-xs pt-0.5">
                        {label}
                      </span>
                      <span className="text-foreground break-words min-w-0">
                        {value || (
                          <span className="text-muted-foreground italic">
                            Not set
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── My Orders Tab ── */}
        <TabsContent value="orders" className="space-y-4 mt-0">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Order History
            </h2>
            {orders && orders.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                {orders.length} order{orders.length !== 1 ? "s" : ""}
              </Badge>
            )}
          </div>

          {ordersLoading ? (
            <div className="space-y-3" data-ocid="orders-skeleton">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-48" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </Card>
              ))}
            </div>
          ) : orders && orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order: Order) => (
                <OrderCard key={order.id.toString()} order={order} />
              ))}
            </div>
          ) : (
            <Card
              className="p-10 text-center border-dashed"
              data-ocid="no-orders-state"
            >
              <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
              <p className="font-semibold text-foreground mb-1">
                No orders yet
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Your order history will appear here once you place your first
                order.
              </p>
              <Button
                variant="outline"
                onClick={() => void navigate({ to: "/products" })}
                data-ocid="start-shopping-btn"
              >
                Start Shopping
              </Button>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <p className="text-center text-xs text-muted-foreground pb-4">
        © {new Date().getFullYear()}.{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors underline underline-offset-2"
        >
          Built with love using caffeine.ai
        </a>
      </p>
    </div>
  );
}
