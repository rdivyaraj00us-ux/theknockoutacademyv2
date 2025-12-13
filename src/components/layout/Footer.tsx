import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-secondary-foreground">
      {/* Social Proof Line */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container py-6 text-center">
          <p className="flex items-center justify-center gap-2 text-secondary-foreground/80 font-heading">
            <Users className="h-5 w-5 text-accent" />
            <span>Join <strong className="text-accent">40,000+</strong> learners building real skills for real opportunities</span>
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-display font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-heading font-bold text-lg">The Knockout Academy</span>
            </div>
            <p className="text-sm text-secondary-foreground/60 mb-6 font-body leading-relaxed">
              Where Dreams Meet Discipline. Premium digital education resources for aspiring entrepreneurs and side hustlers.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-secondary-foreground/50">We accept:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Visa */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center">
                <svg className="h-4 w-auto" viewBox="0 0 38 24" fill="currentColor">
                  <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM14 18l-4-10h3l2.5 7 1-7h2.5l-3 10h-2ZM22 18h-3V8h3v10Z"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center">
                <svg className="h-4 w-auto" viewBox="0 0 38 24" fill="currentColor">
                  <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM19 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Z"/>
                </svg>
              </div>
              {/* Amex */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center">
                <svg className="h-4 w-auto" viewBox="0 0 38 24" fill="currentColor">
                  <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM15 18H9l3-12h6l-3 12Z"/>
                </svg>
              </div>
              {/* PayPal */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center text-xs font-heading font-bold text-secondary-foreground/60">
                PP
              </div>
              {/* Apple Pay */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center text-xs font-heading font-bold text-secondary-foreground/60">
                AP
              </div>
              {/* Google Pay */}
              <div className="w-10 h-6 bg-secondary-foreground/10 rounded flex items-center justify-center text-xs font-heading font-bold text-secondary-foreground/60">
                GP
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary-foreground">Products</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/master-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Master Bundle
              </Link>
              <Link to="/product/ai-mastery-essentials-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                AI Mastery
              </Link>
              <Link to="/product/e-commerce-dropshipping-foundations-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                E-Commerce
              </Link>
              <Link to="/product/content-creator-accelerator-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Content Creator
              </Link>
              <Link to="/product/digital-marketing-sales-mastery-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Digital Marketing
              </Link>
              <Link to="/product/productivity-personal-development-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Productivity
              </Link>
              <Link to="/product/finance-investing-fundamentals-bundle" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Finance
              </Link>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary-foreground">Support</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/contact" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Contact Us
              </Link>
              <Link to="/#faq" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                FAQ
              </Link>
              <Link to="/refund-policy" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Refund Policy
              </Link>
            </nav>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary-foreground">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy-policy" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Terms of Service
              </Link>
              <Link to="/earnings-disclaimer" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
                Earnings Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/40 font-body">
            © 2025 The Knockout Academy. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40 font-body text-center sm:text-right">
            Results not guaranteed. Educational products only.
          </p>
        </div>
      </div>
    </footer>
  );
};
