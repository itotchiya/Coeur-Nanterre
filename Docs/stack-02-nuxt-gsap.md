# 🟩 STACK 02 — NUXT + GSAP

> **Full Reactive / App-Like Creative Websites**

## 🎯 Purpose

Use this stack to build:
- Highly interactive websites
- App-like creative experiences
- Heavy page transitions
- Complex reactive logic
- CMS-driven or multilingual sites

---

## 🧱 Technology Stack Overview

```mermaid
graph TB
    subgraph Core["🔷 Core Technologies"]
        NUXT["💚 Nuxt.js<br/>Vue Meta-Framework"]
        VUE["💚 Vue.js<br/>Fully Reactive"]
        GSAP["🎬 GSAP + ScrollTrigger<br/>Animation Engine"]
        JS["⚡ JavaScript ES6+"]
    end

    subgraph Styling["🎨 Styling"]
        CSS["🎨 CSS / SCSS"]
        TAILWIND["🌊 Tailwind CSS<br/>(Optional)"]
    end

    subgraph Rendering["🖥️ Rendering Modes"]
        SSR["🔄 SSR<br/>Server-Side Rendering"]
        SSG["📄 SSG<br/>Static Site Generation"]
        HYBRID["🔀 Hybrid<br/>Mixed Rendering"]
    end

    NUXT --> VUE
    NUXT --> GSAP
    VUE --> JS
    GSAP --> JS
    CSS --> NUXT
    TAILWIND --> NUXT
    NUXT --> SSR
    NUXT --> SSG
    NUXT --> HYBRID

    style NUXT fill:#00DC82,stroke:#fff,color:#000
    style VUE fill:#42b883,stroke:#fff,color:#fff
    style GSAP fill:#88CE02,stroke:#fff,color:#000
    style SSR fill:#3b82f6,stroke:#fff,color:#fff
    style SSG fill:#8b5cf6,stroke:#fff,color:#fff
    style HYBRID fill:#f59e0b,stroke:#fff,color:#000
```

---

## 🧠 Architecture Philosophy

```mermaid
flowchart LR
    subgraph Philosophy["🧠 Core Philosophy"]
        direction TB
        R1["Everything is Reactive<br/>by Default"]
        R2["Navigation = SPA Behavior"]
        R3["Page Transitions Built-in"]
        R4["More JS = More Control"]
    end

    subgraph Integration["⚠️ GSAP Integration"]
        I1["Must integrate with<br/>Vue Lifecycle"]
        I2["Careful cleanup of<br/>GSAP instances required"]
        I3["ScrollTrigger refresh<br/>management needed"]
    end

    Philosophy --> Integration

    style R1 fill:#00DC82,stroke:#fff,color:#000
    style R2 fill:#00DC82,stroke:#fff,color:#000
    style R3 fill:#00DC82,stroke:#fff,color:#000
    style R4 fill:#00DC82,stroke:#fff,color:#000
    style I1 fill:#f59e0b,stroke:#fff,color:#000
    style I2 fill:#f59e0b,stroke:#fff,color:#000
    style I3 fill:#f59e0b,stroke:#fff,color:#000
```

---

## 🏗️ SPA Architecture

```mermaid
flowchart TB
    subgraph SPAArch["📱 SPA-Like Architecture"]
        direction TB
        
        subgraph App["🌐 Nuxt App"]
            ROUTER["Vue Router<br/>(Built-in)"]
            LAYOUT["Persistent Layouts"]
            PAGES["Dynamic Pages"]
        end
        
        subgraph State["📊 State Layer"]
            PINIA["Pinia Store"]
            COMPOSABLES["Composables"]
            REACTIVE["Reactive Data"]
        end
        
        subgraph Animation["🎬 Animation Layer"]
            PT["Page Transitions"]
            NAV["Animated Navigation"]
            SCROLL["Scroll System"]
            CURSOR["Cursor Effects"]
        end
    end

    ROUTER --> LAYOUT
    LAYOUT --> PAGES
    PAGES --> State
    PAGES --> Animation
    State --> Animation

    style ROUTER fill:#00DC82,stroke:#fff,color:#000
    style LAYOUT fill:#00DC82,stroke:#fff,color:#000
    style PAGES fill:#00DC82,stroke:#fff,color:#000
    style PINIA fill:#42b883,stroke:#fff,color:#fff
    style PT fill:#88CE02,stroke:#fff,color:#000
    style NAV fill:#88CE02,stroke:#fff,color:#000
    style SCROLL fill:#88CE02,stroke:#fff,color:#000
    style CURSOR fill:#88CE02,stroke:#fff,color:#000
```

