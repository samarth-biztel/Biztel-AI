# BiztelAI Official Website

🌐 **Live site:** [https://ai-biztel.vercel.app/](https://ai-biztel.vercel.app/)

BiztelAI is presented as **the AI Decision Layer for Manufacturing**.

The website tells a simple story:

> Factory teams already have machines, operators, PLCs, quality systems and production data.  
> BiztelAI turns that operational reality into intelligence for the people who run the plant.

---

## 🧭 Website Story

The site is intentionally short, clear and product-led.

| Question | Website Answer |
|---|---|
| **What is BiztelAI?** | AI decision layer for manufacturing |
| **What exists today?** | AI Supervisor |
| **What does it do?** | Process Monitoring + Visual Inspection |
| **Where is BiztelAI going?** | AI Teammates for every manufacturing function |
| **What should visitors do next?** | Book a Demo |

---

## 🏗️ Information Architecture

The website has moved away from a single long-page structure.

| Page | Route | Purpose |
|---|---|---|
| 🏠 Home | `/` | Short 30-second overview of BiztelAI |
| 🧠 AI Supervisor | `/products/ai-supervisor` | Detailed current product page |
| 👥 AI Teammates | `/ai-teammates` | Future roadmap vision |
| 🏢 About | `/about` | Company positioning |
| ✉️ Contact | `/contact` | Demo/contact form |

Header navigation:

`Products | AI Teammates | About | Contact | Book a Demo`

---

## ✅ Current Product

### AI Supervisor

**AI Supervisor gives manufacturing teams real-time visual intelligence at the station level.**

It combines:

| Capability | Meaning |
|---|---|
| 👁️ **Process Monitoring** | Understand how the work is being performed |
| 🔎 **Visual Inspection** | Understand what is happening to the part |

Visual Inspection is **not positioned as a separate product**.  
It is a capability inside AI Supervisor.

---

## 🏭 Production Proof

The site highlights practical proof points:

| Proof Point | Status |
|---|---|
| Production deployment | ✅ |
| Global automotive OEM | ✅ |
| 50,000+ cycles monitored | ✅ |
| Edge AI + PLC integration | ✅ |

No confidential Stellantis production video is used.

---

## 🚧 Future / In Development

### AI Teammates

AI Teammates are clearly labeled as:

> **Future / In Development**

They are not presented as currently deployed products.

| Future AI Teammate | Example Question |
|---|---|
| 🏭 AI Production Engineer | Why did Line 3 lose 42 minutes? |
| ✅ AI Quality Engineer | What changed before the defect spike? |
| 📈 AI Process Engineer | Where is the process deviating from standard? |
| 🔧 AI Maintenance Engineer | What preceded the last five failures? |
| 📐 AI Design Engineer | What does this drawing require for manufacturing? |
| 📦 AI Supply Chain Engineer | What is driving this production or material delay? |

---

## 🎥 Demo Videos

The site is wired to use BiztelAI-owned demo videos:

| Demo | Expected File |
|---|---|
| Cleaning process | `public/videos/cleaning-process.mp4` |
| Tightening process | `public/videos/tightening-process.mp4` |

Current note:

⚠️ The MP4 files are not committed yet. Once the approved BiztelAI-owned videos are added with these filenames, the native video players will use them automatically.

---

## ❌ Removed / Avoided

The updated site intentionally removes or avoids:

| Item | Status |
|---|---|
| Generic Industries section | Removed |
| Long Line / Plant Intelligence explanations | Removed |
| AI Vision System as separate product | Avoided |
| AI Workflow Engine as separate product | Avoided |
| AI Intelligence Engine as separate product | Avoided |
| "Not four products" messaging | Removed |
| Placeholder "Coming Soon" video sections | Removed |
| Unrelated stock video placeholders | Removed |
| Internal/developer-facing homepage copy | Removed |

---

## 🛠️ Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Check types:

```bash
npm run typecheck
```

Lint:

```bash
npm run lint
```

---

## ✅ Final Visitor Test

A new visitor should understand this within 30 seconds:

1. BiztelAI is the **AI decision layer for manufacturing**.
2. The current product is **AI Supervisor**.
3. AI Supervisor does **Process Monitoring + Visual Inspection**.
4. The future vision is **AI Teammates for every manufacturing function**.
5. The next action is **Book a Demo**.
