import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle } from "lucide-react";

const EarningsDisclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Earnings Disclaimer | The Knockout Academy</title>
        <meta name="description" content="Important earnings disclaimer for The Knockout Academy. Our digital products are for educational purposes only. Results are not guaranteed." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Earnings Disclaimer
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none space-y-8">
              <section className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mt-0 mb-4">Important Notice</h2>
                <p className="text-muted-foreground m-0">
                  The Knockout Academy provides educational resources only. We make no guarantees regarding income, earnings, or financial results. Any examples or case studies mentioned are for illustrative purposes only and should not be interpreted as promises or guarantees of earnings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">No Income Guarantees</h2>
                <p className="text-muted-foreground">
                  The products and services offered by The Knockout Academy are intended for educational and informational purposes only. We do not guarantee that you will earn any money using the techniques, strategies, or ideas presented in our materials. Your results will vary and depend on many factors including but not limited to your background, experience, work ethic, market conditions, and personal effort.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Results May Vary</h2>
                <p className="text-muted-foreground">
                  Individual results will always vary. There is no guarantee that you will replicate the results stated in our materials. The success of any business or venture depends on many factors, and the reader accepts the risk that results may vary significantly. We cannot and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools, or strategies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Not Financial or Legal Advice</h2>
                <p className="text-muted-foreground">
                  Nothing in our products, services, or website should be considered professional financial, legal, or tax advice. Our content is for general educational purposes only. Before making any financial decisions or implementing any strategies, you should consult with qualified professionals such as licensed financial advisors, attorneys, or accountants who can evaluate your specific situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Effort Matters</h2>
                <p className="text-muted-foreground">
                  Success in any endeavor requires hard work, dedication, skill development, and consistent effort over time. The purchase of any of our educational materials does not guarantee success. We provide the tools and knowledge — what you do with them is entirely up to you. There are no shortcuts to building real skills and creating genuine value.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Forward-Looking Statements</h2>
                <p className="text-muted-foreground">
                  Any statements or representations about earnings, income, or results are expressions of opinion only and are not intended as representations or guarantees of any kind. Forward-looking statements are subject to risks and uncertainties that could cause actual results to differ materially from those expressed or implied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Testimonials and Examples</h2>
                <p className="text-muted-foreground">
                  Any testimonials, success stories, or examples of results presented in our materials represent the experiences of specific individuals. These examples are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on their background, dedication, desire, and motivation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Affiliate Relationships</h2>
                <p className="text-muted-foreground">
                  Some links in our content may be affiliate links. This means we may receive a commission if you purchase through these links, at no additional cost to you. This does not influence our recommendations, which are based solely on educational value.
                </p>
              </section>

              <section className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mt-0 mb-4">Summary</h2>
                <ul className="text-muted-foreground space-y-2 m-0 list-disc list-inside">
                  <li>Our products are educational resources only</li>
                  <li>We make no income or earnings guarantees</li>
                  <li>Your results depend entirely on your own efforts</li>
                  <li>Consult professionals before making financial decisions</li>
                  <li>Past results do not guarantee future performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Earnings Disclaimer, please contact us at{" "}
                  <a href="mailto:theknockoutacademy@gmail.com" className="text-primary hover:underline">
                    theknockoutacademy@gmail.com
                  </a>
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

export default EarningsDisclaimer;
