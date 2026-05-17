# Bundle Compositions

Canonical compositions for the master and profession bundles defined in the Empire Plan (PDF file-page 27–28). Locked compositions are the source of truth — `src/data/catalog.json` is generated from this doc.

**Composition formula (PDF p27):** profession book + ~2 Foundations + ~2 AI-Powered Operator + ~1 Skills, totaling 5–9 books. Founder's Bundle is the exception (no profession slot, more Foundations). Financial Advisor's Bundle is the only one using the Wealth slot.

**Retail drift:** Several bundle retails in PDF p28 don't precisely match the summed individual prices of the candidate books. Compositions prioritize audience cohesion over hitting retail to the dollar — variance noted per bundle.

**Status legend:**
- ✅ = locked (source of truth — Session 3 page generation reads these)
- 🟡 = pending review

**Status:** 21 of 21 ✅ locked as of 2026-05-17.

The Grand Master Bundle ($497, all 61 books) needs no composition — it ships as `composition: "all"` in `catalog.json`.

---

## 1. Operator's Master Bundle — $197 · 25 books · $2,180 retail ✅
**PDF spec (p27):** "Every book in Foundations + 12 from AI-Powered Operator + 5 from Skills."

**Locked composition (25):**
- **All 8 Foundations** — #01, #02, #03, #04, #05, #06, #07, #08
- **12 of 15 AI-Powered Operator** — #09, #11, #12, #13, #14, #16, #17, #18, #20, #21, #22, #23
  - _Skipped:_ #10 Trading (niche to traders), #15 Customer Support (most solo operators are pre-team), #19 Real Estate (niche to investors)
- **5 of 10 Skills** — #52, #54, #55, #59, #61

**Rationale:** Cold-traffic hero offer for the generalist operator — founder, freelancer, consultant, solo. Full Foundations is non-negotiable. AI-Op selection covers content, sales, ops, comms, copy, video, and admin without bleeding into vertical-specific titles. Skills picks are the highest-leverage cross-cutting capabilities. **Swap from initial draft:** #15 Customer Support → #20 E-commerce (e-com is more universal for solo operators than support-volume needs).

**Retail check:** ~$406 (Foundations) + ~$1,126 (AI-Op subset) + ~$330 (Skills subset) ≈ **$1,862**. PDF retail: $2,180. Variance ~15% — still a 91%-off line that markets cleanly.

---

## Profession Bundles (20)

Each bundle is named at PDF p28. Book counts, retail values, and bundle prices are PDF-authoritative; book selections are locked below.

---

### 2. The Lawyer's Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #24 AI for Lawyers ($147)
- **Foundations:** #04 Sales Conversation Decoded ($57), #08 Negotiation Field Manual ($47)
- **AI-Op:** #13 AI-Powered Email Marketing ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills:** #55 Negotiation — Advanced Tactics ($97)

**Sum:** $532 (PDF $520, +$12 ≈ on target)
**Rationale:** A modern law practice runs on negotiation, structured client conversation, and operational discipline. Bundle pairs AI-augmented legal craft (drafting, discovery, research) with the deal-making and ops backbone every small-firm attorney needs.

---

### 3. The Doctor's Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #25 AI for Doctors & Healthcare Practitioners ($147)
- **Foundations:** #02 Solo Operator's Compass ($47), #06 The Hiring Blueprint ($57)
- **AI-Op:** #13 AI-Powered Email Marketing ($97), #18 AI-Powered Bookkeeping & Finance ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** Modern practitioners run a practice, not just see patients. Bundle covers AI for clinical workflows + the solo-practice operating system + patient communication automation (recall, no-show prevention, follow-up) + finance backbone. Compliance frame: "for practitioner training only" (PDF p34). **Swap from initial draft:** #15 Customer Support → #13 Email Marketing — patients aren't "customers" and the framing matters in regulated verticals; the actual job is patient-comms automation.

---

### 4. The CPA & Accountant Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #26 AI for Accountants & CPAs ($147)
- **Foundations:** #06 The Hiring Blueprint ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #18 AI-Powered Bookkeeping & Finance ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #56 Project Management Field Guide ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** CPAs scale through firm operations and client communication, not just tax expertise. Pairs the profession depth with the AI-powered finance/comms backbone, firm-growth fundamentals, and the project discipline tax/audit season demands.

---

### 5. The Real Estate Agent Bundle — $147 · 6 books · $420 retail ✅
- **Profession:** #29 AI for Real Estate Agents ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #12 AI-Powered Lead Generation ($97), #22 AI-Powered Video & Social ($97)
- **Skills:** #52 Mastering Sales Calls ($67)

