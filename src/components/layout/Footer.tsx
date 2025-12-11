import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-bold text-lg">The Knockout Academy</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 max-w-sm mb-4">
              Where Dreams Meet Discipline. Premium digital education resources for aspiring entrepreneurs and side hustlers.
            </p>
            <p className="text-xs text-secondary-foreground/50">
              Results not guaranteed. Educational products only. Success depends on individual effort and implementation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Home
              </Link>
              <Link to="/#products" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy-policy" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Refund Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © 2025 The Knockout Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-secondary-foreground/50">Secure payments by</span>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <svg className="h-6 w-auto" viewBox="0 0 50 20" fill="currentColor">
                <text x="0" y="15" fontSize="12" fontWeight="bold">Shopify</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
