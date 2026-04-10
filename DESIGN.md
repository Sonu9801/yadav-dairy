# Design Brief — Yadav Dairy

## Direction
Premium dairy e-commerce (Zomato/Swiggy-inspired) with mobile-first UI, dairy blue primary (#2563eb), soft pastel backgrounds, floating cart, smooth animations, dark mode.

## Tone
Premium-casual: fresh, confident, food-forward, trustworthy. Soft pastels + dairy blue = premium grocery app aesthetic.

## Differentiation
Dairy blue primary (trust, freshness) + soft pastel cream backgrounds + warm burnt-orange accents. Bilingual product names, unique SVG branded packaging with "Yadav Dairy" printed, floating cart with pulse, smooth card lift on hover, dark mode toggle.

## Color Palette

| Token       | Light OKLCH   | Dark OKLCH    | Role                              |
| ----------- | ------------- | ------------- | --------------------------------- |
| background  | 0.98 0.008 95 | 0.11 0.015 95 | Soft cream (light), charcoal (dark) |
| foreground  | 0.14 0.03 50  | 0.94 0.01 95  | Deep charcoal (light), off-white (dark) |
| card        | 0.99 0.005 240| 0.15 0.018 95 | Pure white (light), slate (dark)  |
| primary     | 0.52 0.16 215 | 0.64 0.16 215 | Dairy blue (#2563eb), rich & warm |
| accent      | 0.62 0.22 25  | 0.68 0.22 25  | Burnt-orange, warm CTAs           |
| muted       | 0.90 0.008 95 | 0.19 0.018 95 | Soft grey, gentle dividers        |

## Typography
Display: Space Grotesk — geometric, confident, category + hero text. Body: Satoshi — warm, friendly, readable product labels. Mono: JetBrains Mono — technical consistency. Scale: H1 `text-5xl md:text-7xl`, H2 `text-3xl`, body `text-base`, label `text-sm`.

## Elevation & Depth
Soft shadows: subtle (2px, 4% opacity), card (4px, 8% opacity), elevated (8px, 12% opacity). Header sticky border-b, footer border-t.

## Structural Zones

| Zone    | Light Mode     | Dark Mode     | Treatment |
| ------- | -------------- | ------------- | --------- |
| Header  | card (white)   | card (slate)  | Sticky, border-b |
| Content | background (cream) | background (dark) | Alternating cards |
| Footer  | background (cream) | background (dark) | border-t |

## Spacing & Rhythm
Mobile-first: 1rem section gaps, 0.5rem card padding, 1.5rem heading gaps. Whitespace around product cards for scannability.

## Component Patterns
Buttons: accent background, rounded-lg, hover opacity-90, shadow-card. Cards: card background, shadow-subtle, card-hover (translate-y, shadow-elevated lift). Icons: cart floats 3s, add-to-cart pulses 2s.

## Motion
Entrance: fade-in 0.3s, slide-up 0.3s on card load. Hover: transition-smooth 0.3s cubic-bezier on all interactive elements. Decorative: float (cart icon, 3s), pulse-accent (add-to-cart, 2s). Reduced motion: all animations disabled.

## Constraints
OKLCH palette only. Mobile-first. Space Grotesk + Satoshi + JetBrains Mono. Dark mode high-contrast. Dairy blue for trust, burnt-orange for CTAs only.

## Signature Detail
Soft pastel cream + dairy blue + warm burnt-orange creates premium, approachable grocery app aesthetic distinct from generic SaaS blue.
