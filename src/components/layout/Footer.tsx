import { Link } from "react-router-dom";
import { Users, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-secondary-foreground">
      {/* Social Proof Line */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="flex items-center gap-2 text-secondary-foreground/80 font-heading text-center">
              <Users className="h-5 w-5 text-accent" />
              <span>Join <strong className="text-accent">40,000+</strong> learners building real skills</span>
            </p>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
              <span className="ml-2 text-secondary-foreground/80 font-body">4.9/5 rating</span>
            </div>
          </div>
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
              <span className="text-xs text-secondary-foreground/50">Secure payments:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-body border border-secondary-foreground/20 px-2 py-1 rounded text-secondary-foreground/60">Visa</span>
              <span className="text-xs font-body border border-secondary-foreground/20 px-2 py-1 rounded text-secondary-foreground/60">Mastercard</span>
              <span className="text-xs font-body border border-secondary-foreground/20 px-2 py-1 rounded text-secondary-foreground/60">Amex</span>
              <span className="text-xs font-body border border-secondary-foreground/20 px-2 py-1 rounded text-secondary-foreground/60">PayPal</span>
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
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-secondary-foreground/40 font-body">
            © 2025 TKOA Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40 font-body">
            CIN: U58199GJ2025PTC169791
          </p>
          <p className="text-xs text-secondary-foreground/40 font-body">
            Contact: <a href="mailto:theknockoutacademy@gmail.com" className="hover:text-secondary-foreground transition-colors underline">theknockoutacademy@gmail.com</a>
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-secondary-foreground/40 font-body">
            <Link to="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-secondary-foreground transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/refund-policy" className="hover:text-secondary-foreground transition-colors">Refund Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</Link>
          </nav>
          <p className="text-xs text-secondary-foreground/50 font-body">
            Secure Payments by Shopify
          </p>
          <p className="text-xs text-secondary-foreground/40 font-body">
            Results not guaranteed. Educational products only.
          </p>
        </div>
      </div>
    </footer>
  );
};
