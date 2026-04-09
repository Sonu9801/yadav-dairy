import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronRight,
  Layers,
  LayoutDashboard,
  Lock,
  LogOut,
  Package,
  ShoppingBag,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Products", path: "/admin/products", icon: Package },
  { label: "Categories", path: "/admin/categories", icon: Layers },
  { label: "Orders", path: "/admin/orders", icon: ShoppingBag },
];

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AdminLayout({
  children,
  title,
  subtitle,
}: AdminLayoutProps) {
  const { identity, login, clear, isInitializing, isLoggingIn } =
    useInternetIdentity();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const principalStr = identity ? identity.getPrincipal().toText() : "";
  const shortPrincipal =
    principalStr.length > 16
      ? `${principalStr.slice(0, 8)}...${principalStr.slice(-4)}`
      : principalStr;

  if (isInitializing) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground text-sm">Initializing...</p>
        </div>
      </div>
    );
  }

  if (!identity) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 flex flex-col items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-display font-bold text-foreground">
              Admin Access
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Sign in with Internet Identity to access the Yadav Dairy admin
              panel
            </p>
          </div>
          <Button
            data-ocid="admin-login-btn"
            onClick={login}
            disabled={isLoggingIn}
            className="w-full"
            size="lg"
          >
            {isLoggingIn ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Sign in with Internet Identity
              </span>
            )}
          </Button>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background">
      {/* Admin top bar */}
      <div className="bg-card border-b border-border px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto min-w-0">
          <Link
            to="/admin"
            className="font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            Admin
          </Link>
          {currentPath !== "/admin" && (
            <>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <span className="text-foreground capitalize whitespace-nowrap">
                {currentPath.split("/").pop()}
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-full px-3 py-1.5 border border-border">
            <User className="w-3 h-3" />
            <span className="font-mono">{shortPrincipal}</span>
          </div>
          <Button
            data-ocid="admin-logout-btn"
            variant="ghost"
            size="sm"
            onClick={clear}
            className="gap-1.5 text-muted-foreground hover:text-destructive"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sign out</span>
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 shrink-0 flex-col bg-card border-r border-border min-h-[calc(100vh-112px)] p-4 gap-1">
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => {
            const isActive =
              path === "/admin"
                ? currentPath === "/admin"
                : currentPath.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                data-ocid={`admin-nav-${label.toLowerCase()}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </aside>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-16 left-0 right-0 z-30 bg-card border-t border-border flex justify-around px-2 py-2">
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => {
            const isActive =
              path === "/admin"
                ? currentPath === "/admin"
                : currentPath.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                data-ocid={`admin-mobile-nav-${label.toLowerCase()}`}
                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-xs transition-smooth ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 md:p-6 pb-24 md:pb-6">
          <div className="mb-6">
            <h1 className="text-2xl font-display font-bold text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
