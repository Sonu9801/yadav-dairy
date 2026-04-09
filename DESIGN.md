# Design Brief

## Direction

Yadav Dairy — modern dairy e-commerce platform inspired by Zomato/Swiggy/Zepto with mobile-first, clean minimal interface.

## Tone

Premium-casual consumer retail: trustworthy, snappy, unpretentious. Confident simplicity without playfulness or corporate formality.

## Differentiation

Sticky search+cart header, card-based product grid with category carousel, bilingual product names (English + Hindi), smooth hover animations, and dairy-blue primary tied to milk/freshness.

## Color Palette

| Token      | OKLCH              | Role                                        |
| ---------- | ------------------ | ------------------------------------------- |
| background | 0.97 0.008 75      | Crisp warm off-white (light mode)           |
| foreground | 0.18 0.02 50       | Deep charcoal text                          |
| card       | 1.0 0.004 240      | Pure white with cool undertone              |
| primary    | 0.48 0.18 240      | Fresh dairy-blue (trustworthy, modern)      |
| accent     | 0.58 0.16 30       | Warm coral-orange (CTAs, urgency)           |
| muted      | 0.92 0.01 75       | Soft grey for secondary content              |

## Typography

- Display: Space Grotesk — geometric, modern, confident hero/category text
- Body: DM Sans — clean, readable, friendly labels/descriptions
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl font-semibold`, body `text-base`, label `text-sm`

## Elevation & Depth

Three-tier shadow hierarchy: card (4px, 8% opacity), elevated (8px, 12% opacity). Header and footer slightly raised with subtle top/bottom borders.

## Structural Zones

| Zone    | Background        | Border              | Notes                                      |
| ------- | ----------------- | ------------------- | ------------------------------------------ |
| Header  | card (white)      | border-b            | Sticky, search + cart, dairy-blue text     |
| Content | background (warm) | —                   | Alternating card/muted backgrounds         |
| Footer  | background (warm) | border-t            | Secondary foreground text, top padding     |

## Spacing & Rhythm

Spacious mobile-first: 1rem section gaps, 0.5rem card padding, 1.5rem heading gaps. Generous whitespace around product cards for scannability.

## Component Patterns

- Buttons: accent color (warm orange), rounded-lg (10px), hover opacity-90
- Cards: white background, shadow-card, hover:-translate-y-1 (lift on hover)
- Badges: muted background, small text, rounded-full for categories

## Motion

- Entrance: fade-in 0.3s ease-out for page load, slide-up for product cards
- Hover: transition-smooth (0.3s cubic-bezier) on buttons and cards
- Decorative: none (emphasis on functional smoothness)

## Constraints

- Mobile-first breakpoints (sm, md, lg)
- No raw colors outside OKLCH palette
- Dairy-blue primary for brand consistency, warm accent reserved for CTAs only
- Max 2-3 fonts (Space Grotesk, DM Sans, Geist Mono)

## Signature Detail

Dairy-blue primary color tied to milk/freshness with warm accent for CTAs creates a memorable, modern brand identity distinct from competing grocery apps' generic blue+red patterns.
