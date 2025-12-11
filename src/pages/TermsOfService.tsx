import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | The Knockout Academy</title>
        <meta name="description" content="Terms of Service for The Knockout Academy. Understand the terms governing your use of our digital education products." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-4xl font-extrabold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or purchasing from The Knockout Academy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or make any purchases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Products and Services</h2>
              <p className="text-muted-foreground mb-4">
                The Knockout Academy sells digital educational products including eBooks, guides, templates, and automation workflows. All products are delivered digitally immediately upon successful payment.
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> Our products are educational resources only. We do not guarantee any specific results, income, or outcomes. Your success depends entirely on your own effort, implementation, and market conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, products, and materials provided by The Knockout Academy are protected by copyright and intellectual property laws. When you purchase a product:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You receive a personal, non-transferable license to use the materials</li>
                <li>You may not resell, redistribute, or share the products with others</li>
                <li>You may not claim authorship or remove copyright notices</li>
                <li>You may use the templates and automation workflows for your personal or business purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground">
                All prices are listed in USD unless otherwise specified. Payment is processed securely through Shopify/Stripe. By making a purchase, you authorize us to charge your payment method for the total amount of your order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Policy</h2>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee on all purchases. If you're not satisfied with your purchase for any reason, contact us within 30 days of purchase for a full refund. No questions asked. See our full{" "}
                <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our products for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the operation of our website</li>
                <li>Share, resell, or redistribute purchased products</li>
                <li>Use our products to create competing products or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Earnings Disclaimer</h2>
              <p className="text-muted-foreground">
                <strong>Results are not guaranteed.</strong> The Knockout Academy provides educational resources only. Any income examples, if mentioned, are not intended to represent or guarantee that anyone will achieve the same or similar results. Your results will vary based on many factors including but not limited to your background, experience, work ethic, and market conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, The Knockout Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our products or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:support@knockoutacademy.com" className="text-primary hover:underline">
                  support@knockoutacademy.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsOfService;
