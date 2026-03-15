import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | The Knockout Academy</title>
        <meta name="description" content="Terms and Conditions for The Knockout Academy operated by TKOA Private Limited. Understand the terms governing your use of our website and purchases." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-4"><strong>Last Updated: January 2025</strong></p>
            <p className="text-muted-foreground mb-4">
              Welcome to <strong>The Knockout Academy</strong>. These Terms govern your use of our website and purchases.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The Knockout Academy</strong> is operated by <strong>TKOA Private Limited</strong> (CIN: U58199GJ2025PTC169791).
            </p>
            <p className="text-muted-foreground mb-8">
              By using our website, you agree to these Terms.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Products and Services</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">1.1 What We Sell</h3>
              <p className="text-muted-foreground mb-4">
                We sell digital products including ebooks, courses, templates, guides, and educational resources.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Digital Delivery</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All products are delivered digitally via email/download link</li>
                <li>Delivery is instant upon successful payment</li>
                <li>Ensure your email address is correct</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Prices are displayed in USD unless otherwise specified</li>
                <li>We accept payments via Shopify Payments (Credit/Debit Cards, PayPal)</li>
                <li>All payments are processed securely</li>
                <li>We do not store your card details</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. License and Usage</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 You MAY:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Download and use products for personal use</li>
                <li>Access course materials for your own learning</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 You MAY NOT:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Resell or redistribute products</li>
                <li>Share login credentials or access</li>
                <li>Copy or distribute content</li>
                <li>Use for illegal purposes</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. 30-Day Money-Back Guarantee</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Full refund within 30 days of purchase, no questions asked</li>
                <li>Email <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">theknockoutacademy@gmail.com</a> with your order number</li>
                <li>Refund processed within 3–5 business days</li>
                <li>One refund per customer</li>
                <li>Access revoked upon refund</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website is property of TKOA Private Limited and protected by intellectual property laws.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Products provided "as is" without warranties</li>
                <li>We do not guarantee specific results</li>
                <li>Products are for educational purposes only</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Our total liability shall not exceed the amount you paid for the product. We are not liable for indirect or consequential damages.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of India. Disputes shall be subject to courts in Vadodara, Gujarat, India.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-foreground font-semibold mb-3">TKOA Private Limited</p>
              <p className="text-muted-foreground mb-2">
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">theknockoutacademy@gmail.com</a>
              </p>
              <p className="text-muted-foreground mb-2">
                📍 <strong>Address:</strong> C/o Rathod Jaydipsinh, 53/2 CHACHAK, RAJPUTWADI Rd, Bodeli, Vadodara - 391135, Gujarat, India
              </p>
              <p className="text-muted-foreground">
                <strong>CIN:</strong> U58199GJ2025PTC169791
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic">
              By using our website, you agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsOfService;
