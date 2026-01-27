# 🟦 STACK 01 — ASTRO + VUE + GSAP

> **Preferred Stack for ORIGIN & Most Agency Websites**

## 🎯 Purpose

Use this stack to build:
- High-performance landing pages
- Multi-page marketing websites
- Awwwards-level motion & reactivity
- SEO-first agency sites
- Websites with light-to-medium interactivity

---

## 🧱 Technology Stack Overview

```mermaid
graph TB
    subgraph Core["🔷 Core Technologies"]
        ASTRO["🚀 Astro<br/>SSG-First Framework"]
        VUE["💚 Vue.js<br/>Reactive UI Islands"]
        GSAP["🎬 GSAP + ScrollTrigger<br/>Animation Engine"]
        JS["⚡ JavaScript ES6+"]
        HTML["📄 Semantic HTML"]
    end

    subgraph Styling["🎨 Styling"]
        CSS["🎨 CSS / SCSS"]
        TAILWIND["🌊 Tailwind CSS<br/>(Optional)"]
    end

    subgraph Tooling["🛠️ Tooling"]
        VITE["⚡ Vite<br/>(Built into Astro)"]
        HOSTING["☁️ Static Hosting<br/>Vercel / Netlify / CF Pages"]
    end

    ASTRO --> VUE
    ASTRO --> GSAP
    ASTRO --> VITE
    VUE --> JS
    GSAP --> JS
    ASTRO --> HTML
    CSS --> ASTRO
    TAILWIND --> ASTRO
    VITE --> HOSTING

    style ASTRO fill:#FF5D01,stroke:#fff,color:#fff
    style VUE fill:#42b883,stroke:#fff,color:#fff
    style GSAP fill:#88CE02,stroke:#fff,color:#000
    style VITE fill:#646CFF,stroke:#fff,color:#fff
```

---

## 🧠 Architecture Philosophy

```mermaid
flowchart LR
    subgraph Ownership["Responsibility Distribution"]
        direction TB
        A["🚀 ASTRO"]
        V["💚 VUE"]
        G["🎬 GSAP"]
    end

    subgraph AstroOwns["Astro Owns"]
        R["📍 Routing"]
        L["📐 Layouts"]
        S["🔍 SEO"]
        P["⚡ Performance"]
    end

    subgraph VueOwns["Vue Owns"]
        ST["📊 State Management"]
        UI["🖥️ UI Logic"]
        IS["🏝️ Interactive Islands"]
    end

    subgraph GsapOwns["GSAP Owns"]
        M["🎬 All Motion"]
        T["⏱️ Timelines"]
        SC["📜 Scroll Animations"]
    end

    A --> AstroOwns
    V --> VueOwns
    G --> GsapOwns

    style A fill:#FF5D01,stroke:#fff,color:#fff
    style V fill:#42b883,stroke:#fff,color:#fff
    style G fill:#88CE02,stroke:#fff,color:#000
```

---

## 🏗️ Page Architecture

```mermaid
flowchart TB
    subgraph StaticFirst["📄 Static-First Architecture"]
        direction TB
        PAGE["🌐 Astro Page<br/>(Static by Default)"]
        
        subgraph Islands["🏝️ Vue Islands"]
            I1["Interactive Form"]
            I2["Pricing Toggle"]
            I3["Navigation Menu"]
        end
        
        subgraph Animation["🎬 GSAP Layer"]
            A1["Page Loader"]
            A2["Scroll Animations"]
            A3["Micro-interactions"]
        end
    end

    PAGE --> Islands
    PAGE --> Animation
    
    note1["✅ JS loaded only where needed"]
    note2["✅ Minimal payload"]
    note3["✅ Maximum performance"]

    style PAGE fill:#FF5D01,stroke:#fff,color:#fff
    style I1 fill:#42b883,stroke:#fff,color:#fff
    style I2 fill:#42b883,stroke:#fff,color:#fff
    style I3 fill:#42b883,stroke:#fff,color:#fff
    style A1 fill:#88CE02,stroke:#fff,color:#000
    style A2 fill:#88CE02,stroke:#fff,color:#000
    style A3 fill:#88CE02,stroke:#fff,color:#000
```

---

## 🎬 Animation System