---

## 🎬 Animation System

```mermaid
flowchart TB
    subgraph Animations["🎬 Supported Animations"]
        direction TB
        
        subgraph PageLevel["🌐 Page Level"]
            GPT["Global Page Transitions"]
            PL["Persistent Layouts"]
            AN["Animated Navigation"]
        end
        
        subgraph Interactive["⚡ Interactive"]
            RSC["Reactive Scroll Systems"]
            RCU["Reactive Cursor Effects"]
            CSA["Complex State Animations"]
        end
    end

    subgraph Requirements["⚠️ Requirements"]
        LC["🔄 Lifecycle Awareness"]
        CL["🧹 GSAP Cleanup"]
        RF["♻️ ScrollTrigger Refresh"]
    end

    Animations --> Requirements

    style GPT fill:#88CE02,stroke:#fff,color:#000
    style PL fill:#88CE02,stroke:#fff,color:#000
    style AN fill:#88CE02,stroke:#fff,color:#000
    style RSC fill:#88CE02,stroke:#fff,color:#000
    style RCU fill:#88CE02,stroke:#fff,color:#000
    style CSA fill:#88CE02,stroke:#fff,color:#000
    style LC fill:#f59e0b,stroke:#fff,color:#000
    style CL fill:#f59e0b,stroke:#fff,color:#000
    style RF fill:#f59e0b,stroke:#fff,color:#000
```

---

## 🔄 Vue Lifecycle + GSAP Integration

```mermaid
sequenceDiagram
    participant C as Component
    participant V as Vue Lifecycle
    participant G as GSAP
    participant S as ScrollTrigger

    C->>V: onMounted()
    V->>G: Create Timeline
    G->>S: Register ScrollTrigger
    
    Note over C,S: Component Active
    
    C->>V: onBeforeUnmount()
    V->>G: timeline.kill()
    G->>S: ScrollTrigger.kill()
    V->>S: ScrollTrigger.refresh()
    
    Note over C,S: ✅ Clean Unmount
```

---

## 🖥️ Rendering Modes

```mermaid
flowchart TB
    subgraph Modes["🖥️ Available Rendering Modes"]
        direction LR
        
        subgraph SSR["🔄 SSR"]
            SSR1["Server renders HTML"]
            SSR2["Hydrates on client"]
            SSR3["Best for dynamic content"]
        end
        
        subgraph SSG["📄 SSG"]
            SSG1["Pre-rendered at build"]
            SSG2["Static HTML files"]
            SSG3["Best for marketing pages"]
        end
        
        subgraph Hybrid["🔀 Hybrid"]
            HYB1["Mix SSR + SSG"]
            HYB2["Per-route configuration"]
            HYB3["Maximum flexibility"]
        end
    end

    style SSR fill:#3b82f6,stroke:#fff,color:#fff
    style SSG fill:#8b5cf6,stroke:#fff,color:#fff
    style Hybrid fill:#f59e0b,stroke:#fff,color:#000
```

---

## ⚖️ Tradeoffs Analysis

```mermaid
flowchart TB
    subgraph Pros["✅ Advantages"]
        P1["Full UI State Control"]
        P2["App-Like Experiences"]
        P3["Strong Ecosystem"]
        P4["Vue-First Workflow"]
        P5["Built-in Routing & SSR"]
    end

    subgraph Cons["⚠️ Tradeoffs"]
        C1["More Complexity"]
        C2["More JavaScript Shipped"]
        C3["Lower Raw Performance"]
        C4["Higher Animation Maintenance"]
        C5["GSAP Lifecycle Management"]
    end

    subgraph Decision["🎯 Best For"]
        D1["Everything Interactive"]
        D2["App-Like UX Required"]
        D3["Complex State Logic"]
        D4["Accept Higher Complexity"]
    end

    Pros --> Decision
    Cons --> Decision

    style P1 fill:#22c55e,stroke:#fff,color:#fff
    style P2 fill:#22c55e,stroke:#fff,color:#fff
    style P3 fill:#22c55e,stroke:#fff,color:#fff
    style P4 fill:#22c55e,stroke:#fff,color:#fff
    style P5 fill:#22c55e,stroke:#fff,color:#fff
    style C1 fill:#ef4444,stroke:#fff,color:#fff
    style C2 fill:#ef4444,stroke:#fff,color:#fff
    style C3 fill:#ef4444,stroke:#fff,color:#fff
    style C4 fill:#ef4444,stroke:#fff,color:#fff
    style C5 fill:#ef4444,stroke:#fff,color:#fff
```

