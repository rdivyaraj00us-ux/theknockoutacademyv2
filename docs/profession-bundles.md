# Bundle Compositions — Review & Lock

Draft compositions for the 20 profession bundles + the Operator's Master Bundle from the Empire Plan (PDF file-page 27–28). The **Grand Master Bundle** ($497) includes all 61 books and needs no composition. The 21 bundles below need Raj's sign-off before they get baked into `src/data/catalog.json` (currently `composition_status: "pending-review"`, `book_ids: []`) and built into landing pages in Sessions 3–4.

**Composition formula (PDF p27):** profession book + ~2 Foundations + ~2 AI-Powered Operator + ~1 Skills, totaling 5–8 books per bundle.

**Retail drift:** Several bundle retails in PDF p28 don't precisely match the summed individual prices of the candidate books. Compositions below prioritize audience cohesion over hitting retail to the dollar — variance noted per bundle. If Raj wants exact retail matches, swap books and we re-lock.

**Status legend:**
- ✅ = locked (Raj signed off, ready for `catalog.json`)
- 🟡 = proposed (this doc — awaiting review)

All 21 bundles below are 🟡. Update to ✅ inline (or in a follow-up commit) and Session 3 will sync `catalog.json`.

---

## 1. Operator's Master Bundle — $197 · 25 books · $2,180 retail 🟡

**PDF spec (p27):** "Every book in Foundations + 12 from AI-Powered Operator + 5 from Skills."

**Proposed composition (25):**
- **All 8 Foundations** — #01, #02, #03, #04, #05, #06, #07, #08
- **12 of 15 AI-Powered Operator** — skipping the three most vertical-specific:
  - #09 AI-Powered Dropshipping
  - #11 AI-Powered Content Creation
  - #12 AI-Powered Lead Generation
  - #13 AI-Powered Email Marketing
  - #14 AI-Powered Sales Operations
  - #15 AI-Powered Customer Support
  - #16 AI-Powered Operations & SOPs
  - #17 AI-Powered Hiring & Recruiting
  - #18 AI-Powered Bookkeeping & Finance
  - #21 AI-Powered Copywriting
  - #22 AI-Powered Video & Social
  - #23 AI-Powered Course Creation
  - _Skipped:_ #10 Trading (niche to traders), #19 Real Estate (niche to investors), #20 E-commerce (niche to shippers)
- **5 of 10 Skills** — #52, #54, #55, #59, #61

**Rationale:** Cold-traffic hero offer for the generalist operator — founder, freelancer, consultant, solo. Full Foundations is non-negotiable (no operator should be missing any of them). AI-Op selection covers content, sales, ops, comms, and admin without bleeding into vertical-specific titles. Skills picks are the highest-leverage cross-cutting capabilities for daily operating life.

**Retail check:** ~$406 (Foundations) + ~$1,116 (AI-Op subset) + ~$330 (Skills subset) ≈ **$1,852**. PDF retail: $2,180. Variance ~15%. Could swap #15 Customer Support → #20 E-commerce ($87→$97) for +$10, or add #10 Trading instead of #15 for +$10. Doesn't materially change the offer; flagging for Raj's call.

---

## Profession Bundles (20)

Each bundle is named at PDF p28. Book counts and retail values are PDF-authoritative; book selections are proposed below.

---

### 2. The Lawyer's Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #24 AI for Lawyers ($147)
- **Foundations:** #04 Sales Conversation Decoded ($57), #08 Negotiation Field Manual ($47)
- **AI-Op:** #13 AI-Powered Email Marketing ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills:** #55 Negotiation — Advanced Tactics ($97)

**Sum:** $532 (PDF $520, +$12 ≈ on target)
**Rationale:** A modern law practice runs on negotiation, structured client conversation, and operational discipline. Bundle pairs AI-augmented legal craft (drafting, discovery, research) with the deal-making and ops backbone every small-firm attorney needs.

---

