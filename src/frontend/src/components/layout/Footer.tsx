import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Milk, Phone, Youtube } from "lucide-react";

const SUPPORT_PHONE = "+91-9801234567";
const SUPPORT_EMAIL = "support@yadavdairy.com";

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
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Milk className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Yadav Dairy
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fresh dairy products delivered to your doorstep. Pure, fresh, and
              nutritious.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/cart", label: "Cart" },
                { to: "/wishlist", label: "Wishlist ❤️" },
                { to: "/profile", label: "My Profile" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="hover:text-foreground transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Help
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                to="/contact"
                className="hover:text-foreground transition-colors w-fit"
              >
                Contact Us
              </Link>
              <span className="cursor-default">FAQs</span>
              <span className="cursor-default">Terms of Service</span>
              <span className="cursor-default">Privacy Policy</span>
            </nav>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Customer Support
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${SUPPORT_PHONE.replace(/-/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer-phone"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                {SUPPORT_PHONE}
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                {SUPPORT_EMAIL}
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Mon–Sat, 9am – 7pm IST
              </p>
            </div>
            {/* Live chat stub */}
            <button
              type="button"
              className="flex items-center gap-2 text-xs text-primary border border-primary/30 rounded-full px-3 py-1.5 hover:bg-primary/5 transition-colors"
              data-ocid="live-chat-btn"
              onClick={() => {}}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Chat
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Yadav Dairy. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
