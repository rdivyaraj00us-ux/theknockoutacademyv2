// Specific Entrepedia products included in each bundle from the business plan

export interface BundleContent {
  handle: string;
  title: string;
  tagline: string;
  products: string[];
  whoIsItFor: string;
  outcomes: string[];
}

export const bundleContents: Record<string, BundleContent> = {
  "ai-mastery-essentials-bundle": {
    handle: "ai-mastery-essentials-bundle",
    title: "AI Mastery Essentials Bundle",
    tagline: "Complete beginner's guide to leveraging AI tools for productivity and income",
    products: [
      "Claude AI for Business and Content",
      "AI Research & Workflow Automation with Perplexity",
      "The Ultimate Guide to ChatGPT Sora",
      "Smart Digital Creation with AI",
      "AI-Powered Content Marketing Prompts",
      "The Goldilocks Prompt Formula",
      "Prompt Engineering for Content Marketers"
    ],
    whoIsItFor: "Complete beginners wanting to use AI professionally",
    outcomes: [
      "Master ChatGPT, Claude AI, and Perplexity for daily productivity",
      "Create professional content 10x faster with AI assistance",
      "Write effective prompts that get the results you want",
      "Automate research and content creation workflows",
      "Build a foundation for AI-powered income streams"
    ]
  },
  "e-commerce-dropshipping-foundations-bundle": {
    handle: "e-commerce-dropshipping-foundations-bundle",
    title: "E-Commerce & Dropshipping Foundations Bundle",
    tagline: "Everything you need to start and grow an online store",
    products: [
      "The Advertising Funnel Blueprint Strategies",
      "Google Performance Max Campaigns Unleashed",
      "Keep Them Coming Back (Customer Retention)",
      "How to Find Niche and Stand Out",
      "Headline Construction Framework",
      "21 Psychological Triggers That Help You Monetize"
    ],
    whoIsItFor: "Aspiring online store owners and dropshippers",
    outcomes: [
      "Find profitable niches with proven demand",
      "Set up high-converting advertising funnels",
      "Master Google Performance Max campaigns",
      "Build customer loyalty that drives repeat purchases",
      "Write headlines that grab attention and convert"
    ]
  },
  "content-creator-accelerator-bundle": {
    handle: "content-creator-accelerator-bundle",
    title: "Content Creator Accelerator Bundle",
    tagline: "Fast-track your content creation journey",
    products: [
      "The 6-Day YouTube Accelerator",
      "8-Day Content Marketing Revolution",
      "Mastering CapCut Tutorials",
      "Content Marketing Growthstack",
      "Content Marketing on Steroids",
      "7 Content Creation Moves to Reclaim Your Time With AI"
    ],
    whoIsItFor: "YouTubers, social media creators, and content marketers",
    outcomes: [
      "Launch and grow a successful YouTube channel",
      "Create a content marketing system that works on autopilot",
      "Edit professional videos with CapCut",
      "10x your content output with AI-powered workflows",
      "Build an engaged audience that trusts your content"
    ]
  },
  "digital-marketing-sales-mastery-bundle": {
    handle: "digital-marketing-sales-mastery-bundle",
    title: "Digital Marketing & Sales Mastery Bundle",
    tagline: "Master the art of online marketing and sales",
    products: [
      "GetResponse Growth: Automate, Convert, Scale",
      "The Micro-Offer Method",
      "Interview Success Blueprint",
      "Your Business Plan Playbook",
      "The Strategic Delegation Framework"
    ],
    whoIsItFor: "Marketers, freelancers, and small business owners",
    outcomes: [
      "Build automated email marketing sequences that convert",
      "Create irresistible micro-offers that sell",
      "Develop a solid business plan for your venture",
      "Learn to delegate effectively and scale your business",
      "Master the art of selling without being salesy"
    ]
  },
  "productivity-personal-development-bundle": {
    handle: "productivity-personal-development-bundle",
    title: "Productivity & Personal Development Bundle",
    tagline: "Optimize your life and work with proven systems",
    products: [
      "The Perfect Process (Mini-Course)",
      "The Eisenhower Matrix Blueprint",
      "Master Your Time and Priorities",
      "Productivity with ADHD",
      "The Calm Beyond Anxiety",
      "Strategic Time Management Prompts"
    ],
    whoIsItFor: "Busy professionals seeking work-life optimization",
    outcomes: [
      "Implement proven time management frameworks",
      "Prioritize tasks using the Eisenhower Matrix",
      "Manage ADHD symptoms for better focus",
      "Reduce anxiety and find calm in chaos",
      "Create systems that make productivity automatic"
    ]
  },
  "finance-investing-fundamentals-bundle": {
    handle: "finance-investing-fundamentals-bundle",
    title: "Finance & Investing Fundamentals Bundle",
    tagline: "Build your financial literacy from the ground up",
    products: [
      "The Multi-Bucket Savings System",
      "Blockchain Basics",
      "How Digital Currencies Really Work",
      "Making Your First Cryptocurrency Purchase",
      "Cryptocurrency Platform Due Diligence",
      "The Smart Homebuyer's Playbook"
    ],
    whoIsItFor: "Beginners in personal finance and cryptocurrency",
    outcomes: [
      "Set up an effective multi-bucket savings system",
      "Understand blockchain technology and its applications",
      "Make informed cryptocurrency purchases",
      "Evaluate crypto platforms for safety and reliability",
      "Navigate the home buying process with confidence"
    ]
  },
  "the-knockout-master-bundle": {
    handle: "the-knockout-master-bundle",
    title: "The Knockout Master Bundle",
    tagline: "The complete collection — everything you need in one package",
    products: [
      "All 6 Specialty Bundles (40+ eBooks, guides, templates, mini-courses)",
      "8,000+ Plug-and-Play AI Automation Templates for n8n",
      "Exclusive Beginner-to-Expert Learning Pathway",
      "Quick-Start Implementation Guides",
      "Week-by-Week Action Plans for Each Skill Area"
    ],
    whoIsItFor: "Serious learners who want everything to build real skills",
    outcomes: [
      "Master AI tools for productivity and income",
      "Launch and grow an e-commerce or dropshipping business",
      "Create content that attracts and converts",
      "Build automated marketing and sales systems",
      "Optimize your time, focus, and financial literacy"
    ]
  }
};

