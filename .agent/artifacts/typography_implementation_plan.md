# Typography System Implementation Plan

## Cœur Nanterre – Global Design System

---

## 1. Typography Analysis Summary

After analyzing all CSS files and components, I found **scattered typography definitions** with inconsistent values. Below is a comprehensive audit of all typography styles discovered:

---

## 2. Current Typography Audit

### Existing Global Classes (`global.css`)

| Class                 | Font Size                      | Weight | Line Height | Letter Spacing | Color    |
| --------------------- | ------------------------------ | ------ | ----------- | -------------- | -------- |
| `.type-section-title` | clamp(2rem, 4vw, 3rem)         | 600    | 1.1         | -0.02em        | primary  |
| `.type-lead`          | clamp(1.125rem, 1.5vw, 1.5rem) | 500    | 1.5         | —              | primary  |
| `.type-body`          | clamp(1rem, 1.25vw, 1.125rem)  | 400    | 1.6         | —              | gray-900 |
| `.type-body-sm`       | 0.875rem                       | —      | 1.5         | —              | gray-500 |

### Section-Specific Typography (Duplicated/Custom)

| Section              | Class                                 | Font Size                      | Weight | Letter Spacing | Notes               |
| -------------------- | ------------------------------------- | ------------------------------ | ------ | -------------- | ------------------- |
| **Hero**             | `.hero__title`                        | clamp(3rem, 6vw, 6.5rem)       | 700    | -0.03em        | H1 main title       |
| **Hero**             | `.hero__tagline`                      | 1.125rem                       | 500    | 0.05em         | Subtitle tag        |
| **Hero**             | `.hero__subtitle`                     | clamp(1.25rem, 2vw, 1.75rem)   | 400    | —              | H2 subtitle         |
| **Hero**             | `.hero__accroche`                     | 1rem                           | —      | —              | Body text           |
| **Architecture**     | `.architecture__title`                | clamp(2.5rem, 4vw, 3.5rem)     | —      | —              | H2 title            |
| **Architecture**     | `.architecture__subtitle`             | 1.125rem                       | 500    | 0.05em         | Tagline             |
| **Architecture**     | `.architecture__paragraph`            | 1.125rem                       | —      | —              | Body                |
| **Architecture**     | `.architecture__caption`              | 0.875rem                       | —      | 0.05em         | Caption             |
| **Connectivity**     | `.connectivity__title`                | clamp(2.5rem, 5vw, 4rem)       | —      | —              | H2 title            |
| **Connectivity**     | `.connectivity__intro`                | 1.125rem                       | —      | —              | Intro text          |
| **Connectivity**     | `.connectivity__card-title`           | 3rem                           | 400    | -0.02em        | **H3 card title** ★ |
| **Connectivity**     | `.connectivity__card-text`            | 1.25rem                        | 300    | —              | Card body           |
| **Lifestyle**        | `.lifestyle__title`                   | clamp(2.5rem, 5vw, 3.5rem)     | 700    | 0.05em         | H2 title            |
| **Lifestyle**        | `.lifestyle__subtitle`                | 1.25rem                        | —      | —              | Subtitle            |
| **Lifestyle**        | `.lifestyle__marquee-list li`         | clamp(1.25rem, 3vw, 2rem)      | 300    | 0.08em         | Marquee text        |
| **Lifestyle**        | `.lifestyle__spec-text`               | 0.9375rem                      | —      | —              | Spec label          |
| **Lifestyle**        | `.lifestyle__note-text`               | 0.875rem                       | —      | —              | Note/caption        |
| **Location**         | `.location__address`                  | 1.125rem                       | 500    | 0.05em         | Address tag         |
| **Location**         | `.location__narrative`                | clamp(1rem, 1.125rem, 1.25rem) | —      | —              | Body                |
| **Program Overview** | `.program-overview__title`            | clamp(2.5rem, 4vw, 3.5rem)     | —      | —              | H2 title            |
| **Program Overview** | `.program-overview__subtitle`         | 1.125rem                       | —      | —              | Subtitle            |
| **Program Overview** | `.program-overview__node-label`       | 0.75rem                        | 600    | 0.08em         | Label small         |
| **Program Overview** | `.program-overview__node-title`       | 1.25rem                        | 600    | —              | H4/node title       |
| **Program Overview** | `.program-overview__node-description` | 1rem                           | —      | —              | Body                |
| **Program Overview** | `.program-overview__number`           | 4rem                           | 700    | —              | Display number      |
| **Program Overview** | `.program-overview__number-label`     | 0.875rem                       | 600    | 0.1em          | Label               |
| **Program Overview** | `.program-overview__feature-text`     | 0.875rem                       | 500    | —              | Feature label       |
| **Program Overview** | `.program-overview__discrete`         | 0.875rem                       | —      | —              | Disclaimer          |
| **Program Overview** | `.program-overview__visual-text`      | 1rem                           | —      | —              | Visual caption      |
| **Project Essence**  | `.project-essence__title`             | (inherits type-section-title)  | —      | —              | H2                  |
| **Credit Simulator** | `.credit-simulator__title`            | 1.25rem                        | 600    | 0.1em          | Header label        |
| **Credit Simulator** | `.credit-simulator__step-question`    | clamp(2rem, 4vw, 3.5rem)       | 700    | -0.02em        | Step H3             |
| **Header**           | `.header__nav-link`                   | 0.9375rem                      | 400    | —              | Nav link            |
| **Header**           | `.header__mobile-link`                | 1rem                           | —      | —              | Mobile nav          |

