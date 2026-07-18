// lib/chatbot/knowledge.ts
//
// Static knowledge base for the R&R Digital Solutions chatbot.
//
// Why not a vector DB? This corpus is small (a handful of sections) and
// changes rarely. Standing up embeddings + a vector store (FAISS/Pinecone/etc)
// adds infra and latency for close to zero retrieval-quality benefit at this
// size. Instead we do lightweight keyword-based retrieval over these chunks
// (see retrieval.ts) — same "retrieve relevant context, then generate" RAG
// pattern, without the extra moving parts.
//
// To update what the bot knows: edit the `content` fields below. Keep each
// chunk focused on one topic so retrieval stays accurate.

export interface KnowledgeChunk {
  id: string;
  title: string;
  keywords: string[];
  content: string;
}

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: "company-overview",
    title: "Company Overview",
    keywords: [
      "company", "about", "r&r", "rr", "digital solutions", "who are you",
      "what is r&r", "history", "founded", "mission", "stats", "clients",
    ],
    content: `R&R Digital Solutions is a technology studio founded by industry veterans with a combined 10+ years in systems architecture and digital product strategy. The company was born out of a desire to bring high-level engineering precision to companies of all sizes. R&R has delivered 200+ successful deployments globally and maintains a 98% client retention rate. The company focuses on AI & automation, data analytics, full-stack development, and digital transformation for businesses of every size.`,
  },
  {
    id: "founder-sheroz",
    title: "Founder — Sheroz Khan",
    keywords: [
      "sheroz", "founder", "ceo", "strategy", "finance", "cso", "cfo",
      "sheroz khan", "leadership", "team",
    ],
    content: `Engr Sheroz Khan is the Founder and Chief Strategy/Finance Officer of R&R Digital Solutions. He leads strategy, client partnerships, and business operations, ensuring every project aligns with client goals and delivers measurable value. He holds a Bachelor's degree in Industrial Engineering from Mehran University of Engineering & Technology and has professional experience at Dawlance (Beko) and Haleon. His expertise spans process optimization, digital transformation, data analytics, and operational excellence. He bridges business strategy with technology so clients adopt smarter, more efficient solutions, with every engagement scoped clearly and executed efficiently.`,
  },
  {
    id: "founder-hasnain",
    title: "Co-Founder — Hasnain Zainulabdin",
    keywords: [
      "hasnain", "co-founder", "cofounder", "cto", "cpo", "technology",
      "production officer", "hasnain zainulabdin", "engineer", "ai engineer",
      "shariahease", "qanoondaan", "raabta",
    ],
    content: `Engr Hasnain Zainulabdin is the Co-Founder and Chief Technology/Production Officer of R&R Digital Solutions. He leads engineering, AI strategy, and technical delivery, designing intelligent software solutions for complex business challenges. He holds a Bachelor's degree in Software Engineering from the University of Sindh and completed a 1-year specialized AI & Data Science training program at SMIT. His expertise covers AI chatbots, RAG (retrieval-augmented generation) systems, FastAPI, automation, and full-stack development. He has led development of flagship platforms including ShariahEase (an AI-powered Islamic finance platform), QanoonDaan, and Raabta, delivering scalable, production-ready solutions that help businesses accelerate their digital transformation.`,
  },
  {
    id: "services-overview",
    title: "Services Offered",
    keywords: [
      "services", "offer", "what do you do", "capabilities", "solutions",
      "chatbot", "chatbots", "web app", "web application", "software",
      "ai integration", "automation", "analytics", "digitalization",
    ],
    content: `R&R Digital Solutions offers eight core services:
1. AI & Automation — Custom LLMs, predictive modeling, and autonomous workflows that redefine operational efficiency.
2. Data Analytics — Architecting data lakes and real-time visualization dashboards for informed decision-making.
3. Full-Stack Dev — Scalable, cloud-native web and mobile applications built with cutting-edge tech stacks.
4. Digitalization — Modernizing legacy systems and migrating infrastructure to secure, high-performance cloud environments.
5. Custom Chatbots — Conversational AI agents tailored to your business logic, trained on your data and voice.
6. Web Applications — High-performance, responsive web platforms engineered for speed, SEO, and seamless UX.
7. Custom Software — Bespoke software solutions designed around your exact workflows, not the other way around.
8. AI Integration — Embedding intelligent automation directly into your existing tools, CRMs, and pipelines.`,
  },
  {
    id: "process",
    title: "Working Process",
    keywords: [
      "process", "how do you work", "methodology", "steps", "discovery",
      "build", "deploy", "support", "workflow", "engagement",
    ],
    content: `R&R Digital Solutions follows a four-step protocol for every engagement:
1. Discovery — Deep audit of existing infrastructure and objective alignment.
2. Build — Agile development cycles with extreme emphasis on code quality.
3. Deploy — Seamless integration via CI/CD pipelines and load testing.
4. Support — Continuous monitoring and optimization for maximum uptime.`,
  },
  {
    id: "contact",
    title: "Contact & Social Links",
    keywords: [
      "contact", "email", "reach", "get in touch", "whatsapp", "linkedin",
      "facebook", "instagram", "social", "phone", "message", "hire",
      "inquiry", "quote",
    ],
    // NOTE: verify this is the email you want the bot to quote — the site's
    // Contact form mailto link currently points to a personal address.
    // Update this chunk to whichever address you want surfaced publicly.
    content: `You can reach R&R Digital Solutions by email at hasnainzainulabdin@gmail.com, or via the Contact page's project inquiry form on the website. Social channels: LinkedIn (linkedin.com/company/r&r-digital_solutions), Facebook, Instagram (@rr_digitalsolution), and WhatsApp. For a project inquiry, the best path is the Contact form on the website — it routes directly to the team with project type and details.`,
  },
];
