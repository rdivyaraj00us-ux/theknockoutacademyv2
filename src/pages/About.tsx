import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Heart, BookOpen, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Honesty First",
    description: "No hype, no false promises. We tell you exactly what you're getting and what results depend on your effort."
  },
  {
    icon: BookOpen,
    title: "Practical Education",
    description: "Every guide, template, and resource is designed to be implemented immediately. Theory means nothing without action."
  },
  {
    icon: Shield,
    title: "No False Promises",
    description: "We don't guarantee overnight success. We provide the tools and knowledge — your dedication determines the outcome."
  },
  {
    icon: Target,
    title: "Beginner-Focused",
    description: "Complex topics broken down into digestible steps. Everyone starts somewhere, and we make sure you can start here."
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | The Knockout Academy</title>
        <meta name="description" content="Learn about The Knockout Academy's mission to help people build real skills for real opportunities through practical, honest education." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
                Where Dreams Meet <span className="text-primary">Discipline</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80">
                We're not here to sell you dreams. We're here to give you the tools, knowledge, and practical resources to build real skills that create real opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Knockout Academy was born from frustration. Frustration with overpriced courses that promise the world and deliver nothing. Frustration with "gurus" selling get-rich-quick schemes. Frustration with scattered information that leaves beginners more confused than when they started.
                </p>
                <p>
                  We saw people genuinely wanting to learn new skills — AI, e-commerce, content creation, digital marketing — but getting lost in a sea of hype and empty promises. So we decided to do something different.
                </p>
                <p>
                  We created organized, practical, beginner-friendly bundles packed with actionable guides and real templates. No fluff. No theory without application. Just clear, step-by-step resources you can use today.
                </p>
                <p>
                  Our flagship Master Bundle brings together everything — 40+ eBooks, guides, and templates across 6 skill areas, plus 8,000+ AI automation workflows. It's the kind of resource we wished existed when we were starting out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                "Helping people build real skills for real opportunities."
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe everyone deserves access to quality education without the premium price tag or the manipulative marketing tactics. That's why we price our bundles fairly and never promise overnight success.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Stand For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-secondary-foreground/70">
                <strong>Important:</strong> The Knockout Academy provides educational resources only. Results are not guaranteed and depend entirely on individual effort, implementation, and market conditions. We do not make any income claims or promises of specific outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
