import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, HelpCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent!", {
      description: "We'll get back to you within 24-48 hours."
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
                Get in Touch
              </h1>
              <p className="text-lg text-secondary-foreground/70 font-body">
                Have a question? We're here to help. Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-card rounded-xl border border-border p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Email Support</h3>
                        <p className="text-sm text-primary font-medium">support@theknockoutacademy.com</p>
                        <p className="text-xs text-muted-foreground mt-1">Response within 24-48 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl border border-border p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10">
                        <HelpCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Check Our FAQ</h3>
                        <p className="text-sm text-muted-foreground mb-2">Find instant answers to common questions.</p>
                        <Link to="/#faq" className="text-sm font-heading font-medium text-primary hover:underline">
                          View FAQ →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl border border-border p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-emerald/10">
                        <MessageSquare className="w-6 h-6 text-emerald" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Refund Requests</h3>
                        <p className="text-sm text-muted-foreground mb-2">30-day money-back guarantee, no questions asked.</p>
                        <Link to="/refund-policy" className="text-sm font-heading font-medium text-primary hover:underline">
                          Refund Policy →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-premium space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-heading font-medium">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-heading font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-heading font-medium">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-heading font-medium">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button type="submit" size="xl" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;