### 3. The Doctor's Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #25 AI for Doctors & Healthcare Practitioners ($147)
- **Foundations:** #02 Solo Operator's Compass ($47), #06 The Hiring Blueprint ($57)
- **AI-Op:** #15 AI-Powered Customer Support ($87), #18 AI-Powered Bookkeeping & Finance ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $492 (PDF $520, –$28)
**Rationale:** Modern practitioners run a practice, not just see patients. Bundle covers AI for clinical workflows + the solo-practice operating system + patient/staff communication + the finance/admin backbone that distinguishes a thriving practice from a stressed one. Compliance frame: "for practitioner training only" (PDF p34).

---

### 4. The CPA & Accountant Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #26 AI for Accountants & CPAs ($147)
- **Foundations:** #06 The Hiring Blueprint ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #18 AI-Powered Bookkeeping & Finance ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #56 Project Management Field Guide ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** CPAs scale through firm operations and client communication, not just tax expertise. Pairs the profession depth with the AI-powered finance/comms backbone, firm-growth fundamentals, and the project discipline tax/audit season demands.

---

### 5. The Real Estate Agent Bundle — $147 · 6 books · $420 retail 🟡
- **Profession:** #29 AI for Real Estate Agents ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #12 AI-Powered Lead Generation ($97), #22 AI-Powered Video & Social ($97)
- **Skills:** #52 Mastering Sales Calls ($67)

**Sum:** $472 (PDF $420, +$52)
**Rationale:** Real estate is sales + marketing + lead gen + listing presentation. Bundle equips agents with AI lead gen, modern social/video for listings, and the sales conversation backbone. Higher than PDF retail — could swap #04 → #03 Money (–$10) but the sales-conversation fit is too strong; keeping as-is.

---

### 6. The Architect & Designer Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #28 AI for Architects & Designers ($147)
- **Foundations:** #02 Solo Operator's Compass ($47), #04 Sales Conversation Decoded ($57)
- **AI-Op:** #21 AI-Powered Copywriting ($87), #22 AI-Powered Video & Social ($97)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** Architects and designers sell on craft *and* business acumen. Bundle pairs creative AI workflows (concept generation, drafting, client presentations) with the solo-operator discipline, client-comm copy, and the strategic framing that lets a small studio compete with bigger firms.

---

### 7. The Financial Advisor Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #30 AI for Financial Advisors ($147)
- **Foundations:** #03 Money — The Beginner's System ($47), #07 Marketing — First Principles ($57)
- **AI-Op:** #13 AI-Powered Email Marketing ($97), #14 AI-Powered Sales Operations ($97)
- **Skills:** #59 Decision-Making Frameworks ($67)

**Sum:** $512 (PDF $520, –$8 ✓)
**Rationale:** Advisors win on trust, communication cadence, and rigor. Bundle covers AI for client research + compliance + portfolio commentary, the email/sales engine that runs an advisory book, and the decision discipline that distinguishes durable advisors. Compliance frame: "educational · not investment advice" (PDF p34).

---

### 8. The Consultant Bundle — $197 · 6 books · $520 retail 🟡
- **Profession:** #31 AI for Consultants ($147)
- **Foundations:** #07 Marketing — First Principles ($57), #08 Negotiation Field Manual ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $502 (PDF $520, –$18)
**Rationale:** Consultants ship thinking and deliverables. Bundle covers AI for deck/research workflows, the marketing/negotiation backbone for landing engagements, and strategic discipline as the underlying craft.

---

### 9. The Founder's Bundle — $247 · 8 books · $680 retail 🟡

The largest profession bundle. Founders are generalists — no profession-specific book; instead more Foundations and AI-Op depth.

- **Foundations (4):** #01 First-Time Founder's Playbook ($47), #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47), #07 Marketing — First Principles ($57)
- **AI-Op (3):** #11 AI-Powered Content Creation ($97), #12 AI-Powered Lead Generation ($97), #16 AI-Powered Operations & SOPs ($87)
- **Skills (1):** #60 Strategic Thinking Toolkit ($67)

