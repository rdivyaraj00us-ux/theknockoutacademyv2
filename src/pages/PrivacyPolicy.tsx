import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | The Knockout Academy</title>
        <meta name="description" content="Privacy Policy for The Knockout Academy operated by TKOA Private Limited. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4"><strong>Last Updated: January 2025</strong></p>
            <p className="text-muted-foreground mb-8">
              <strong>The Knockout Academy</strong> ("we," "our," or "us") is operated by <strong>TKOA Private Limited</strong> (CIN: U58199GJ2025PTC169791). We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-muted-foreground mb-8">
              By using our website, you consent to the data practices described in this policy.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Personal Information You Provide</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Contact Information:</strong> Full name, email address, phone number</li>
                <li><strong>Billing Information:</strong> Billing address, payment details (processed securely by Razorpay)</li>
                <li><strong>Account Information:</strong> Username, password (encrypted)</li>
                <li><strong>Communication Data:</strong> Messages, feedback, or support requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
                <li><strong>Cookies:</strong> Session cookies, analytics cookies, preference cookies</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Deliver digital products via email or download link</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and notifications</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and protect our business</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We do <strong>not</strong> sell, trade, or rent your personal information. We share data only with:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Provider</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Razorpay</td>
                      <td className="p-3">Payment processing</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Shopify</td>
                      <td className="p-3">E-commerce platform</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Google Analytics</td>
                      <td className="p-3">Website analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground">We may also disclose information if required by law.</p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All data is encrypted using SSL/TLS technology</li>
                <li>Payments processed by PCI-DSS compliant Razorpay</li>
                <li>We do not store complete credit card details</li>
                <li>Regular security monitoring and updates</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
              <p className="text-muted-foreground mb-4">We use cookies to improve your experience:</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Type</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Purpose</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Essential</td>
                      <td className="p-3">Basic functionality</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Analytics</td>
                      <td className="p-3">Usage understanding</td>
                      <td className="p-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Preference</td>
                      <td className="p-3">Settings memory</td>
                      <td className="p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground">You can manage cookies through your browser settings.</p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, contact us at{" "}
                <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">theknockoutacademy@gmail.com</a>
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Account Information:</strong> Until deletion request</li>
                <li><strong>Transaction Records:</strong> 7 years (tax compliance)</li>
                <li><strong>Analytics Data:</strong> 26 months</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. International Transfers</h2>
              <p className="text-muted-foreground">
                Our servers are in India. By using our website, you consent to data transfer to India.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 18. We do not knowingly collect data from children.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this policy periodically. Changes will be posted on this page with an updated date.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
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

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Grievance Officer</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Name:</strong> Mr. Malavsinh Jaydipsinh Rathod
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">theknockoutacademy@gmail.com</a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic">
              This Privacy Policy is effective as of January 2026.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
