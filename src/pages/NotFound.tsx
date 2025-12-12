import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, Search, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularLinks = [
    { name: "Master Bundle", href: "/master-bundle", icon: Package },
    { name: "Browse Products", href: "/#products", icon: Search },
    { name: "Contact Support", href: "/contact", icon: ArrowRight },
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | The Knockout Academy</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our premium digital education bundles or return to the homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container max-w-2xl text-center">
            {/* 404 Badge */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10 mb-8">
              <span className="text-5xl font-display font-bold text-secondary">404</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            {/* Primary CTA */}
            <Button asChild size="lg" className="mb-12">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Homepage
              </Link>
            </Button>

            {/* Popular Links */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-6">Or explore these popular pages:</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {popularLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="group flex items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    <span className="font-heading font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Message */}
            <p className="mt-12 text-sm text-muted-foreground">
              Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;