---

## 3. Proposed Global Typography Hierarchy

Based on analysis and the user's requirements, here is the standardized typography system:

### Headings (h1-h6)

| Class      | Element | Font Size                  | Weight | Line Height | Letter Spacing | Transform | Color   |
| ---------- | ------- | -------------------------- | ------ | ----------- | -------------- | --------- | ------- |
| `.type-h1` | h1      | clamp(3rem, 6vw, 6.5rem)   | 700    | 0.9         | -0.03em        | uppercase | primary |
| `.type-h2` | h2      | clamp(2.5rem, 4vw, 3.5rem) | 700    | 1.1         | -0.02em        | uppercase | primary |
| `.type-h3` | h3      | 3rem                       | 400    | 1.1         | -0.02em        | none      | inherit |
| `.type-h4` | h4      | 1.5rem                     | 600    | 1.3         | —              | none      | primary |
| `.type-h5` | h5      | 1.25rem                    | 600    | 1.3         | —              | none      | primary |
| `.type-h6` | h6      | 1rem                       | 600    | 1.4         | —              | uppercase | primary |

### Body & Utility Text

| Class           | Font Size                      | Weight | Line Height | Letter Spacing | Color                |
| --------------- | ------------------------------ | ------ | ----------- | -------------- | -------------------- |
| `.type-lead`    | clamp(1.125rem, 1.5vw, 1.5rem) | 500    | 1.5         | —              | primary              |
| `.type-body`    | clamp(1rem, 1.25vw, 1.125rem)  | 400    | 1.6         | —              | gray-700             |
| `.type-body-lg` | 1.25rem                        | 300    | 1.6         | —              | gray-700             |
| `.type-body-sm` | 0.875rem                       | 400    | 1.5         | —              | gray-500             |
| `.type-label`   | 0.75rem                        | 600    | 1.4         | 0.08em         | gray-500 (uppercase) |
| `.type-caption` | 0.875rem                       | 400    | 1.5         | 0.05em         | gray-500 (uppercase) |
| `.type-tagline` | 1.125rem                       | 500    | 1.4         | 0.05em         | primary (uppercase)  |
| `.type-display` | 4rem                           | 700    | 1           | —              | primary              |

---

## 4. Files to Modify