// Helper to get bundle content by handle (supports partial matches)
export const getBundleContent = (handle: string): BundleContent | null => {
  // Direct match
  if (bundleContents[handle]) {
    return bundleContents[handle];
  }
  
  // Partial match (for variations in handle naming)
  const normalizedHandle = handle.toLowerCase();
  for (const [key, value] of Object.entries(bundleContents)) {
    if (normalizedHandle.includes(key.split("-").slice(0, 2).join("-")) ||
        key.includes(normalizedHandle.split("-").slice(0, 2).join("-"))) {
      return value;
    }
  }
  
  // Match by keywords
  if (normalizedHandle.includes("ai") && normalizedHandle.includes("mastery")) {
    return bundleContents["ai-mastery-essentials-bundle"];
  }
  if (normalizedHandle.includes("commerce") || normalizedHandle.includes("dropship")) {
    return bundleContents["e-commerce-dropshipping-foundations-bundle"];
  }
  if (normalizedHandle.includes("content") || normalizedHandle.includes("creator")) {
    return bundleContents["content-creator-accelerator-bundle"];
  }
  if (normalizedHandle.includes("marketing") || normalizedHandle.includes("sales")) {
    return bundleContents["digital-marketing-sales-mastery-bundle"];
  }
  if (normalizedHandle.includes("productivity") || normalizedHandle.includes("personal")) {
    return bundleContents["productivity-personal-development-bundle"];
  }
  if (normalizedHandle.includes("finance") || normalizedHandle.includes("invest")) {
    return bundleContents["finance-investing-fundamentals-bundle"];
  }
  if (normalizedHandle.includes("master")) {
    return bundleContents["the-knockout-master-bundle"];
  }
  
  return null;
};
