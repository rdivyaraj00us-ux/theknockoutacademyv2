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
              <p className="text-muted-foreground mt-4"><strong>Last Updated: January 2025</strong></p>
            </div>

            {/* Guarantee Box */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-accent" />
                Our Promise to You
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                We stand behind the quality of The Knockout Academy products. If you're not completely satisfied with your purchase for any reason, simply contact us within 30 days and we'll issue a full refund.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                No complicated forms. No hoops to jump through. No questions asked.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe in the quality and value of our products. We want you to make a purchase with complete confidence, knowing that if our resources don't meet your expectations, you have nothing to lose. Our goal is to help you succeed, and that starts with trust.
              </p>
            </div>

            {/* Policy Details */}
            <div className="prose prose-slate dark:prose-invert">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                  <li>
                    <strong>Send us an email</strong> at{" "}
                    <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">
                      theknockoutacademy@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Include your order number</strong> (found in your purchase confirmation email)
                  </li>
                  <li>
                    <strong>That's it!</strong> We'll process your refund within 3–5 business days
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Timeline</h2>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground border-b border-border">Stage</th>
                        <th className="text-left p-3 font-semibold text-foreground border-b border-border">Timeframe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 font-medium">Eligibility Period</td>
                        <td className="p-3">30 days from purchase</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 font-medium">Processing Time</td>
                        <td className="p-3">3–5 business days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bank Processing</td>
                        <td className="p-3">Additional 5–10 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conditions</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Refund requests must be made within <strong>30 days of purchase</strong></li>
                  <li><strong>Only one refund per customer</strong> is permitted</li>
                  <li>Access to the product will be <strong>revoked upon refund</strong></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why We Offer This Guarantee</h2>
                <p className="text-muted-foreground">
                  We're confident in the value our products provide. Your trust matters to us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
                <p className="text-muted-foreground">
                  📧 <strong>Email:</strong>{" "}
                  <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">
                    theknockoutacademy@gmail.com
                  </a>
                </p>
              </section>

              <p className="text-sm text-muted-foreground italic">
                <strong>TKOA Private Limited</strong> | CIN: U58199GJ2025PTC169791
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default RefundPolicy;