### Phase 1: Update `global.css` (Add Typography System)

| Line Range | Action      | Description                                           |
| ---------- | ----------- | ----------------------------------------------------- |
| 101-137    | **Replace** | Replace existing typography block with full hierarchy |

### Phase 2: Update Section CSS Files

| File                   | Lines   | Current Class                         | Replace With        | Action               |
| ---------------------- | ------- | ------------------------------------- | ------------------- | -------------------- |
| `hero.css`             | 73-82   | `.hero__title`                        | Use `.type-h1` base | Inherit + override   |
| `hero.css`             | 93-102  | `.hero__tagline`                      | Use `.type-tagline` | Inherit              |
| `hero.css`             | 118-125 | `.hero__subtitle`                     | Use `.type-lead`    | Inherit              |
| `hero.css`             | 127-132 | `.hero__accroche`                     | Use `.type-body`    | Inherit              |
| `architecture.css`     | 29-35   | `.architecture__title`                | Use `.type-h2`      | Inherit              |
| `architecture.css`     | 44-54   | `.architecture__subtitle`             | Use `.type-tagline` | Inherit              |
| `architecture.css`     | 64-70   | `.architecture__paragraph`            | Use `.type-body`    | Inherit              |
| `architecture.css`     | 100-107 | `.architecture__caption`              | Use `.type-caption` | Inherit              |
| `connectivity.css`     | 36-40   | `.connectivity__title`                | Use `.type-h2`      | Inherit              |
| `connectivity.css`     | 42-48   | `.connectivity__intro`                | Use `.type-body`    | Inherit              |
| `connectivity.css`     | 110-116 | `.connectivity__card-title`           | Use `.type-h3`      | Inherit              |
| `connectivity.css`     | 118-124 | `.connectivity__card-text`            | Use `.type-body-lg` | Inherit              |
| `lifestyle.css`        | 31-41   | `.lifestyle__title`                   | Use `.type-h2`      | Inherit              |
| `lifestyle.css`        | 43-50   | `.lifestyle__subtitle`                | Use `.type-body-lg` | Inherit              |
| `lifestyle.css`        | 86-94   | `.lifestyle__marquee-list li`         | Custom (stays)      | —                    |
| `lifestyle.css`        | 145-150 | `.lifestyle__spec-text`               | Use `.type-body-sm` | Inherit              |
| `lifestyle.css`        | 164-170 | `.lifestyle__note-text`               | Use `.type-body-sm` | Inherit              |
| `location.css`         | 41-52   | `.location__address`                  | Use `.type-tagline` | Inherit              |
| `location.css`         | 54-65   | `.location__narrative`                | Use `.type-body`    | Inherit              |
| `program-overview.css` | 26-31   | `.program-overview__title`            | Use `.type-h2`      | Inherit              |
| `program-overview.css` | 33-40   | `.program-overview__subtitle`         | Use `.type-body`    | Inherit              |
| `program-overview.css` | 83-90   | `.program-overview__number`           | Use `.type-display` | Inherit              |
| `program-overview.css` | 101-110 | `.program-overview__number-label`     | Use `.type-label`   | Inherit              |
| `program-overview.css` | 148-153 | `.program-overview__feature-text`     | Use `.type-body-sm` | Inherit              |
| `program-overview.css` | 277-284 | `.program-overview__node-label`       | Use `.type-label`   | Inherit              |
| `program-overview.css` | 286-292 | `.program-overview__node-title`       | Use `.type-h5`      | Inherit              |
| `program-overview.css` | 294-300 | `.program-overview__node-description` | Use `.type-body`    | Inherit              |
| `program-overview.css` | 334-339 | `.program-overview__visual-text`      | Use `.type-body`    | Inherit              |
| `program-overview.css` | 351-357 | `.program-overview__discrete`         | Use `.type-body-sm` | Inherit              |
| `project-essence.css`  | 42-47   | `.project-essence__title`             | Use `.type-h2`      | Inherit (with color) |
| `credit-simulator.css` | 39-48   | `.credit-simulator__title`            | Use `.type-label`   | Inherit              |
| `credit-simulator.css` | 91-97   | `.credit-simulator__step-question`    | Use `.type-h2`      | Inherit              |
| `header.css`           | 75-81   | `.header__nav-link`                   | Use `.type-body-sm` | Inherit              |
| `header.css`           | 177-185 | `.header__mobile-link`                | Use `.type-body`    | Inherit              |