```mermaid
flowchart TB
    subgraph AnimationTypes["🎬 Supported Animations"]
        direction TB
        
        subgraph Global["🌍 Global"]
            GL["Global Loaders<br/>(First Visit / Session)"]
            PT["Page Transitions<br/>(GSAP Controlled)"]
        end
        
        subgraph Scroll["📜 Scroll-Based"]
            SS["Scroll Storytelling"]
            SR["Scroll Reveals"]
            SP["Scroll Progress"]
        end
        
        subgraph Micro["✨ Micro-Interactions"]
            HV["Hover Effects"]
            TG["Toggle Animations"]
            CU["Cursor Interactions"]
        end
    end

    subgraph Properties["⚙️ Animation Properties"]
        TL["⏱️ Timeline-Based"]
        PR["🎯 Predictable"]
        HP["🚀 High-Performance"]
    end

    AnimationTypes --> Properties

    style GL fill:#88CE02,stroke:#fff,color:#000
    style PT fill:#88CE02,stroke:#fff,color:#000
    style SS fill:#88CE02,stroke:#fff,color:#000
    style SR fill:#88CE02,stroke:#fff,color:#000
    style SP fill:#88CE02,stroke:#fff,color:#000
    style HV fill:#88CE02,stroke:#fff,color:#000
    style TG fill:#88CE02,stroke:#fff,color:#000
    style CU fill:#88CE02,stroke:#fff,color:#000
```

---

## 🚀 Build & Deploy Flow

```mermaid
flowchart LR
    subgraph Development["💻 Development"]
        DEV["npm run dev"]
        VITE["⚡ Vite Dev Server"]
    end

    subgraph Build["🏗️ Build"]
        BUILD["npm run build"]
        SSG["📄 Static Generation"]
        OPT["⚡ Optimization"]
    end

    subgraph Deploy["☁️ Deploy"]
        DIST["dist/"]
        VERCEL["Vercel"]
        NETLIFY["Netlify"]
        CF["Cloudflare Pages"]
    end

    DEV --> VITE
    VITE --> BUILD
    BUILD --> SSG
    SSG --> OPT
    OPT --> DIST
    DIST --> VERCEL
    DIST --> NETLIFY
    DIST --> CF

    style DEV fill:#FF5D01,stroke:#fff,color:#fff
    style BUILD fill:#FF5D01,stroke:#fff,color:#fff
    style VERCEL fill:#000,stroke:#fff,color:#fff
    style NETLIFY fill:#00C7B7,stroke:#fff,color:#fff
    style CF fill:#F38020,stroke:#fff,color:#fff
```

---

## ✅ Decision Flowchart: When to Use This Stack

```mermaid
flowchart TB
    START["🎯 New Project"]
    
    Q1{"Does motion & storytelling<br/>matter for this project?"}
    Q2{"Is SEO critical?"}
    Q3{"Do you need maximum<br/>control over animations?"}
    Q4{"Want premium feel<br/>without SPA bloat?"}
    Q5{"Need flexibility to scale<br/>from 1 → many pages?"}
    
    YES["✅ USE ASTRO + VUE + GSAP"]
    NO["❌ Consider Other Stack"]
    
    START --> Q1
    Q1 -->|Yes| Q2
    Q1 -->|No| NO
    Q2 -->|Yes| Q3
    Q2 -->|No| NO
    Q3 -->|Yes| Q4
    Q3 -->|No| NO
    Q4 -->|Yes| Q5
    Q4 -->|No| NO
    Q5 -->|Yes| YES
    Q5 -->|No| NO

    style YES fill:#22c55e,stroke:#fff,color:#fff
    style NO fill:#ef4444,stroke:#fff,color:#fff
    style START fill:#3b82f6,stroke:#fff,color:#fff
```

---

## 📋 Project Structure

```mermaid
flowchart TB
    subgraph Root["📁 Project Root"]
        direction TB
        
        subgraph Src["📁 src/"]
            PAGES["📁 pages/<br/>Astro pages & routing"]
            COMPONENTS["📁 components/<br/>Vue islands & Astro components"]
            LAYOUTS["📁 layouts/<br/>Page layouts"]
            STYLES["📁 styles/<br/>Global CSS/SCSS"]
            SCRIPTS["📁 scripts/<br/>GSAP animations"]
        end
        
        subgraph Public["📁 public/"]
            ASSETS["📁 assets/<br/>Static files"]
            FONTS["📁 fonts/"]
            IMAGES["📁 images/"]
        end
        
        CONFIG["⚙️ astro.config.mjs"]
        PACKAGE["📦 package.json"]
    end

    style PAGES fill:#FF5D01,stroke:#fff,color:#fff
    style COMPONENTS fill:#42b883,stroke:#fff,color:#fff
    style SCRIPTS fill:#88CE02,stroke:#fff,color:#000
```

---

## 🏆 Why This Stack Wins Awards

| Advantage | Description |
|-----------|-------------|
| **Best Performance-to-Power Ratio** | Maximum capability with minimal overhead |
| **Minimal JS Payload** | Only load JavaScript where needed |
| **No Framework Fight** | GSAP works naturally, no lifecycle conflicts |
| **Extremely SEO-Friendly** | Static HTML by default |
| **Easy to Scale** | From 1 page to many pages effortlessly |
| **Ideal for Marketing Sites** | Perfect for award-level agency work |

---

## 🎯 Ideal Use Cases

- ✅ Motion & storytelling matter
- ✅ SEO is critical
- ✅ Maximum animation control needed
- ✅ Premium feel required
- ✅ Flexibility without SPA bloat
