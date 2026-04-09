import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const OrderConfirmationPage = lazy(() => import("./pages/OrderConfirmation"));
const AdminPage = lazy(() => import("./pages/Admin"));
const AdminProductsPage = lazy(() => import("./pages/AdminProducts"));
const AdminCategoriesPage = lazy(() => import("./pages/AdminCategories"));
const AdminOrdersPage = lazy(() => import("./pages/AdminOrders"));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="space-y-4 w-full max-w-2xl px-4">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

const RootLayout = () => (
  <Layout>
    <Suspense fallback={<PageFallback />}>
      <Outlet />
    </Suspense>
  </Layout>
);

const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
  validateSearch: (search: Record<string, unknown>): { category?: string } => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: ProductDetailPage,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation/$id",
  component: OrderConfirmationPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const adminProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/products",
  component: AdminProductsPage,
});

const adminCategoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/categories",
  component: AdminCategoriesPage,
});

const adminOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/orders",
  component: AdminOrdersPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  productDetailRoute,
  cartRoute,
  checkoutRoute,
  orderConfirmationRoute,
  adminRoute,
  adminProductsRoute,
  adminCategoriesRoute,
  adminOrdersRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