### Phase 3: Update Component Files

| File                   | Lines | Current Class                      | Replace With        | Action  |
| ---------------------- | ----- | ---------------------------------- | ------------------- | ------- |
| `SimulatorStep.astro`  | 53-63 | `.credit-simulator__step-question` | Use `.type-h2`      | Inherit |
| `SimulatorField.astro` | 86-91 | `.simulator-field__label`          | Use `.type-body-sm` | Inherit |
| `Button.astro`         | 71-72 | Button font styles                 | Already using base  | —       |

### Phase 4: Update Section Astro Files (Add Classes to HTML)

| File                    | Line            | Change                                 |
| ----------------------- | --------------- | -------------------------------------- |
| `Hero.astro`            | 14-17           | Add `type-h1` to `.hero__title`        |
| `Hero.astro`            | 20-23           | Add `type-tagline` to `.hero__tagline` |
| `Hero.astro`            | 28              | Add `type-lead` to `.hero__subtitle`   |
| `Hero.astro`            | 33              | Add `type-body` to `.hero__accroche`   |
| `Architecture.astro`    | (title element) | Add `type-h2` class                    |
| `Connectivity.astro`    | (title element) | Add `type-h2` class                    |
| `Connectivity.astro`    | (card titles)   | Add `type-h3` class                    |
| `Lifestyle.astro`       | (title element) | Add `type-h2` class                    |
| `Location.astro`        | (title element) | Add `type-h2` class                    |
| `ProgramOverview.astro` | (title element) | Add `type-h2` class                    |
| `ProjectEssence.astro`  | (title element) | Add `type-h2` class                    |

---

## 5. Implementation Order

1. **Step 1**: Update `global.css` with full typography hierarchy
2. **Step 2**: Update each section CSS file to:
   - Remove duplicate font properties
   - Inherit from global classes where possible
   - Keep only layout-specific overrides (margins, colors for dark themes)
3. **Step 3**: Update Astro component files to add the appropriate global classes to HTML elements
4. **Step 4**: Test all sections for visual regression
5. **Step 5**: Clean up unused CSS rules

---

## 6. CSS Custom Properties to Add

```css
:root {
  /* Typography Scale */
  --font-size-display: 4rem;
  --font-size-h1: clamp(3rem, 6vw, 6.5rem);
  --font-size-h2: clamp(2.5rem, 4vw, 3.5rem);
  --font-size-h3: 3rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.25rem;
  --font-size-h6: 1rem;
  --font-size-lead: clamp(1.125rem, 1.5vw, 1.5rem);
  --font-size-body: clamp(1rem, 1.25vw, 1.125rem);
  --font-size-body-lg: 1.25rem;
  --font-size-body-sm: 0.875rem;
  --font-size-label: 0.75rem;
  --font-size-caption: 0.875rem;
}
```

---

## 7. Benefits After Implementation

1. **Single Source of Truth**: All typography defined in `global.css`
2. **Easy Global Updates**: Change a variable → updates everywhere
3. **Consistent Visual Language**: Uniform headings across all sections
4. **Reduced CSS Size**: Remove ~200+ lines of duplicate typography rules
5. **Better Maintainability**: Clear hierarchy for devs to follow
6. **Accessibility**: Proper heading levels and semantic structure

---

## Ready to Implement?

Reply with **"Proceed"** to start implementing the typography system, or specify any adjustments you'd like to make to the proposed hierarchy.