**Sum:** $546 (PDF $680, –$134)
**Rationale:** Most ambitious bundle — full founder operating system: starter playbook + solo discipline + productivity OS + marketing/content/leads/ops + strategic thinking. Retail variance is significant; if Raj wants closer to $680, swap #60 → #55 Negotiation Advanced (+$30) and add #08 Negotiation Field Manual or #14 AI-Powered Sales Ops to push the count to 9. Flagging for review.

---

### 10. The Marketer's Bundle — $197 · 7 books · $580 retail 🟡
- **Profession:** #34 AI for Marketers ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #13 AI-Powered Email Marketing ($97), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $559 (PDF $580, –$21 ✓)
**Rationale:** Marketers run content, email, copy, and the sales conversations that close them. Bundle = the complete modern marketing operating system, AI-augmented end to end.

---

### 11. The Engineer's Bundle — $147 · 6 books · $420 retail 🟡
- **Profession:** #32 AI for Engineers ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47)
- **AI-Op:** #16 AI-Powered Operations & SOPs ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $432 (PDF $420, +$12 ✓)
**Rationale:** Engineers ship faster when they communicate better and run themselves like an operator. Bundle pairs AI dev workflows with productivity discipline, operations rigor, and the comm/writing chops that compound a senior IC's leverage.

---

### 12. The Teacher's Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #27 AI for Teachers & Educators ($97)
- **Foundations:** #05 The Productivity Operating System ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #23 AI-Powered Course Creation ($87)
- **Skills:** #53 Public Speaking & Influence ($67)

**Sum:** $395 (PDF $320, +$75)
**Rationale:** Teachers prep, present, and produce content. AI-powered course + content creation + public speaking + productivity OS = the modern educator's complete operating kit. Higher than PDF retail; tradeoff is content depth vs. exact retail match — defending the depth.

---

### 13. The Therapist & Coach Bundle — $147 · 5 books · $420 retail 🟡
- **Profession:** #36 AI for Therapists & Coaches ($147)
- **Foundations:** #02 Solo Operator's Compass ($47)
- **AI-Op:** #15 AI-Powered Customer Support ($87), #18 AI-Powered Bookkeeping & Finance ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $435 (PDF $420, +$15 ✓)
**Rationale:** Coaches and therapists run one-person practices — clients, finances, communications. Bundle is the operational scaffolding around the craft, leaving the clinical/therapeutic technique to licensed training (PDF p34: "practice tools · not clinical training").

---

### 14. The Recruiter & HR Bundle — $147 · 6 books · $420 retail 🟡
- **Profession:** #35 AI for Recruiters & HR ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #06 The Hiring Blueprint ($57)
- **AI-Op:** #17 AI-Powered Hiring & Recruiting ($87), #21 AI-Powered Copywriting ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $452 (PDF $420, +$32 ✓)
**Rationale:** Recruiting is sourcing + selling + writing. Bundle pairs the AI recruiting workflow with the hiring foundation, outreach copy, and the conversation/communication mastery every recruiter needs.

---

### 15. The Photographer & Creator Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #37 AI for Photographers & Creators ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #53 Public Speaking & Influence ($67)

**Sum:** $365 (PDF $320, +$45)
**Rationale:** Creators are solo businesses with audiences. Bundle covers AI creative workflow + audience building (video/social) + marketing fundamentals + the on-camera/presenting skill that distinguishes a creator from a freelancer.

---

### 16. The Restaurant Owner Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #38 AI for Restaurant Owners ($97)
- **Foundations:** #06 The Hiring Blueprint ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #58 Leadership for Small Teams ($67)

**Sum:** $375 (PDF $320, +$55)
**Rationale:** Restaurants live or die on staff, marketing, and social. Bundle is the operating playbook for a modern small-restaurant owner — hire well, market consistently, lead a kitchen and front-of-house team.

---

### 17. The Construction & Trades Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #39 AI for Construction & Trades ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #06 The Hiring Blueprint ($57)
- **AI-Op:** #12 AI-Powered Lead Generation ($97)
- **Skills:** #55 Negotiation — Advanced Tactics ($97)