**Sum:** $472 (PDF $420, +$52)
**Rationale:** Real estate is sales + marketing + lead gen + listing presentation. Bundle equips agents with AI lead gen, modern social/video for listings, and the sales conversation backbone. Sales-conversation #04 stays — sales is core to the job, not optional.

---

### 6. The Architect & Designer Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #28 AI for Architects & Designers ($147)
- **Foundations:** #02 Solo Operator's Compass ($47), #04 Sales Conversation Decoded ($57)
- **AI-Op:** #21 AI-Powered Copywriting ($87), #22 AI-Powered Video & Social ($97)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** Architects and designers sell on craft *and* business acumen. Bundle pairs creative AI workflows (concept generation, drafting, client presentations) with the solo-operator discipline, client-comm copy, and the strategic framing that lets a small studio compete with bigger firms.

---

### 7. The Financial Advisor Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #30 AI for Financial Advisors ($147)
- **Foundations:** #07 Marketing — First Principles ($57)
- **AI-Op:** #13 AI-Powered Email Marketing ($97), #14 AI-Powered Sales Operations ($97)
- **Wealth:** #48 Personal Finance — The Full System ($97)
- **Skills:** #59 Decision-Making Frameworks ($67)

**Sum:** $562 (PDF $520, +$42)
**Rationale:** Advisors win on trust, communication cadence, and rigor. Bundle covers AI for client research/compliance/portfolio commentary, the email/sales engine running an advisory book, the full personal-finance framework (#48, not the beginner #03), and the decision discipline that distinguishes durable advisors. Compliance frame: "educational · not investment advice" (PDF p34). **Swap + slot-addition from initial draft:** #03 Money Beginner's System → #48 Personal Finance Full System (the advisor needs the full framework, not the beginner version) and added the Wealth slot — this is the only bundle in the catalog where a Wealth-series book genuinely belongs in v1.

---

### 8. The Consultant Bundle — $197 · 6 books · $520 retail ✅
- **Profession:** #31 AI for Consultants ($147)
- **Foundations:** #07 Marketing — First Principles ($57), #08 Negotiation Field Manual ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** Consultants ship thinking and deliverables. Bundle covers AI for deck/research workflows, the marketing/negotiation backbone for landing engagements, and strategic discipline as the underlying craft.

---

### 9. The Founder's Bundle — $247 · 9 books · $680 retail ✅

**Overdelivers by one book vs the PDF's 8** — the offer story is stronger ("PDF planned 8, we shipped 9") and #06 Hiring Blueprint closes the biggest non-AI gap in founder skills.

- **Foundations (5):** #01 First-Time Founder's Playbook ($47), #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47), #06 The Hiring Blueprint ($57), #07 Marketing — First Principles ($57)
- **AI-Op (3):** #11 AI-Powered Content Creation ($97), #12 AI-Powered Lead Generation ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills (1):** #60 Strategic Thinking Toolkit ($67)

**Sum:** $603 (PDF $680, –$77)
**Rationale:** Most ambitious bundle — the full founder operating system: starter playbook + solo discipline + productivity OS + hiring + marketing + content/leads/ops + strategic thinking. No profession-series book (founders are the generalist). **Addition from initial draft:** added #06 Hiring Blueprint as the 9th book — hiring is the single biggest non-AI gap in founder skills and the variance to PDF retail tightens the gap.

---

### 10. The Marketer's Bundle — $197 · 7 books · $580 retail ✅
- **Profession:** #34 AI for Marketers ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #13 AI-Powered Email Marketing ($97), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $559 (PDF $580, –$21 ✓)
**Rationale:** Marketers run content, email, copy, and the sales conversations that close them. Bundle = the complete modern marketing operating system, AI-augmented end to end.

---

### 11. The Engineer's Bundle — $147 · 6 books · $420 retail ✅
- **Profession:** #32 AI for Engineers ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47)
- **AI-Op:** #16 AI-Powered Operations & SOPs ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $432 (PDF $420, +$12 ✓)
**Rationale:** Engineers ship faster when they communicate better and run themselves like an operator. Bundle pairs AI dev workflows with productivity discipline, operations rigor, and the comm/writing chops that compound a senior IC's leverage.

---

### 12. The Teacher's Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #27 AI for Teachers & Educators ($97)
- **Foundations:** #05 The Productivity Operating System ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #23 AI-Powered Course Creation ($87)
- **Skills:** #53 Public Speaking & Influence ($67)

**Sum:** $395 (PDF $320, +$75)
**Rationale:** Teachers prep, present, and produce content. AI-powered course + content creation + public speaking + productivity OS = the modern educator's complete operating kit. Overdelivers at the $97 price point — defensible: the discount story still works and the cohesion is right.

---

### 13. The Therapist & Coach Bundle — $147 · 5 books · $420 retail ✅
- **Profession:** #36 AI for Therapists & Coaches ($147)
- **Foundations:** #02 Solo Operator's Compass ($47)
- **AI-Op:** #15 AI-Powered Customer Support ($87), #18 AI-Powered Bookkeeping & Finance ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $435 (PDF $420, +$15 ✓)
**Rationale:** Coaches and therapists run one-person practices — clients, finances, communications. Bundle is the operational scaffolding around the craft, leaving the clinical/therapeutic technique to licensed training (PDF p34: "practice tools · not clinical training").

---

### 14. The Recruiter & HR Bundle — $147 · 6 books · $420 retail ✅
- **Profession:** #35 AI for Recruiters & HR ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #06 The Hiring Blueprint ($57)
- **AI-Op:** #17 AI-Powered Hiring & Recruiting ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $452 (PDF $420, +$32 ✓)
**Rationale:** Recruiting is sourcing + selling + writing. Bundle pairs the AI recruiting workflow with the hiring foundation, outreach copy, and the conversation/communication mastery every recruiter needs.

---

### 15. The Photographer & Creator Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #37 AI for Photographers & Creators ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #53 Public Speaking & Influence ($67)

**Sum:** $365 (PDF $320, +$45)
**Rationale:** Creators are solo businesses with audiences. Bundle covers AI creative workflow + audience building (video/social) + marketing fundamentals + the on-camera/presenting skill that distinguishes a creator from a freelancer.

---

### 16. The Restaurant Owner Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #38 AI for Restaurant Owners ($97)
- **Foundations:** #06 The Hiring Blueprint ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #58 Leadership for Small Teams ($67)

**Sum:** $375 (PDF $320, +$55)
**Rationale:** Restaurants live or die on staff, marketing, and social. Bundle is the operating playbook for a modern small-restaurant owner — hire well, market consistently, lead a kitchen and front-of-house team.

---

### 17. The Construction & Trades Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #39 AI for Construction & Trades ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #06 The Hiring Blueprint ($57)
- **AI-Op:** #12 AI-Powered Lead Generation ($97)
- **Skills:** #55 Negotiation — Advanced Tactics ($97)

**Sum:** $405 (PDF $320, +$85)
**Rationale:** Trades businesses sell bids, hire crews, and negotiate scopes/change-orders every day. Bundle pairs AI ops with the negotiation/sales backbone every contractor needs. Negotiation #55 stays — change-order negotiation is core to the job.

---

### 18. The Software Developer Bundle — $147 · 6 books · $420 retail ✅
- **Profession:** #40 AI for Software Developers ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47)
- **AI-Op:** #16 AI-Powered Operations & SOPs ($87), #23 AI-Powered Course Creation ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $432 (PDF $420, +$12 ✓)
**Rationale:** Modern devs ship product, write docs, and increasingly monetize their knowledge (courses, content). Bundle is the operator's kit for a developer who wants to scale themselves — not just a "better engineer" track. Distinct from #32 AI for Engineers (which is more IC-focused).

---

### 19. The Product Manager Bundle — $147 · 6 books · $420 retail ✅
- **Profession:** #41 AI for Product Managers ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #21 AI-Powered Copywriting ($87)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $462 (PDF $420, +$42 ✓)
**Rationale:** PMs synthesize, communicate, decide. Bundle covers AI for specs/roadmaps + the writing/marketing backbone modern PMs need + the strategic discipline that separates senior from junior.

---

### 20. The Researcher's Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #42 AI for Researchers & Academics ($97)
- **Foundations:** #05 The Productivity Operating System ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #23 AI-Powered Course Creation ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $395 (PDF $320, +$75)
**Rationale:** Researchers produce and publish. Bundle is the AI writing + teaching + publishing stack for the modern academic — useful equally for industry researchers building authority.

---

### 21. The Wellness Professional Bundle — $97 · 5 books · $320 retail ✅
- **Profession:** #43 AI for Personal Trainers & Wellness Pros ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #58 Leadership for Small Teams ($67)

**Sum:** $365 (PDF $320, +$45)
**Rationale:** Wellness pros are sole proprietors with audiences (or small teams of 2–5). Bundle is the marketing + social + solo-business foundation + people-leadership for the trainer/wellness pro running a real business, not a hobby.

---

## Bundle Taglines

H1 subtitle for each bundle's landing page in Session 4. ≤12 words, audience-specific.

| # | Bundle | Tagline |
|---|--------|---------|
| 1 | Operator's Master | The complete operating system for solo founders, freelancers, and consultants. |
| 2 | Lawyer's | AI craft, deal-making, and operations for the modern small-firm attorney. |
| 3 | Doctor's | AI workflows and patient communication for the modern medical practice. |
| 4 | CPA & Accountant | AI-augmented tax craft and firm operations for accounting professionals. |
| 5 | Real Estate Agent | Lead gen, listing presentation, and closing for top-producing agents. |
| 6 | Architect & Designer | AI-augmented creative workflow and client-winning craft for design studios. |
| 7 | Financial Advisor | AI research, communication, and rigor for the trusted advisory practice. |
| 8 | Consultant | Synthesis, deliverables, and judgment for the modern strategic consultant. |
| 9 | Founder's | The complete operating system for founders going from zero to traction. |
| 10 | Marketer's | The full marketing engine: content, copy, email, and conversion. |
| 11 | Engineer's | AI workflows and operating discipline for shipping engineers. |
| 12 | Teacher's | AI lesson craft, content creation, and presence for modern educators. |
| 13 | Therapist & Coach | Operational scaffolding for therapists and coaches running solo practices. |
| 14 | Recruiter & HR | AI sourcing, screening, and outreach for high-leverage people operations. |
| 15 | Photographer & Creator | AI creative workflow and audience building for working creators. |
| 16 | Restaurant Owner | Staff, marketing, and social for the modern small-restaurant operator. |
| 17 | Construction & Trades | Bids, crews, and negotiation for the contractor running a real business. |
| 18 | Software Developer | AI dev workflows and operator discipline for engineers scaling themselves. |
| 19 | Product Manager | Specs, roadmaps, and strategy for the AI-augmented modern PM. |
| 20 | Researcher's | AI writing, teaching, and publishing for the modern academic. |
| 21 | Wellness Professional | Audience, marketing, and small-team leadership for the working wellness pro. |

---

## Decisions Log (initial-draft → locked)

Recorded for future-Raj and future-Claude reviewing why specific calls were made.

1. **Schema:** flat `book_ids: string[]` → structured `composition: { profession?, foundations, ai_operator, skills, wealth? }`. Why: slot reasoning IS the marketing copy ("your profession book + 2 Foundations + 2 AI tools + 1 Skill"), page templates can render section headers from data, and a schema check can enforce "every profession bundle has exactly one profession book."
2. **Operator's Master Bundle:** initial draft skipped #10/#19/#20; locked skips #10/#15/#19. Why: e-com (#20) is more universal for solo operators than customer-support volume (#15), and most operators are pre-team.
3. **Doctor's Bundle:** initial #15 → locked #13. Why: patients aren't "customers" — the actual job is patient-comms automation (recall, no-show prevention, follow-up).
4. **Financial Advisor's Bundle:** initial Foundations #03 → locked Wealth #48 (Personal Finance Full System), wealth slot added. Why: advisors need the full framework, not the beginner version; this is the only bundle in v1 where a Wealth-series book genuinely belongs.
5. **Founder's Bundle:** 8 books → 9 (added #06 Hiring Blueprint). Why: hiring is the single biggest non-AI gap in founder skills, and overdelivering vs the PDF's 8-book plan makes a stronger offer story.
6. **Construction & Trades #55 retention:** considered swap to #59 to match retail, kept #55. Why: change-order negotiation is core to the trades business — too important to drop.
7. **Real Estate Agent #04 retention:** considered swap to #03 to match retail, kept #04. Why: sales conversation is the core job; cutting it to hit retail would weaken the actual offer.

---

## Future Bundles (post-launch)

These do **not** exist in `catalog.json` yet — adding here so the catalog gap is on record.

### Wealth Builder's Bundle (proposed Session 5+)
- **Estimated price:** $197 · ~6 books
- **Proposed composition:** Wealth core (#44 Stock Investing Decoded, #46 Real Estate Investing for Operators, #50 The Wealth Building Roadmap) + #03 Money — The Beginner's System (Foundations) + #59 Decision-Making Frameworks (Skills) + one more Wealth pick TBD (likely #48 if not already absorbed into Financial Advisor's bundle, otherwise #49 Tax Strategy)
- **Why it's a gap:** Currently 7 of 8 Wealth-series books appear in zero bundles. Wealth is a complete series in the catalog but has no cold-traffic acquisition entry point. A dedicated bundle gives Wealth a paid-ads target audience and a profession-bundle-style landing page.
- **Not in v1 because:** 22 bundles is already a lot of landing pages to build/optimize/run ads for in the 90-day sprint. Add once the v1 funnel proves out.

### Other gaps to consider for v2
- An "AI for Solopreneurs" bundle (vs Founder's) — focused on freelancers/consultants who aren't building companies.
- An "Operator's Skills Bundle" (Skills-heavy, $97-tier) for buyers who already have the AI books from elsewhere.
- A "Hardcover Library" SKU — physical edition of one of the existing bundles for premium pricing.
