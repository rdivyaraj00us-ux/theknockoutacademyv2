import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo + Customer Badge */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary transition-transform group-hover:scale-105">
              <span className="text-xl font-display font-bold text-secondary-foreground">K</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-foreground block leading-tight">
                The Knockout Academy
              </span>
              <span className="text-xs text-muted-foreground font-body">
                Where Dreams Meet Discipline
              </span>
            </div>
          </Link>

          {/* Customer Counter Badge */}
          <div className="hidden lg:flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 animate-fade-in">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-heading font-medium text-accent">
              Trusted by 40,000+ Learners
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link 
            to="/" 
            className={`text-sm font-heading font-medium transition-colors hover:text-foreground ${isActive("/") && location.pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link 
            to="/#products" 
            className="text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-heading font-medium transition-colors hover:text-foreground ${isActive("/about") ? "text-foreground" : "text-muted-foreground"}`}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-heading font-medium transition-colors hover:text-foreground ${isActive("/contact") ? "text-foreground" : "text-muted-foreground"}`}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>

        {/* Trust Badges + Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-xs text-muted-foreground xl:flex">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-accent" />
              Secure
            </span>
            <span className="text-border">|</span>
            <span>30-Day Guarantee</span>
          </div>

          <CartDrawer />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            <Link 
              to="/" 
              className={`px-4 py-3 text-base font-heading font-medium rounded-lg transition-colors ${location.pathname === "/" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link 
              to="/#products" 
              className="px-4 py-3 text-base font-heading font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-3 text-base font-heading font-medium rounded-lg transition-colors ${isActive("/about") ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-3 text-base font-heading font-medium rounded-lg transition-colors ${isActive("/contact") ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