---

## ✅ Decision Flowchart: When to Use This Stack

```mermaid
flowchart TB
    START["🎯 New Project"]
    
    Q1{"Is everything<br/>highly interactive?"}
    Q2{"Does UX need to feel<br/>like an app?"}
    Q3{"Complex state &<br/>logic needed?"}
    Q4{"Do you accept<br/>higher complexity?"}
    Q5{"Need CMS or<br/>multilingual support?"}
    
    YES["✅ USE NUXT + GSAP"]
    NO["❌ Consider Astro Stack"]
    
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
    Q5 -->|No| YES

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
        
        subgraph Core["📁 Core"]
            PAGES["📁 pages/<br/>File-based routing"]
            COMPONENTS["📁 components/<br/>Vue components"]
            LAYOUTS["📁 layouts/<br/>Persistent layouts"]
            COMPOSABLES["📁 composables/<br/>Shared logic"]
        end
        
        subgraph Animation["📁 Animation"]
            PLUGINS["📁 plugins/<br/>GSAP registration"]
            TRANSITIONS["📁 transitions/<br/>Page transitions"]
        end
        
        subgraph Assets["📁 Assets"]
            STYLES["📁 assets/styles/<br/>Global CSS/SCSS"]
            PUBLIC["📁 public/<br/>Static files"]
        end
        
        CONFIG["⚙️ nuxt.config.ts"]
        PACKAGE["📦 package.json"]
    end

    style PAGES fill:#00DC82,stroke:#fff,color:#000
    style COMPONENTS fill:#42b883,stroke:#fff,color:#fff
    style COMPOSABLES fill:#42b883,stroke:#fff,color:#fff
    style PLUGINS fill:#88CE02,stroke:#fff,color:#000
    style TRANSITIONS fill:#88CE02,stroke:#fff,color:#000
```

---

## 🔧 GSAP Plugin Setup

```mermaid
flowchart LR
    subgraph Setup["🔧 GSAP Plugin Registration"]
        PLUGIN["plugins/gsap.client.ts"]
        GSAP["Import GSAP"]
        ST["Import ScrollTrigger"]
        REG["Register Plugin"]
        PROVIDE["Provide to App"]
    end

    PLUGIN --> GSAP
    GSAP --> ST
    ST --> REG
    REG --> PROVIDE

    style PLUGIN fill:#00DC82,stroke:#fff,color:#000
    style GSAP fill:#88CE02,stroke:#fff,color:#000
    style ST fill:#88CE02,stroke:#fff,color:#000
```

---

## 🏆 Comparison: When to Choose Each Stack

```mermaid
flowchart TB
    subgraph Compare["🏆 Stack Comparison"]
        direction LR
        
        subgraph Astro["🟦 Astro + Vue + GSAP"]
            A1["✅ Best Performance"]
            A2["✅ Minimal JS"]
            A3["✅ SEO-First"]
            A4["✅ Simple GSAP Integration"]
            A5["⚠️ Limited Reactivity"]
        end
        
        subgraph Nuxt["🟩 Nuxt + GSAP"]
            N1["✅ Full Reactivity"]
            N2["✅ App-Like Feel"]
            N3["✅ Strong Ecosystem"]
            N4["⚠️ More Complexity"]
            N5["⚠️ More JS Shipped"]
        end
    end

    style A1 fill:#22c55e,stroke:#fff,color:#fff
    style A2 fill:#22c55e,stroke:#fff,color:#fff
    style A3 fill:#22c55e,stroke:#fff,color:#fff
    style A4 fill:#22c55e,stroke:#fff,color:#fff
    style A5 fill:#f59e0b,stroke:#fff,color:#000
    style N1 fill:#22c55e,stroke:#fff,color:#fff
    style N2 fill:#22c55e,stroke:#fff,color:#fff
    style N3 fill:#22c55e,stroke:#fff,color:#fff
    style N4 fill:#f59e0b,stroke:#fff,color:#000
    style N5 fill:#f59e0b,stroke:#fff,color:#000
```

---

## 🎯 Ideal Use Cases

- ✅ Everything is interactive
- ✅ UX feels like an app
- ✅ Complex state & logic needed
- ✅ CMS-driven content
- ✅ Multilingual requirements
- ✅ Accept higher complexity for more power
