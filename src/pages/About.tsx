import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Heart, BookOpen, Shield, ArrowRight, MapPin, Mail } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | The Knockout Academy</title>
        <meta name="description" content="Learn about The Knockout Academy — your destination for digital products that help you build skills and create income online." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-navy opacity-50" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-hero font-display text-4xl md:text-6xl text-secondary-foreground mb-6">
                Master Skills That Actually <span className="text-primary">Make Money</span> Online
              </h1>
              <p className="text-xl text-secondary-foreground/70 font-body leading-relaxed">
                Welcome to <strong>The Knockout Academy</strong> — your destination for digital products that help you build skills and create income online.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28 bg-soft-gray">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                We believe everyone deserves access to high-quality educational resources. Our mission is to deliver digital products that provide real value and actionable knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-8 text-center">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Ebooks & Guides", desc: "Business, marketing, personal development" },
                  { icon: Target, title: "Templates & Frameworks", desc: "Ready-to-use resources" },
                  { icon: Shield, title: "Courses & Training", desc: "Step-by-step learning" },
                  { icon: Heart, title: "Business Bundles", desc: "Complete startup packages" },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-soft-gray">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-8 text-center">Why Choose Us?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">Benefit</th>
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">For You</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Curated Quality", "Only valuable products"],
                      ["Instant Access", "Download immediately"],
                      ["Practical", "Actionable, not theory"],
                      ["Affordable", "Fair pricing"],
                      ["Guaranteed", "30-day money-back"],
                      ["Lifetime", "Buy once, own forever"],
                    ].map(([benefit, forYou], i, arr) => (
                      <tr key={benefit} className={i < arr.length - 1 ? "border-b border-border" : ""}>
                        <td className="p-4 font-medium text-foreground">{benefit}</td>
                        <td className="p-4">{forYou}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-8">Who We Help</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["Aspiring Entrepreneurs", "Side Hustlers", "Career Changers", "Small Business Owners", "Lifelong Learners"].map((who) => (
                  <span key={who} className="bg-primary/10 text-primary font-heading font-semibold px-5 py-2.5 rounded-full text-sm">
                    {who}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 md:py-28 bg-soft-gray">
          <div className="container">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-center text-foreground mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { emoji: "🎯", title: "Value First", desc: "Real, tangible value" },
                { emoji: "📚", title: "Quality", desc: "Fewer excellent > many mediocre" },
                { emoji: "💯", title: "Integrity", desc: "Honest, fair, no catches" },
                { emoji: "🤝", title: "Customer Focus", desc: "Your success = our success" },
              ].map((value) => (
                <div key={value.title} className="text-center p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/30">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl border border-border p-8 shadow-premium">
                <h2 className="text-2xl font-bold text-foreground mb-4">Company Information</h2>
                <p className="text-foreground font-semibold mb-4">TKOA Private Limited</p>
                <p className="text-muted-foreground mb-3">
                  <strong>CIN:</strong> U58199GJ2025PTC169791
                </p>
                <div className="flex items-start gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                  <p>C/o Rathod Jaydipsinh, 53/2 CHACHAK, RAJPUTWADI Rd, Bodeli, Vadodara - 391135, Gujarat, India</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 shrink-0 text-primary" />
                  <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">theknockoutacademy@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-navy opacity-50" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-secondary-foreground/70 font-body italic mb-6">
                Level up your skills. Transform your life.
              </p>
              <Button variant="accent" size="xl" asChild className="group">
                <Link to="/#products">
                  Browse Our Bundles
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
