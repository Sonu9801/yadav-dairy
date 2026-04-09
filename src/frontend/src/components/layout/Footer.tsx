import { Link } from "@tanstack/react-router";
import { Milk } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "yadavdairy",
  )}`;

  return (
    <footer
      className="bg-card border-t border-border mt-auto"
      data-ocid="main-footer"
    >
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
              <Milk className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">
              Yadav Dairy
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="hover:text-foreground transition-colors"
            >
              Cart
            </Link>
          </nav>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          © {year}. Built with love using{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
