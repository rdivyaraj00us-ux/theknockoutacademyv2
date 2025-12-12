import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            to="/" 
            className="text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            className="text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Trust Badges + Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-xs text-muted-foreground lg:flex">
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
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-1 py-4">
            <Link 
              to="/" 
              className="px-4 py-3 text-base font-heading font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
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
              className="px-4 py-3 text-base font-heading font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-3 text-base font-heading font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};