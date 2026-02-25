import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, HelpCircle, MessageSquare, Briefcase, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | The Knockout Academy</title>
        <meta name="description" content="Get in touch with The Knockout Academy. We're here to help with any questions about our digital education bundles." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-hero font-display text-4xl md:text-5xl text-secondary-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-secondary-foreground/70 font-body">
                We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Get in Touch */}
              <div className="bg-card rounded-xl border border-border p-8 shadow-premium mb-10 text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">📧 Email</h3>
                <a href="mailto:theknockoutacademy@gmail.com" className="text-primary font-semibold text-lg hover:underline">
                  theknockoutacademy@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">We typically respond within 24–48 hours.</p>
              </div>

              {/* How Can We Help */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: HelpCircle, label: "Pre-Purchase Questions", desc: "Not sure which product is right?" },
                    { icon: MessageSquare, label: "Technical Support", desc: "Trouble accessing your downloads?" },
                    { icon: Mail, label: "Refund Requests", desc: "30-day money-back guarantee" },
                    { icon: Briefcase, label: "Business Inquiries", desc: "Partnerships & collaborations" },
                    { icon: Heart, label: "Feedback", desc: "We value your input!" },
                  ].map((item) => (
                    <div key={item.label} className="bg-card rounded-xl border border-border p-5 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground text-sm">{item.label}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">Response Time</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground border-b border-border">Day</th>
                        <th className="text-left p-3 font-semibold text-foreground border-b border-border">Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 font-medium">Monday – Friday</td>
                        <td className="p-3">Within 24 hours</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Saturday – Sunday</td>
                        <td className="p-3">Within 48 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-card rounded-xl border border-border p-8 shadow-premium mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">Business Information</h2>
                <p className="text-foreground font-semibold mb-3">TKOA Private Limited</p>
                <div className="flex items-start gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Registered Office:</p>
                    <p>C/o Rathod Jaydipsinh,</p>
                    <p>53/2 CHACHAK, RAJPUTWADI Rd,</p>
                    <p>Bodeli, Vadodara - 391135,</p>
                    <p>Gujarat, India</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3">
                  <strong>CIN:</strong> U58199GJ2025PTC169791
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic text-center">
                Thank you for choosing The Knockout Academy!
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
