import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | The Knockout Academy</title>
        <meta name="description" content="Privacy Policy for The Knockout Academy. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-4xl font-extrabold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">When you make a purchase or interact with our website, we may collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name and email address</li>
                <li>Billing and payment information (processed securely through Shopify/Stripe)</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Purchase history and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and deliver your digital product purchases</li>
                <li>Send order confirmations and download links</li>
                <li>Provide customer support</li>
                <li>Send relevant updates about your purchases (optional)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. All payment transactions are processed through secure, encrypted connections via Shopify and Stripe. We never store your complete credit card information on our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Shopify:</strong> E-commerce platform and payment processing</li>
                <li><strong>Stripe:</strong> Payment processing</li>
                <li><strong>Email Service Providers:</strong> Order confirmations and support communications</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Each of these services has their own privacy policies governing their use of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to improve your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicy;
