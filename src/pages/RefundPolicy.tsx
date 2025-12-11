import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, CheckCircle2 } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | The Knockout Academy</title>
        <meta name="description" content="30-day money-back guarantee. No questions asked. Learn about The Knockout Academy's hassle-free refund policy." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-4xl font-extrabold text-foreground mb-4">
                30-Day Money-Back Guarantee
              </h1>
              <p className="text-xl text-muted-foreground">
                No questions asked. Your satisfaction is our priority.
              </p>
            </div>

            {/* Guarantee Box */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-accent" />
                Our Promise to You
              </h2>
              <p className="text-muted-foreground text-lg">
                If you're not completely satisfied with your purchase for any reason, simply contact us within 30 days of your purchase date and we'll issue a full refund. No complicated forms. No hoops to jump through. No questions asked.
              </p>
            </div>

            {/* Policy Details */}
            <div className="prose prose-slate dark:prose-invert">
              <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                  <li>
                    <strong>Send us an email</strong> at{" "}
                    <a href="mailto:support@knockoutacademy.com" className="text-primary hover:underline">
                      support@knockoutacademy.com
                    </a>
                  </li>
                  <li>
                    <strong>Include your order number</strong> (found in your purchase confirmation email)
                  </li>
                  <li>
                    <strong>That's it!</strong> We'll process your refund within 3-5 business days
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Timeline</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Eligibility period:</strong> 30 days from the date of purchase</li>
                  <li><strong>Processing time:</strong> 3-5 business days after your request</li>
                  <li><strong>Bank processing:</strong> Additional 5-10 business days depending on your payment method</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Happens After a Refund</h2>
                <p className="text-muted-foreground">
                  Once your refund is processed, your access to the purchased digital products will be revoked. We trust our customers to honor this policy fairly. Abuse of the refund policy may result in denial of future purchases.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why We Offer This Guarantee</h2>
                <p className="text-muted-foreground">
                  We believe in the quality and value of our products. We want you to make a purchase with complete confidence, knowing that if our resources don't meet your expectations, you have nothing to lose. Our goal is to help you succeed, and that starts with trust.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our refund policy, please don't hesitate to contact us at{" "}
                  <a href="mailto:support@knockoutacademy.com" className="text-primary hover:underline">
                    support@knockoutacademy.com
                  </a>
                  . We're here to help!
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default RefundPolicy;