**Sum:** $405 (PDF $320, +$85)
**Rationale:** Trades businesses sell bids, hire crews, and negotiate scopes/change-orders. Bundle pairs AI ops with the negotiation/sales backbone every contractor needs. High retail variance; could swap #55 → #59 Decision-Making (–$30) but negotiation is too core to drop.

---

### 18. The Software Developer Bundle — $147 · 6 books · $420 retail 🟡
- **Profession:** #40 AI for Software Developers ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #05 The Productivity Operating System ($47)
- **AI-Op:** #16 AI-Powered Operations & SOPs ($87), #23 AI-Powered Course Creation ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $432 (PDF $420, +$12 ✓)
**Rationale:** Modern devs ship product, write docs, and increasingly monetize their knowledge (courses, content). Bundle is the operator's kit for a developer who wants to scale themselves — not just a "better engineer" track. Distinct from #32 AI for Engineers (which is more IC-focused).

---

### 19. The Product Manager Bundle — $147 · 6 books · $420 retail 🟡
- **Profession:** #41 AI for Product Managers ($97)
- **Foundations:** #04 Sales Conversation Decoded ($57), #07 Marketing — First Principles ($57)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #21 AI-Powered Copywriting ($87)
- **Skills:** #60 Strategic Thinking Toolkit ($67)

**Sum:** $462 (PDF $420, +$42 ✓)
**Rationale:** PMs synthesize, communicate, decide. Bundle covers AI for specs/roadmaps + the writing/marketing backbone modern PMs need + the strategic discipline that separates senior from junior.

---

### 20. The Researcher's Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #42 AI for Researchers & Academics ($97)
- **Foundations:** #05 The Productivity Operating System ($47)
- **AI-Op:** #11 AI-Powered Content Creation ($97), #23 AI-Powered Course Creation ($87)
- **Skills:** #61 Communication Mastery ($67)

**Sum:** $395 (PDF $320, +$75)
**Rationale:** Researchers produce and publish. Bundle is the AI writing + teaching + publishing stack for the modern academic — useful equally for industry researchers building authority.

---

### 21. The Wellness Professional Bundle — $97 · 5 books · $320 retail 🟡
- **Profession:** #43 AI for Personal Trainers & Wellness Pros ($97)
- **Foundations:** #02 Solo Operator's Compass ($47), #07 Marketing — First Principles ($57)
- **AI-Op:** #22 AI-Powered Video & Social ($97)
- **Skills:** #58 Leadership for Small Teams ($67)

**Sum:** $365 (PDF $320, +$45)
**Rationale:** Wellness pros are sole proprietors with audiences (or small teams of 2–5). Bundle is the marketing + social + solo-business foundation + people-leadership for the trainer/wellness pro running a real business, not a hobby.

---

## Open questions for Raj

1. **Operator's Master Bundle:** keep the #15/#19/#20 skips, or swap one in for retail-match?
2. **Founder's Bundle:** PDF says 8 books / $680 retail — proposed 8 books sum to $546. Add a 9th book or accept the variance?
3. **Construction & Trades:** swap #55 → #59 to match retail closer, or keep negotiation?
4. **Real Estate Agent:** swap #04 → #03 (–$10) to match retail closer, or keep sales conversation?
5. **Bundle taglines:** PDF doesn't supply marketing taglines for the 21 bundles. Want me to draft a one-line tagline per bundle in a separate review pass, or hold for the Master Bundle long-form copywriting session?
6. **Composition format in catalog.json:** currently `book_ids: []` + `composition_status: "pending-review"`. When you lock these, do you want me to put book IDs in `catalog.json` as `["24", "04", "08", ...]`, or as a structured `{ profession: "24", foundations: ["04","08"], ai_op: ["13","16"], skills: ["55"] }` that preserves the slot reasoning?

When you've reviewed, edit this file (change 🟡 → ✅ + any swaps) and Session 3 will sync `src/data/catalog.json`.
