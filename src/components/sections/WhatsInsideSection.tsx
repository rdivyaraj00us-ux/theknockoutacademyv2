import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, ListChecks, Bot } from "lucide-react";

const bundleContents = {
  "ai-mastery": {
    title: "AI Mastery Essentials",
    count: 7,
    items: [
      { name: "Claude AI for Business and Content", format: "Video Guide", description: "Use Claude AI to write, research, and automate business tasks" },
      { name: "AI Research & Workflow Automation with Perplexity", format: "Video Guide", description: "Master Perplexity for instant research and fact-checking" },
      { name: "The Ultimate Guide to ChatGPT Sora", format: "Video Guide", description: "Create AI-generated videos with OpenAI's Sora" },
      { name: "Smart Digital Creation with AI", format: "Video Guide", description: "Build digital products using AI tools" },
      { name: "AI-Powered Content Marketing Prompts", format: "Prompt Pack", description: "50+ ready-to-use prompts for content creation" },
      { name: "The Goldilocks Prompt Formula", format: "Guide", description: "Write prompts that get perfect AI responses every time" },
      { name: "Prompt Engineering for Content Marketers", format: "Checklist", description: "Step-by-step prompt optimization system" },
    ],
  },
  "ecommerce": {
    title: "E-Commerce & Dropshipping",
    count: 6,
    items: [
      { name: "The Advertising Funnel Blueprint", format: "eBook", description: "Build complete ad funnels that convert strangers to buyers" },
      { name: "Google Performance Max Campaigns Unleashed", format: "eBook", description: "Master Google's AI-powered ad campaigns" },
      { name: "Keep Them Coming Back", format: "eBook", description: "Customer retention strategies that increase lifetime value" },
      { name: "How to Find Niche and Stand Out", format: "eBook", description: "Identify profitable niches with less competition" },
      { name: "Headline Construction Framework", format: "Guide", description: "Write headlines that stop the scroll" },
      { name: "21 Psychological Triggers That Help You Monetize", format: "Listicle", description: "Psychology-based selling techniques" },
    ],
  },
  "content-creator": {
    title: "Content Creator Accelerator",
    count: 6,
    items: [
      { name: "The 6-Day YouTube Accelerator", format: "Mini-Course", description: "Launch your YouTube channel in less than a week" },
      { name: "8-Day Content Marketing Revolution", format: "Mini-Course", description: "Transform your content strategy in 8 days" },
      { name: "Mastering CapCut Tutorials", format: "Video Guide", description: "Edit professional videos on any device" },
      { name: "Content Marketing Growthstack", format: "Toolstack", description: "Essential tools every content creator needs" },
      { name: "Content Marketing on Steroids", format: "eBook", description: "Advanced content strategies that drive traffic" },
      { name: "7 Content Creation Moves to Reclaim Your Time With AI", format: "Listicle", description: "AI shortcuts for content creators" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & Sales",
    count: 5,
    items: [
      { name: "GetResponse Growth: Automate, Convert, Scale", format: "Video Guide", description: "Build email automations that nurture and sell" },
      { name: "The Micro-Offer Method", format: "Podcast + Guide", description: "Create small offers that convert cold traffic" },
      { name: "Interview Success Blueprint", format: "eBook", description: "Ace any interview and negotiate better offers" },
      { name: "Your Business Plan Playbook", format: "eBook", description: "Create a business plan that actually works" },
      { name: "The Strategic Delegation Framework", format: "Guide", description: "Delegate effectively and multiply your output" },
    ],
  },
  "productivity": {
    title: "Productivity & Personal Development",
    count: 6,
    items: [
      { name: "The Perfect Process", format: "Mini-Course", description: "Build systems that run on autopilot" },
      { name: "The Eisenhower Matrix Blueprint", format: "eBook", description: "Prioritize tasks using the proven matrix system" },
      { name: "Master Your Time and Priorities", format: "Mini-Course", description: "Advanced time management techniques" },
      { name: "Productivity with ADHD", format: "eBook", description: "Specific strategies for ADHD minds" },
      { name: "The Calm Beyond Anxiety", format: "eBook", description: "Manage anxiety and improve mental clarity" },
      { name: "Strategic Time Management Prompts", format: "Prompt Pack", description: "AI prompts for planning and productivity" },
    ],
  },
  "finance": {
    title: "Finance & Investing",
    count: 6,
    items: [
      { name: "The Multi-Bucket Savings System", format: "Guide", description: "Organize your money into purpose-driven buckets" },
      { name: "Blockchain Basics", format: "eBook", description: "Understand blockchain technology simply" },
      { name: "How Digital Currencies Really Work", format: "Mini-Course", description: "Cryptocurrency fundamentals explained" },
      { name: "Making Your First Cryptocurrency Purchase", format: "Guide", description: "Step-by-step crypto buying guide" },
      { name: "Cryptocurrency Platform Due Diligence", format: "Checklist", description: "Evaluate crypto platforms safely" },
      { name: "The Smart Homebuyer's Playbook", format: "eBook", description: "Navigate home buying without costly mistakes" },
    ],
  },
};

const formatIcons: Record<string, typeof BookOpen> = {
  "eBook": BookOpen,
  "Video Guide": Video,
  "Guide": FileText,
  "Mini-Course": Video,
  "Checklist": ListChecks,
  "Prompt Pack": FileText,
  "Listicle": FileText,
  "Toolstack": ListChecks,
  "Podcast + Guide": Video,
};

export const WhatsInsideSection = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">
              Everything You Get — No Hidden Surprises
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each bundle
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(bundleContents).map(([key, bundle], index) => (
              <ScrollAnimation key={key} animation="fade-up" staggerIndex={index}>
                <AccordionItem value={key} className="bg-card rounded-xl border border-border overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-bold text-foreground">{bundle.title}</span>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {bundle.count} resources
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 font-heading font-semibold text-muted-foreground">Resource</th>
                            <th className="text-left py-3 font-heading font-semibold text-muted-foreground hidden sm:table-cell">Format</th>
                            <th className="text-left py-3 font-heading font-semibold text-muted-foreground hidden md:table-cell">What You'll Learn</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bundle.items.map((item, i) => {
                            const IconComponent = formatIcons[item.format] || FileText;
                            return (
                              <tr key={i} className="border-b border-border/50 last:border-0">
                                <td className="py-3 pr-4">
                                  <div className="flex items-center gap-2">
                                    <IconComponent className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-foreground">{item.name}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground sm:hidden">{item.format}</span>
                                </td>
                                <td className="py-3 pr-4 hidden sm:table-cell">
                                  <Badge variant="outline" className="text-xs font-normal">
                                    {item.format}
                                  </Badge>
                                </td>
                                <td className="py-3 text-muted-foreground hidden md:table-cell">
                                  {item.description}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>

          {/* Bonus: n8n Templates */}
          <ScrollAnimation animation="scale-in" delay={400}>
            <div className="mt-8 bg-secondary rounded-xl border border-primary/30 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary-foreground text-lg">
                    BONUS: 8,000+ n8n Automation Templates
                  </h3>
                  <p className="text-sm text-secondary-foreground/70">Included with the Master Bundle</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-secondary-foreground/80">
                <span>• Pre-built automation workflows</span>
                <span>• Social media schedulers</span>
                <span>• Data processing pipelines</span>
                <span>• Lead generation automations</span>
                <span>• Email marketing sequences</span>
                <span>• And thousands more...</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
