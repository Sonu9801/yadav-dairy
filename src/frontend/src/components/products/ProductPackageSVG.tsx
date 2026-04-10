/**
 * ProductPackageSVG — renders a realistic-looking SVG product package
 * for the given packagingKey (stored in product.imageUrl field).
 * All packages show "Yadav Dairy" / "यादव डेयरी" branding prominently.
 * Each SVG shape matches the actual packaging type.
 */

export interface ProductPackageSVGProps {
  packagingKey: string;
  productName?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = { sm: 72, md: 108, lg: 140 };

function MilkPouchSVG() {
  return (
    <svg
      viewBox="0 0 100 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Milk Pouch</title>
      <defs>
        <linearGradient id="mp_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8dff7" />
          <stop offset="35%" stopColor="#eaf4fd" />
          <stop offset="70%" stopColor="#d8ecfb" />
          <stop offset="100%" stopColor="#b8d5f2" />
        </linearGradient>
        <linearGradient id="mp_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mp_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a56db" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="mp_seal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
      </defs>
      {/* Pillow-shaped pouch body */}
      <path
        d="M25 10 Q50 3 75 10 L82 22 Q88 38 86 94 Q84 120 50 122 Q16 120 14 94 Q12 38 18 22Z"
        fill="url(#mp_bg)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      {/* Glossy plastic sheen */}
      <path
        d="M22 24 Q20 38 20 82 Q20 104 24 118"
        stroke="url(#mp_shine)"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* Heat-seal top seam */}
      <path d="M25 10 Q50 3 75 10 L80 20 Q50 14 20 20Z" fill="url(#mp_seal)" />
      <line
        x1="20"
        y1="20.5"
        x2="80"
        y2="20.5"
        stroke="#93c5fd"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
      {/* Header brand band */}
      <rect x="14" y="22" width="72" height="20" fill="url(#mp_header)" />
      <text
        x="50"
        y="31"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="39"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Toned milk color band */}
      <rect x="14" y="42" width="72" height="4" fill="#1d4ed8" opacity="0.15" />
      {/* Cow silhouette */}
      <ellipse cx="50" cy="60" rx="18" ry="10" fill="white" opacity="0.25" />
      <path
        d="M36 56 Q40 50 50 52 Q60 50 64 56 Q66 62 62 66 Q56 70 50 70 Q44 70 38 66 Q34 62 36 56Z"
        fill="white"
        opacity="0.18"
      />
      {/* Main white label area */}
      <rect
        x="18"
        y="46"
        width="64"
        height="44"
        rx="3"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="19"
        y="47"
        width="62"
        height="42"
        rx="2"
        fill="none"
        stroke="#2563eb"
        strokeWidth="0.5"
        strokeDasharray="4,3"
      />
      {/* Product name */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
        letterSpacing="1"
      >
        MILK
      </text>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="8.5"
        fill="#2563eb"
        fontFamily="Arial"
      >
        दूध
      </text>
      <text
        x="50"
        y="81"
        textAnchor="middle"
        fontSize="5.5"
        fill="#374151"
        fontFamily="Arial"
      >
        TONED • 3% FAT
      </text>
      {/* Quality badge */}
      <rect x="33" y="83" width="34" height="7" rx="3.5" fill="#1d4ed8" />
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        PURE QUALITY
      </text>
      {/* Bottom brand band */}
      <rect x="14" y="95" width="72" height="18" rx="0" fill="#1d4ed8" />
      <text
        x="50"
        y="104"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontFamily="Arial"
      >
        NET VOL: 500 ml
      </text>
      <text
        x="50"
        y="110"
        textAnchor="middle"
        fontSize="4.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        Pasteurized Milk
      </text>
      {/* Heat-seal bottom */}
      <path
        d="M14 113 L86 113 Q84 120 50 122 Q16 120 14 113Z"
        fill="url(#mp_seal)"
      />
      <line
        x1="14"
        y1="113"
        x2="86"
        y2="113"
        stroke="#93c5fd"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
      {/* Barcode strip */}
      <rect
        x="24"
        y="116"
        width="52"
        height="7"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        26, 28, 30, 32, 34, 36, 38, 40, 43, 45, 47, 49, 51, 54, 56, 58, 60, 62,
        64, 67, 69, 71,
      ].map((x) => (
        <rect key={x} x={x} y="117" width="0.9" height="5" fill="#1e293b" />
      ))}
    </svg>
  );
}

function MilkBottleSVG() {
  return (
    <svg
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Milk Bottle</title>
      <defs>
        <linearGradient id="mb_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="50%" stopColor="#f0faff" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="mb_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="mb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mb_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      {/* Screw cap */}
      <rect x="27" y="4" width="26" height="12" rx="4" fill="url(#mb_cap)" />
      <line
        x1="27"
        y1="8"
        x2="53"
        y2="8"
        stroke="#0ea5e9"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="27"
        y1="11"
        x2="53"
        y2="11"
        stroke="#0ea5e9"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="28"
        y="14"
        width="24"
        height="16"
        rx="2"
        fill="url(#mb_bg)"
        stroke="#0284c7"
        strokeWidth="1"
      />
      {/* Bottle body */}
      <rect
        x="10"
        y="28"
        width="60"
        height="92"
        rx="12"
        fill="url(#mb_bg)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      {/* Glass shine */}
      <rect x="13" y="32" width="10" height="82" rx="5" fill="url(#mb_shine)" />
      {/* Blue wraparound label */}
      <rect x="10" y="38" width="60" height="64" rx="0" fill="url(#mb_label)" />
      {/* Label inner white zone */}
      <rect
        x="13"
        y="42"
        width="54"
        height="56"
        rx="2"
        fill="white"
        opacity="0.88"
      />
      {/* Brand header in label */}
      <rect x="13" y="42" width="54" height="14" rx="2" fill="#0284c7" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="53.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#bae6fd"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product name */}
      <text
        x="40"
        y="73"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#0c4a6e"
        fontFamily="Arial"
        letterSpacing="1"
      >
        MILK
      </text>
      <text
        x="40"
        y="83"
        textAnchor="middle"
        fontSize="7.5"
        fill="#0369a1"
        fontFamily="Arial"
      >
        दूध
      </text>
      <text
        x="40"
        y="91"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        FULL CREAM
      </text>
      {/* Info band */}
      <rect x="13" y="94" width="54" height="6" rx="0" fill="#e0f2fe" />
      <text
        x="40"
        y="98.5"
        textAnchor="middle"
        fontSize="4"
        fill="#0369a1"
        fontFamily="Arial"
      >
        NET 1 LITRE • PASTEURISED
      </text>
      {/* Bottom barcode */}
      <rect
        x="18"
        y="106"
        width="44"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        20, 22, 24, 26, 28, 30, 32, 34, 37, 39, 41, 43, 45, 47, 50, 52, 54, 56,
      ].map((x) => (
        <rect key={x} x={x} y="107" width="0.9" height="6" fill="#1e293b" />
      ))}
      {/* Bottom cap ring */}
      <rect x="10" y="116" width="60" height="4" rx="0" fill="#0284c7" />
    </svg>
  );
}

function MilkTetrapackSVG() {
  return (
    <svg
      viewBox="0 0 90 125"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy UHT Milk Tetrapack</title>
      <defs>
        <linearGradient id="mt_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
        <linearGradient id="mt_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mt_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="mt_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="40%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      {/* Gabled top — left panel */}
      <polygon points="8,20 45,6 45,20" fill="#1e3a5f" />
      {/* Gabled top — right panel */}
      <polygon points="82,20 45,6 45,20" fill="#172554" />
      {/* Fold crease */}
      <line x1="45" y1="6" x2="45" y2="20" stroke="#1e40af" strokeWidth="1" />
      {/* Red spout/opening tab */}
      <rect x="34" y="11" width="22" height="10" rx="3" fill="#dc2626" />
      <rect x="36" y="9" width="18" height="5" rx="2.5" fill="#b91c1c" />
      <text
        x="45"
        y="18"
        textAnchor="middle"
        fontSize="4"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        OPEN
      </text>
      {/* Carton body */}
      <rect
        x="8"
        y="20"
        width="74"
        height="95"
        rx="2"
        fill="url(#mt_bg)"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      {/* Side shine panel */}
      <rect x="9" y="21" width="12" height="93" rx="2" fill="url(#mt_side)" />
      {/* Silver foil strip */}
      <rect x="8" y="52" width="74" height="3" fill="url(#mt_foil)" />
      {/* Header band */}
      <rect x="8" y="20" width="74" height="24" fill="url(#mt_header)" />
      <text
        x="45"
        y="30"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="40"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product zone */}
      <rect
        x="14"
        y="56"
        width="62"
        height="46"
        rx="3"
        fill="white"
        opacity="0.78"
      />
      <rect
        x="15"
        y="57"
        width="60"
        height="44"
        rx="2"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="0.5"
      />
      {/* UHT badge */}
      <rect x="26" y="60" width="38" height="9" rx="4.5" fill="#1d4ed8" />
      <text
        x="45"
        y="66.5"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        UHT TREATED
      </text>
      <text
        x="45"
        y="78"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
        letterSpacing="1"
      >
        MILK
      </text>
      <text
        x="45"
        y="88"
        textAnchor="middle"
        fontSize="7"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        Long Life दूध
      </text>
      <text
        x="45"
        y="96"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        FULL CREAM • 6% FAT
      </text>
      {/* Bottom info bar */}
      <rect x="8" y="107" width="74" height="8" fill="#1d4ed8" opacity="0.12" />
      <text
        x="45"
        y="113"
        textAnchor="middle"
        fontSize="4.5"
        fill="#1e3a5f"
        fontFamily="Arial"
      >
        NET 1 LITRE • Keep Refrigerated
      </text>
      {/* Opening tab indicator */}
      <rect
        x="30"
        y="44"
        width="30"
        height="5"
        rx="2"
        fill="white"
        opacity="0.4"
      />
      <text
        x="45"
        y="48"
        textAnchor="middle"
        fontSize="3.5"
        fill="#1e40af"
        fontFamily="Arial"
      >
        OPEN HERE ▲
      </text>
    </svg>
  );
}

function SmallTetrapackSVG({
  label,
  labelHindi,
}: { label: string; labelHindi: string }) {
  return (
    <svg
      viewBox="0 0 80 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy {label} Tetrapack</title>
      <defs>
        <linearGradient id="st_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#f0fdf4" />
        </linearGradient>
        <linearGradient id="st_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="st_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="st_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="50%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
      {/* Gable top panels */}
      <polygon points="8,14 40,4 40,14" fill="#166534" />
      <polygon points="72,14 40,4 40,14" fill="#14532d" />
      <line x1="40" y1="4" x2="40" y2="14" stroke="#15803d" strokeWidth="1" />
      {/* Opening tab */}
      <rect x="30" y="8" width="20" height="7" rx="2" fill="#dc2626" />
      <text
        x="40"
        y="13.5"
        textAnchor="middle"
        fontSize="3.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        OPEN
      </text>
      {/* Carton body */}
      <rect
        x="8"
        y="14"
        width="64"
        height="76"
        rx="2"
        fill="url(#st_bg)"
        stroke="#16a34a"
        strokeWidth="1.5"
      />
      {/* Side shine */}
      <rect x="9" y="15" width="10" height="74" rx="2" fill="url(#st_side)" />
      {/* Foil strip */}
      <rect x="8" y="38" width="64" height="2.5" fill="url(#st_foil)" />
      {/* Header */}
      <rect x="8" y="14" width="64" height="18" fill="url(#st_header)" />
      <text
        x="40"
        y="22"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="29"
        textAnchor="middle"
        fontSize="4.5"
        fill="#bbf7d0"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product label zone */}
      <rect
        x="12"
        y="41"
        width="56"
        height="38"
        rx="2"
        fill="white"
        opacity="0.8"
      />
      {/* Plant badge */}
      <rect x="22" y="44" width="36" height="7" rx="3.5" fill="#16a34a" />
      <text
        x="40"
        y="49.5"
        textAnchor="middle"
        fontSize="4"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        PLANT BASED
      </text>
      <text
        x="40"
        y="62"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="bold"
        fill="#15803d"
        fontFamily="Arial"
      >
        {label.split(" ")[0]}
      </text>
      <text
        x="40"
        y="71"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#166534"
        fontFamily="Arial"
      >
        {label.split(" ").slice(1).join(" ")}
      </text>
      <text
        x="40"
        y="79"
        textAnchor="middle"
        fontSize="5.5"
        fill="#16a34a"
        fontFamily="Arial"
      >
        {labelHindi}
      </text>
      {/* Bottom info */}
      <rect x="8" y="82" width="64" height="8" fill="#15803d" opacity="0.12" />
      <text
        x="40"
        y="87.5"
        textAnchor="middle"
        fontSize="4"
        fill="#166534"
        fontFamily="Arial"
      >
        NET 1 LITRE • Dairy-Free
      </text>
    </svg>
  );
}

function ButterBoxSVG() {
  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Butter Box</title>
      <defs>
        <linearGradient id="bb_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="bb_foil_top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="20%" stopColor="#fcd34d" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="80%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="bb_3d_left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bb_3d_bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="bb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D box effect — bottom face */}
      <path d="M8 68 L14 74 L106 74 L100 68Z" fill="url(#bb_3d_bottom)" />
      {/* 3D box effect — right side face */}
      <path d="M100 6 L106 12 L106 74 L100 68Z" fill="url(#bb_3d_left)" />
      {/* Main box front face */}
      <rect
        x="4"
        y="6"
        width="96"
        height="62"
        rx="3"
        fill="url(#bb_bg)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Foil shine on face */}
      <rect x="5" y="7" width="14" height="60" rx="2" fill="url(#bb_shine)" />
      {/* Gold foil top band */}
      <rect
        x="4"
        y="6"
        width="96"
        height="16"
        rx="3"
        fill="url(#bb_foil_top)"
      />
      <rect x="4" y="18" width="96" height="4" fill="#d97706" />
      <text
        x="52"
        y="15"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Silver foil divider lines */}
      <rect
        x="4"
        y="58"
        width="96"
        height="2.5"
        rx="0"
        fill="#fcd34d"
        opacity="0.6"
      />
      {/* Inner centered label box */}
      <rect
        x="22"
        y="28"
        width="62"
        height="28"
        rx="4"
        fill="#fcd34d"
        stroke="#d97706"
        strokeWidth="1"
      />
      <rect x="24" y="30" width="58" height="24" rx="3" fill="#fffbeb" />
      {/* BUTTER text */}
      <text
        x="53"
        y="44"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
        letterSpacing="1"
      >
        BUTTER
      </text>
      <text
        x="53"
        y="51"
        textAnchor="middle"
        fontSize="5.5"
        fill="#b45309"
        fontFamily="Arial"
      >
        मक्खन • Salted
      </text>
      {/* PURE BUTTER quality badge */}
      <rect x="36" y="60" width="38" height="7" rx="3.5" fill="#78350f" />
      <text
        x="55"
        y="65.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        PURE BUTTER
      </text>
      {/* Net weight badge */}
      <rect x="78" y="22" width="18" height="9" rx="2" fill="#78350f" />
      <text
        x="87"
        y="28.5"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        100g
      </text>
      {/* Barcode strip */}
      <rect
        x="6"
        y="54"
        width="30"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        8, 9.5, 11, 12.5, 14, 15.5, 17, 18.5, 20.5, 22, 23.5, 25, 26.5, 28.5,
        30, 31.5, 33,
      ].map((x) => (
        <rect key={x} x={x} y="55" width="0.8" height="6" fill="#1e293b" />
      ))}
    </svg>
  );
}

function GheeJarSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Ghee Jar</title>
      <defs>
        <linearGradient id="gj_ghee" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="gj_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="25%" stopColor="#fcd34d" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="75%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="gj_glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="25%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="gj_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="50%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="45" cy="22" rx="35" ry="9.5" fill="#78350f" />
      {/* Golden metallic lid */}
      <ellipse cx="45" cy="20" rx="32" ry="8" fill="url(#gj_lid)" />
      {/* Lid ridges */}
      <ellipse
        cx="45"
        cy="19"
        rx="28"
        ry="6"
        fill="none"
        stroke="#d97706"
        strokeWidth="0.8"
      />
      <ellipse
        cx="45"
        cy="18"
        rx="22"
        ry="5"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="0.5"
      />
      <text
        x="45"
        y="22"
        textAnchor="middle"
        fontSize="5"
        fill="#78350f"
        fontWeight="bold"
        fontFamily="Arial"
      >
        GHEE
      </text>
      {/* Jar neck */}
      <rect
        x="26"
        y="20"
        width="38"
        height="10"
        rx="2"
        fill="url(#gj_body)"
        stroke="#d97706"
        strokeWidth="1"
      />
      {/* Jar body — wide glass jar */}
      <path
        d="M11 30 Q8 36 10 90 Q10 102 45 102 Q80 102 80 90 Q82 36 79 30Z"
        fill="url(#gj_ghee)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Glass shine on left */}
      <path
        d="M14 34 Q12 68 14 94"
        stroke="url(#gj_glass)"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      {/* Secondary glass shine */}
      <path
        d="M22 32 Q20 70 22 96"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.15"
        strokeLinecap="round"
      />
      {/* White label zone */}
      <rect
        x="14"
        y="40"
        width="62"
        height="52"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="15"
        y="41"
        width="60"
        height="50"
        rx="3"
        fill="none"
        stroke="#d97706"
        strokeWidth="0.8"
      />
      {/* Saffron/orange header stripe */}
      <rect x="14" y="40" width="62" height="14" rx="4" fill="#d97706" />
      <rect x="14" y="48" width="62" height="6" fill="#d97706" />
      <text
        x="45"
        y="49"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="56"
        textAnchor="middle"
        fontSize="5"
        fill="#fef3c7"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product name */}
      <text
        x="45"
        y="72"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="1"
      >
        GHEE
      </text>
      <text
        x="45"
        y="82"
        textAnchor="middle"
        fontSize="8"
        fill="#92400e"
        fontFamily="Arial"
      >
        शुद्ध देसी घी
      </text>
      {/* Premium badge */}
      <rect x="27" y="84" width="36" height="7" rx="3.5" fill="#78350f" />
      <text
        x="45"
        y="89.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="#fcd34d"
        fontFamily="Arial"
      >
        PURE DESI GHEE
      </text>
      {/* Volume */}
      <text
        x="45"
        y="107"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        500 ml • Traditional Recipe
      </text>
      {/* Bottom ring */}
      <ellipse cx="45" cy="100" rx="35" ry="6" fill="#d97706" opacity="0.3" />
    </svg>
  );
}

function GheeTinSVG() {
  return (
    <svg
      viewBox="0 0 90 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Ghee Tin</title>
      <defs>
        <linearGradient id="gt_metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="20%" stopColor="#fcd34d" />
          <stop offset="45%" stopColor="#fbbf24" />
          <stop offset="65%" stopColor="#fcd34d" />
          <stop offset="85%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="gt_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fff8e1" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="gt_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Top lid ellipse (metallic) */}
      <ellipse cx="45" cy="16" rx="37" ry="11" fill="#92400e" />
      <ellipse cx="45" cy="14.5" rx="34" ry="9.5" fill="url(#gt_metal)" />
      {/* Lid ridges/embossing */}
      <ellipse
        cx="45"
        cy="14"
        rx="28"
        ry="7"
        fill="none"
        stroke="#d97706"
        strokeWidth="1"
      />
      <ellipse
        cx="45"
        cy="14"
        rx="20"
        ry="5"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="0.7"
      />
      <text
        x="45"
        y="17"
        textAnchor="middle"
        fontSize="5.5"
        fill="#78350f"
        fontWeight="bold"
        fontFamily="Arial"
      >
        PURE DESI GHEE
      </text>
      {/* Cylindrical body */}
      <rect
        x="9"
        y="14"
        width="72"
        height="80"
        rx="2"
        fill="url(#gt_body)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Metallic shine */}
      <rect x="10" y="15" width="10" height="78" rx="2" fill="url(#gt_shine)" />
      {/* Top metallic band */}
      <rect
        x="9"
        y="14"
        width="72"
        height="8"
        fill="url(#gt_metal)"
        opacity="0.8"
      />
      {/* Bottom metallic band */}
      <rect
        x="9"
        y="86"
        width="72"
        height="8"
        fill="url(#gt_metal)"
        opacity="0.8"
      />
      {/* Bottom ellipse */}
      <ellipse cx="45" cy="94" rx="37" ry="10" fill="#92400e" />
      <ellipse cx="45" cy="92" rx="34" ry="9" fill="url(#gt_metal)" />
      {/* White label area */}
      <rect
        x="13"
        y="24"
        width="64"
        height="60"
        rx="2"
        fill="white"
        opacity="0.88"
      />
      <rect
        x="14"
        y="25"
        width="62"
        height="58"
        rx="1"
        fill="none"
        stroke="#d97706"
        strokeWidth="0.7"
      />
      {/* Header stripe on label */}
      <rect x="13" y="24" width="64" height="14" rx="2" fill="#d97706" />
      <rect x="13" y="32" width="64" height="6" fill="#d97706" />
      <text
        x="45"
        y="31"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="37"
        textAnchor="middle"
        fontSize="5"
        fill="#fef3c7"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Main text */}
      <text
        x="45"
        y="57"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="1"
      >
        GHEE
      </text>
      <text
        x="45"
        y="68"
        textAnchor="middle"
        fontSize="8"
        fill="#92400e"
        fontFamily="Arial"
      >
        शुद्ध देसी घी
      </text>
      <text
        x="45"
        y="78"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        1 kg • Traditional
      </text>
      {/* Embossed quality ring */}
      <rect x="29" y="79" width="32" height="6" rx="3" fill="#b45309" />
      <text
        x="45"
        y="84"
        textAnchor="middle"
        fontSize="4"
        fontWeight="bold"
        fill="#fcd34d"
        fontFamily="Arial"
      >
        PREMIUM QUALITY
      </text>
    </svg>
  );
}

function PaneerBlockSVG() {
  return (
    <svg
      viewBox="0 0 120 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Paneer Block</title>
      <defs>
        <linearGradient id="pb_paneer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fafaf8" />
          <stop offset="100%" stopColor="#f5f5ef" />
        </linearGradient>
        <linearGradient id="pb_wrap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="pb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pb_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      {/* White paneer block */}
      <rect
        x="5"
        y="8"
        width="110"
        height="74"
        rx="4"
        fill="url(#pb_paneer)"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />
      {/* Vacuum-sealed plastic wrap texture */}
      <rect x="5" y="8" width="110" height="74" rx="4" fill="url(#pb_wrap)" />
      {/* Plastic wrap shine */}
      <rect x="6" y="9" width="14" height="72" rx="2" fill="url(#pb_shine)" />
      {/* Wrap crease lines — horizontal */}
      <line
        x1="5"
        y1="38"
        x2="115"
        y2="38"
        stroke="#bfdbfe"
        strokeWidth="0.7"
      />
      {/* Wrap fold at edges */}
      <path d="M5 8 Q8 12 8 38 Q8 12 5 8" fill="#93c5fd" opacity="0.12" />
      <path
        d="M115 8 Q112 12 112 38 Q112 12 115 8"
        fill="#93c5fd"
        opacity="0.12"
      />
      {/* Paneer texture dots */}
      {[14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102].map((x) => (
        <circle key={x} cx={x} cy={22} r="1.2" fill="#e5e7eb" />
      ))}
      {[14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102].map((x) => (
        <circle key={`b${x}`} cx={x} cy={68} r="1.2" fill="#e5e7eb" />
      ))}
      {/* Green label band */}
      <rect x="5" y="8" width="110" height="20" rx="4" fill="url(#pb_header)" />
      <rect x="5" y="22" width="110" height="6" fill="#1e40af" />
      <text
        x="60"
        y="18"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Product name */}
      <text
        x="60"
        y="48"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
        letterSpacing="1"
      >
        PANEER
      </text>
      <text
        x="60"
        y="59"
        textAnchor="middle"
        fontSize="8.5"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        पनीर
      </text>
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fontSize="5.5"
        fill="#374151"
        fontFamily="Arial"
      >
        FRESH DAILY • FULL FAT
      </text>
      {/* Weight badge */}
      <rect x="82" y="25" width="28" height="8" rx="4" fill="#1d4ed8" />
      <text
        x="96"
        y="30.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        NET WT 200g
      </text>
      {/* Barcode */}
      <rect
        x="8"
        y="72"
        width="38"
        height="8"
        rx="1"
        fill="white"
        opacity="0.75"
      />
      {[
        10, 11.5, 13, 14.5, 16, 17.5, 19.5, 21, 22.5, 24, 25.5, 27.5, 29, 30.5,
        32, 33.5, 35.5, 37, 38.5,
      ].map((x) => (
        <rect key={x} x={x} y="73" width="0.8" height="6" fill="#1e293b" />
      ))}
    </svg>
  );
}

function CurdCupSVG() {
  return (
    <svg
      viewBox="0 0 90 115"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Curd Cup</title>
      <defs>
        <linearGradient id="cc_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="cc_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="20%" stopColor="#e0e7ff" />
          <stop offset="45%" stopColor="#c7d2fe" />
          <stop offset="70%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="cc_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Foil lid rim */}
      <ellipse cx="45" cy="24" rx="36" ry="9.5" fill="#1d4ed8" />
      {/* Metallic foil lid */}
      <ellipse cx="45" cy="22.5" rx="34" ry="8" fill="url(#cc_foil)" />
      {/* Foil shine */}
      <ellipse cx="33" cy="20" rx="10" ry="4" fill="white" opacity="0.25" />
      {/* Peel tab */}
      <path d="M64 22 Q72 15 78 19 L76 25 Q70 28 66 26Z" fill="#4f46e5" />
      <path
        d="M64 22 Q72 15 78 19"
        stroke="#818cf8"
        strokeWidth="0.8"
        fill="none"
      />
      <text
        x="45"
        y="25.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="#1e3a5f"
        fontWeight="bold"
        fontFamily="Arial"
      >
        CURD • दही
      </text>
      {/* Tapered cup body */}
      <path
        d="M10 24 L16 100 Q16 107 45 107 Q74 107 74 100 L80 24Z"
        fill="url(#cc_bg)"
        stroke="#93c5fd"
        strokeWidth="1.5"
      />
      {/* Cup highlight/shine */}
      <path
        d="M13 30 Q12 72 14 100"
        stroke="url(#cc_shine)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Blue band at top of cup */}
      <path
        d="M10 24 L16 40 Q45 36 74 40 L80 24Z"
        fill="#2563eb"
        opacity="0.12"
      />
      {/* Inner label */}
      <rect
        x="17"
        y="34"
        width="56"
        height="60"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="18"
        y="35"
        width="54"
        height="58"
        rx="3"
        fill="none"
        stroke="#bfdbfe"
        strokeWidth="0.7"
      />
      {/* Header band on label */}
      <rect x="17" y="34" width="56" height="15" rx="4" fill="#1d4ed8" />
      <rect x="17" y="43" width="56" height="6" fill="#1d4ed8" />
      <text
        x="45"
        y="43"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product name */}
      <text
        x="45"
        y="68"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
        letterSpacing="1"
      >
        CURD
      </text>
      <text
        x="45"
        y="79"
        textAnchor="middle"
        fontSize="9"
        fill="#2563eb"
        fontFamily="Arial"
      >
        दही
      </text>
      <text
        x="45"
        y="86"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        FRESH SET • PROBIOTIC
      </text>
      {/* Nutrition band */}
      <rect x="17" y="88" width="56" height="7" rx="2" fill="#eff6ff" />
      <text
        x="45"
        y="93.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#374151"
        fontFamily="Arial"
      >
        NET WT 400g • Full Cream
      </text>
      {/* Base */}
      <path
        d="M16 100 Q16 107 45 107 Q74 107 74 100Z"
        fill="#2563eb"
        opacity="0.1"
      />
    </svg>
  );
}

function YogurtCupSVG() {
  return (
    <svg
      viewBox="0 0 90 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Yogurt Cup</title>
      <defs>
        <linearGradient id="yc_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf5ff" />
          <stop offset="100%" stopColor="#f3e8ff" />
        </linearGradient>
        <linearGradient id="yc_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="30%" stopColor="#ddd6fe" />
          <stop offset="60%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="yc_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Foil lid rim */}
      <ellipse cx="45" cy="22" rx="37" ry="9.5" fill="#6d28d9" />
      {/* Metallic foil lid */}
      <ellipse cx="45" cy="20.5" rx="34" ry="8" fill="url(#yc_foil)" />
      {/* Foil shine */}
      <ellipse cx="32" cy="18.5" rx="10" ry="4" fill="white" opacity="0.22" />
      {/* Peel tab */}
      <path d="M63 20 Q71 13 77 17 L75 23 Q69 26 65 24Z" fill="#7c3aed" />
      <text
        x="45"
        y="23.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        YOGURT
      </text>
      {/* Cup body */}
      <path
        d="M11 22 L15 100 Q15 104 45 104 Q75 104 75 100 L79 22Z"
        fill="url(#yc_bg)"
        stroke="#d8b4fe"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <path
        d="M13 28 Q12 70 14 98"
        stroke="url(#yc_shine)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Purple band at top */}
      <path
        d="M11 22 L15 38 Q45 35 75 38 L79 22Z"
        fill="#a855f7"
        opacity="0.18"
      />
      {/* Label area */}
      <rect
        x="17"
        y="32"
        width="56"
        height="58"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="18"
        y="33"
        width="54"
        height="56"
        rx="3"
        fill="none"
        stroke="#e9d5ff"
        strokeWidth="0.7"
      />
      {/* Header */}
      <rect x="17" y="32" width="56" height="14" rx="4" fill="#7c3aed" />
      <rect x="17" y="40" width="56" height="6" fill="#7c3aed" />
      <text
        x="45"
        y="40"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="48"
        textAnchor="middle"
        fontSize="5"
        fill="#e9d5ff"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Product name */}
      <text
        x="45"
        y="66"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#6d28d9"
        fontFamily="Arial"
        letterSpacing="0.8"
      >
        YOGURT
      </text>
      <text
        x="45"
        y="76"
        textAnchor="middle"
        fontSize="7.5"
        fill="#a855f7"
        fontFamily="Arial"
      >
        दही (Creamy)
      </text>
      <text
        x="45"
        y="84"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        GREEK STYLE • LOW FAT
      </text>
      {/* Nutrition band */}
      <rect x="17" y="85" width="56" height="6" rx="2" fill="#f5f3ff" />
      <text
        x="45"
        y="90.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#6d28d9"
        fontFamily="Arial"
      >
        NET WT 200g • Probiotic
      </text>
    </svg>
  );
}

function ButtermilkPouchSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Buttermilk Pouch</title>
      <defs>
        <linearGradient id="bm_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="40%" stopColor="#e0f7ff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
        <linearGradient id="bm_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bm_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="bm_seal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      {/* Pouch body */}
      <path
        d="M30 8 Q50 3 70 8 L76 18 Q80 30 78 88 Q78 110 50 112 Q22 110 22 88 Q20 30 24 18Z"
        fill="url(#bm_bg)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      {/* Plastic shine */}
      <path
        d="M27 20 Q25 34 25 80 Q25 100 28 108"
        stroke="url(#bm_shine)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Heat-seal top */}
      <path d="M30 8 Q50 3 70 8 L75 16 Q50 11 25 16Z" fill="url(#bm_seal)" />
      <line
        x1="25"
        y1="16.5"
        x2="75"
        y2="16.5"
        stroke="#7dd3fc"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
      {/* Header brand band */}
      <rect x="22" y="18" width="56" height="20" fill="url(#bm_header)" />
      <text
        x="50"
        y="27"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="35"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bae6fd"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Label area */}
      <rect
        x="26"
        y="40"
        width="48"
        height="42"
        rx="3"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="27"
        y="41"
        width="46"
        height="40"
        rx="2"
        fill="none"
        stroke="#0284c7"
        strokeWidth="0.5"
        strokeDasharray="4,3"
      />
      {/* Product name */}
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#0369a1"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        CHAAS
      </text>
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontSize="7.5"
        fill="#0284c7"
        fontFamily="Arial"
      >
        छाछ
      </text>
      <text
        x="50"
        y="73"
        textAnchor="middle"
        fontSize="5.5"
        fill="#374151"
        fontFamily="Arial"
      >
        Buttermilk • Salted
      </text>
      {/* Quality badge */}
      <rect x="34" y="75" width="32" height="7" rx="3.5" fill="#0369a1" />
      <text
        x="50"
        y="80.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        CHILLED FRESH
      </text>
      {/* Bottom band */}
      <rect x="22" y="90" width="56" height="14" fill="#0284c7" />
      <text
        x="50"
        y="98"
        textAnchor="middle"
        fontSize="4.5"
        fill="white"
        fontFamily="Arial"
      >
        NET 500 ml • Low Calorie
      </text>
      <text
        x="50"
        y="102"
        textAnchor="middle"
        fontSize="4"
        fill="#bae6fd"
        fontFamily="Arial"
      >
        Best Served Chilled
      </text>
      {/* Heat-seal bottom */}
      <path
        d="M22 104 L78 104 Q78 110 50 112 Q22 110 22 104Z"
        fill="url(#bm_seal)"
      />
      <line
        x1="22"
        y1="104"
        x2="78"
        y2="104"
        stroke="#7dd3fc"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
    </svg>
  );
}

function LassiBottleSVG() {
  return (
    <svg
      viewBox="0 0 70 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Lassi Bottle</title>
      <defs>
        <linearGradient id="lb_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="40%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="lb_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="lb_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="lb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Wide-mouth cap */}
      <rect x="18" y="4" width="34" height="13" rx="4" fill="url(#lb_cap)" />
      <line
        x1="18"
        y1="8"
        x2="52"
        y2="8"
        stroke="#fbbf24"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <line
        x1="18"
        y1="11"
        x2="52"
        y2="11"
        stroke="#f59e0b"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Neck — wide */}
      <rect
        x="20"
        y="15"
        width="30"
        height="14"
        rx="2"
        fill="url(#lb_body)"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      {/* Bottle body — wide/round */}
      <path
        d="M8 28 Q5 32 7 100 Q7 118 35 120 Q63 118 63 100 Q65 32 62 28Z"
        fill="url(#lb_body)"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      {/* Glass shine */}
      <path
        d="M10 34 Q9 72 11 104"
        stroke="url(#lb_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Saffron/yellow wraparound label */}
      <rect x="7" y="40" width="56" height="66" fill="url(#lb_label)" />
      {/* Label inner white zone */}
      <rect
        x="10"
        y="44"
        width="50"
        height="58"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      {/* Brand header on label */}
      <rect x="10" y="44" width="50" height="14" rx="2" fill="#b45309" />
      <text
        x="35"
        y="52"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="56"
        textAnchor="middle"
        fontSize="4.5"
        fill="#fde68a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Refreshing badge */}
      <rect x="20" y="60" width="30" height="6.5" rx="3.25" fill="#d97706" />
      <text
        x="35"
        y="64.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        SWEET MANGO
      </text>
      {/* Product name */}
      <text
        x="35"
        y="77"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
        letterSpacing="0.8"
      >
        LASSI
      </text>
      <text
        x="35"
        y="87"
        textAnchor="middle"
        fontSize="8"
        fill="#d97706"
        fontFamily="Arial"
      >
        लस्सी
      </text>
      {/* Info band */}
      <rect x="10" y="97" width="50" height="6" rx="0" fill="#fef3c7" />
      <text
        x="35"
        y="101.5"
        textAnchor="middle"
        fontSize="4"
        fill="#92400e"
        fontFamily="Arial"
      >
        NET 250 ml • Chilled Fresh
      </text>
      {/* Barcode */}
      <rect
        x="14"
        y="110"
        width="42"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        16, 17.5, 19, 20.5, 22, 23.5, 25.5, 27, 28.5, 30, 31.5, 33.5, 35, 36.5,
        38, 39.5, 41.5, 43, 44.5, 46, 47.5, 49,
      ].map((x) => (
        <rect key={x} x={x} y="111" width="0.8" height="6" fill="#1e293b" />
      ))}
      {/* Bottom cap ring */}
      <rect x="7" y="114" width="56" height="4" rx="0" fill="#b45309" />
    </svg>
  );
}

function CreamTubSVG() {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Fresh Cream Tub</title>
      <defs>
        <linearGradient id="ct_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f9ff" />
          <stop offset="50%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="ct_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="30%" stopColor="#0ea5e9" />
          <stop offset="55%" stopColor="#38bdf8" />
          <stop offset="80%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="ct_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ct_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="50" cy="17" rx="43" ry="11.5" fill="#0c4a6e" />
      {/* Blue lid */}
      <ellipse cx="50" cy="15.5" rx="40" ry="10" fill="url(#ct_lid)" />
      {/* Lid shine */}
      <ellipse cx="36" cy="12" rx="12" ry="4.5" fill="white" opacity="0.3" />
      {/* Lid ridges */}
      <ellipse
        cx="50"
        cy="15"
        rx="34"
        ry="8"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="0.7"
      />
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        FRESH CREAM
      </text>
      {/* Tub body */}
      <path
        d="M8 17 Q6 22 10 72 Q10 82 50 82 Q90 82 90 72 Q94 22 92 17Z"
        fill="url(#ct_body)"
        stroke="#7dd3fc"
        strokeWidth="1.5"
      />
      {/* Tub shine */}
      <path
        d="M12 24 Q11 58 13 74"
        stroke="url(#ct_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="48"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="15"
        y="25"
        width="70"
        height="46"
        rx="3"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="0.6"
      />
      {/* Header band on label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="14"
        rx="4"
        fill="url(#ct_header)"
      />
      <rect x="14" y="32" width="72" height="6" fill="#0369a1" />
      <text
        x="50"
        y="31"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="5"
        fill="#bae6fd"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* FRESH badge */}
      <rect x="28" y="40" width="44" height="7" rx="3.5" fill="#0ea5e9" />
      <text
        x="50"
        y="45.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        FRESH DAILY • WHIPPED
      </text>
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#0c4a6e"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        CREAM
      </text>
      {/* Nutrition band */}
      <rect x="14" y="64" width="72" height="7" rx="2" fill="#e0f2fe" />
      <text
        x="50"
        y="69.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#0369a1"
        fontFamily="Arial"
      >
        फ्रेश क्रीम • NET WT 200ml • 30% Fat
      </text>
    </svg>
  );
}

function CheeseBlockSVG() {
  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Cheese Block</title>
      <defs>
        <linearGradient id="chb_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="50%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="chb_wax_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chb_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>
      {/* 3D wax block — bottom face */}
      <path d="M6 68 L12 74 L104 74 L98 68Z" fill="#92400e" opacity="0.3" />
      {/* 3D right side face */}
      <path d="M98 10 L104 16 L104 74 L98 68Z" fill="#92400e" opacity="0.25" />
      {/* Main wax block face */}
      <rect
        x="6"
        y="10"
        width="92"
        height="58"
        rx="4"
        fill="url(#chb_body)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Wax shine overlay */}
      <rect x="7" y="11" width="12" height="56" rx="2" fill="url(#chb_shine)" />
      {/* Header brand band */}
      <rect
        x="6"
        y="10"
        width="92"
        height="16"
        rx="4"
        fill="url(#chb_header)"
      />
      <rect x="6" y="20" width="92" height="6" fill="#92400e" />
      <text
        x="52"
        y="18"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Inner centered label box */}
      <rect
        x="24"
        y="30"
        width="60"
        height="30"
        rx="3"
        fill="#fef3c7"
        stroke="#d97706"
        strokeWidth="0.8"
      />
      {/* Cheese hole texture (wax layer) */}
      <circle
        cx="18"
        cy="45"
        r="4"
        fill="#fbbf24"
        opacity="0.4"
        stroke="#d97706"
        strokeWidth="0.5"
      />
      <circle
        cx="84"
        cy="40"
        r="3"
        fill="#fbbf24"
        opacity="0.4"
        stroke="#d97706"
        strokeWidth="0.5"
      />
      <circle
        cx="88"
        cy="56"
        r="2.5"
        fill="#fbbf24"
        opacity="0.35"
        stroke="#d97706"
        strokeWidth="0.5"
      />
      {/* Product name */}
      <text
        x="54"
        y="44"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="1"
      >
        CHEESE
      </text>
      <text
        x="54"
        y="54"
        textAnchor="middle"
        fontSize="6.5"
        fill="#92400e"
        fontFamily="Arial"
      >
        चीज़ • PROCESSED
      </text>
      {/* NET WT badge */}
      <rect x="68" y="22" width="24" height="8" rx="2" fill="#78350f" />
      <text
        x="80"
        y="27.5"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        NET WT 200g
      </text>
      {/* Barcode strip */}
      <rect
        x="8"
        y="61"
        width="32"
        height="6"
        rx="1"
        fill="white"
        opacity="0.6"
      />
      {[
        10, 11.5, 13, 14.5, 16, 18, 19.5, 21, 22.5, 24.5, 26, 27.5, 29, 30.5,
        32, 33.5, 35,
      ].map((x) => (
        <rect key={x} x={x} y="62" width="0.8" height="4" fill="#1e293b" />
      ))}
    </svg>
  );
}

function MozzarellaBlockSVG() {
  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Mozzarella Block</title>
      <defs>
        <linearGradient id="mz_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="mz_wrap" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="mz_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mz_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      {/* Vacuum pack body */}
      <rect
        x="5"
        y="8"
        width="100"
        height="64"
        rx="5"
        fill="url(#mz_body)"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      {/* Vacuum plastic wrap overlay */}
      <rect x="5" y="8" width="100" height="64" rx="5" fill="url(#mz_wrap)" />
      {/* Wrap shine */}
      <rect x="6" y="9" width="12" height="62" rx="2" fill="url(#mz_shine)" />
      {/* Moisture droplets */}
      <ellipse cx="22" cy="50" rx="2.5" ry="4" fill="#bfdbfe" opacity="0.6" />
      <ellipse cx="28" cy="44" rx="1.5" ry="2.5" fill="#93c5fd" opacity="0.5" />
      <ellipse cx="82" cy="52" rx="2" ry="3.5" fill="#bfdbfe" opacity="0.55" />
      <ellipse cx="88" cy="42" rx="1.5" ry="2.5" fill="#93c5fd" opacity="0.5" />
      {/* Header brand band */}
      <rect x="5" y="8" width="100" height="18" rx="5" fill="url(#mz_header)" />
      <rect x="5" y="20" width="100" height="6" fill="#1e40af" />
      <text
        x="55"
        y="17"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Product label zone */}
      <rect
        x="28"
        y="28"
        width="54"
        height="36"
        rx="3"
        fill="white"
        opacity="0.88"
      />
      <rect
        x="29"
        y="29"
        width="52"
        height="34"
        rx="2"
        fill="none"
        stroke="#bfdbfe"
        strokeWidth="0.7"
      />
      {/* FRESH badge */}
      <rect x="34" y="31" width="42" height="8" rx="4" fill="#0284c7" />
      <text
        x="55"
        y="36.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        FRESH VACUUM PACKED
      </text>
      <text
        x="55"
        y="48"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#0c4a6e"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        MOZZARELLA
      </text>
      <text
        x="55"
        y="57"
        textAnchor="middle"
        fontSize="6"
        fill="#0369a1"
        fontFamily="Arial"
      >
        मोज़ेरेला • 200g
      </text>
      {/* NET WT badge */}
      <rect x="72" y="20" width="28" height="8" rx="2" fill="#1d4ed8" />
      <text
        x="86"
        y="25.5"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        NET WT 200g
      </text>
      {/* Barcode */}
      <rect
        x="8"
        y="62"
        width="28"
        height="8"
        rx="1"
        fill="white"
        opacity="0.65"
      />
      {[
        10, 11.5, 13, 14.5, 16, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5, 30,
        31.5,
      ].map((x) => (
        <rect key={x} x={x} y="63" width="0.8" height="6" fill="#1e293b" />
      ))}
    </svg>
  );
}

function CheddarBlockSVG() {
  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Cheddar Block</title>
      <defs>
        <linearGradient id="cd_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="cd_wax_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c2d12" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cd_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cd_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
      </defs>
      {/* 3D wax block — bottom */}
      <path d="M6 68 L12 74 L104 74 L98 68Z" fill="#7c2d12" opacity="0.35" />
      {/* 3D right side */}
      <path d="M98 10 L104 16 L104 74 L98 68Z" fill="#7c2d12" opacity="0.25" />
      {/* Wax block face */}
      <rect
        x="6"
        y="10"
        width="92"
        height="58"
        rx="4"
        fill="url(#cd_body)"
        stroke="#c2410c"
        strokeWidth="1.5"
      />
      {/* Wax shine */}
      <rect x="7" y="11" width="12" height="56" rx="2" fill="url(#cd_shine)" />
      {/* Header brand band */}
      <rect x="6" y="10" width="92" height="16" rx="4" fill="url(#cd_header)" />
      <rect x="6" y="20" width="92" height="6" fill="#7c2d12" />
      <text
        x="52"
        y="18"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Inner label */}
      <rect
        x="22"
        y="28"
        width="64"
        height="32"
        rx="3"
        fill="white"
        opacity="0.2"
        stroke="#fef3c7"
        strokeWidth="0.7"
      />
      <text
        x="52"
        y="43"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="1"
      >
        CHEDDAR
      </text>
      <text
        x="52"
        y="53"
        textAnchor="middle"
        fontSize="6"
        fill="#fef9c3"
        fontFamily="Arial"
      >
        चेडर चीज़ • AGED 6 MONTHS
      </text>
      {/* Net weight badge */}
      <rect x="68" y="21" width="24" height="8" rx="2" fill="#fef9c3" />
      <text
        x="80"
        y="26.5"
        textAnchor="middle"
        fontSize="5"
        fill="#7c2d12"
        fontWeight="bold"
        fontFamily="Arial"
      >
        NET WT 200g
      </text>
      {/* Barcode strip */}
      <rect
        x="8"
        y="60"
        width="32"
        height="6"
        rx="1"
        fill="white"
        opacity="0.45"
      />
      {[
        10, 11.5, 13, 14.5, 16, 18, 19.5, 21, 22.5, 24.5, 26, 27.5, 29, 30.5,
        32, 33.5, 35,
      ].map((x) => (
        <rect key={x} x={x} y="61" width="0.8" height="4" fill="#7c2d12" />
      ))}
    </svg>
  );
}

function CheeseSlicesSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Cheese Slices</title>
      <defs>
        <linearGradient id="cs_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="cs_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="cs_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cs_window" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Flat rectangular box */}
      <rect
        x="8"
        y="8"
        width="84"
        height="104"
        rx="8"
        fill="url(#cs_body)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <rect x="9" y="9" width="10" height="102" rx="4" fill="url(#cs_shine)" />
      {/* Header band */}
      <rect x="8" y="8" width="84" height="22" rx="8" fill="url(#cs_header)" />
      <rect x="8" y="24" width="84" height="6" fill="#92400e" />
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="27"
        textAnchor="middle"
        fontSize="5.5"
        fill="#fde68a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Transparent window showing stacked slices */}
      <rect
        x="20"
        y="34"
        width="60"
        height="44"
        rx="4"
        fill="url(#cs_window)"
        stroke="#d97706"
        strokeWidth="0.8"
      />
      {/* Stacked slice lines */}
      {[40, 47, 54, 61, 68].map((y) => (
        <rect
          key={y}
          x="22"
          y={y}
          width="56"
          height="5.5"
          rx="1"
          fill="#fbbf24"
          opacity="0.65"
          stroke="#f59e0b"
          strokeWidth="0.4"
        />
      ))}
      {/* Corner fold on window */}
      <path d="M20 34 L26 40 L20 40Z" fill="#d97706" opacity="0.3" />
      {/* Product name */}
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        CHEESE
      </text>
      <text
        x="50"
        y="103"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        SLICES
      </text>
      <text
        x="50"
        y="112"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        चीज़ स्लाइस • 10 Slices • 200g
      </text>
      {/* Barcode */}
      <rect
        x="64"
        y="88"
        width="24"
        height="8"
        rx="1"
        fill="white"
        opacity="0.6"
      />
      {[66, 67.5, 69, 70.5, 72, 73.5, 75.5, 77, 78.5, 80, 81.5, 83, 84.5].map(
        (x) => (
          <rect key={x} x={x} y="89" width="0.7" height="6" fill="#1e293b" />
        ),
      )}
    </svg>
  );
}

function CreamCheeseTubSVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Cream Cheese Tub</title>
      <defs>
        <linearGradient id="cct_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
        <linearGradient id="cct_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9d174d" />
          <stop offset="25%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="75%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
        <linearGradient id="cct_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cct_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#be185d" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="50" cy="28" rx="40" ry="11" fill="#831843" />
      {/* Metallic lid */}
      <ellipse cx="50" cy="26" rx="37" ry="9.5" fill="url(#cct_lid)" />
      {/* Lid shine */}
      <ellipse cx="38" cy="23" rx="10" ry="4" fill="white" opacity="0.25" />
      {/* Lid ridges */}
      <ellipse
        cx="50"
        cy="25"
        rx="30"
        ry="7.5"
        fill="none"
        stroke="#f9a8d4"
        strokeWidth="0.6"
      />
      <text
        x="50"
        y="28.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        CREAM CHEESE
      </text>
      {/* Tub body */}
      <path
        d="M12 28 Q10 33 14 80 Q14 89 50 89 Q86 89 86 80 Q90 33 88 28Z"
        fill="url(#cct_body)"
        stroke="#f9a8d4"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <path
        d="M15 35 Q14 68 16 82"
        stroke="url(#cct_shine)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner label */}
      <rect
        x="18"
        y="36"
        width="64"
        height="46"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="19"
        y="37"
        width="62"
        height="44"
        rx="3"
        fill="none"
        stroke="#f9a8d4"
        strokeWidth="0.6"
      />
      {/* Header band on label */}
      <rect
        x="18"
        y="36"
        width="64"
        height="15"
        rx="4"
        fill="url(#cct_header)"
      />
      <rect x="18" y="45" width="64" height="6" fill="#9d174d" />
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="51"
        textAnchor="middle"
        fontSize="5"
        fill="#fce7f3"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* CREAM CHEESE text */}
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#be185d"
        fontFamily="Arial"
      >
        CREAM
      </text>
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#9d174d"
        fontFamily="Arial"
      >
        CHEESE
      </text>
      {/* Nutrition band */}
      <rect x="18" y="78" width="64" height="6" rx="2" fill="#fdf2f8" />
      <text
        x="50"
        y="83.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#9d174d"
        fontFamily="Arial"
      >
        क्रीम चीज़ • NET WT 200g • Smooth
      </text>
    </svg>
  );
}

function IceCreamTubSVG() {
  return (
    <svg
      viewBox="0 0 110 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Ice Cream Tub</title>
      <defs>
        <linearGradient id="ic_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="60%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="ic_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="25%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="75%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="ic_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ic_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      {/* Round cylindrical tub lid rim */}
      <ellipse cx="55" cy="30" rx="46" ry="13.5" fill="#5b21b6" />
      {/* Rainbow lid */}
      <ellipse cx="55" cy="28" rx="43" ry="12" fill="url(#ic_lid)" />
      {/* Lid shine */}
      <ellipse cx="40" cy="24" rx="16" ry="5.5" fill="white" opacity="0.35" />
      {/* Lid text */}
      <text
        x="55"
        y="30.5"
        textAnchor="middle"
        fontSize="6.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        ICE CREAM • आइसक्रीम
      </text>
      {/* Tub body */}
      <path
        d="M10 30 Q8 36 12 90 Q12 100 55 100 Q98 100 98 90 Q102 36 100 30Z"
        fill="url(#ic_body)"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      {/* Tub shine */}
      <path
        d="M14 38 Q12 72 14 94"
        stroke="url(#ic_shine)"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      {/* Header brand band on tub */}
      <path
        d="M10 30 L14 48 Q55 44 96 48 L100 30Z"
        fill="url(#ic_header)"
        opacity="0.9"
      />
      <text
        x="55"
        y="38"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="55"
        y="46"
        textAnchor="middle"
        fontSize="5"
        fill="#e9d5ff"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Flavor swirl decoration */}
      <path
        d="M18 62 Q35 54 55 62 Q75 70 92 62"
        stroke="#f472b6"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M18 74 Q35 66 55 74 Q75 82 92 74"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Center inner label */}
      <ellipse cx="55" cy="60" rx="26" ry="10" fill="white" opacity="0.82" />
      <text
        x="55"
        y="57"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="#6d28d9"
        fontFamily="Arial"
      >
        PREMIUM
      </text>
      <text
        x="55"
        y="63"
        textAnchor="middle"
        fontSize="5"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        VANILLA SWIRL
      </text>
      {/* Big product text below label */}
      <text
        x="55"
        y="84"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#6d28d9"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        ICE CREAM
      </text>
      {/* Info band */}
      <rect
        x="12"
        y="92"
        width="86"
        height="6"
        rx="2"
        fill="#e9d5ff"
        opacity="0.6"
      />
      <text
        x="55"
        y="97"
        textAnchor="middle"
        fontSize="4.5"
        fill="#5b21b6"
        fontFamily="Arial"
      >
        NET 500 ml • Keep Frozen
      </text>
    </svg>
  );
}

function KulfiStickSVG() {
  return (
    <svg
      viewBox="0 0 80 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Kulfi Stick</title>
      <defs>
        <linearGradient id="ks_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="40%" stopColor="#fdba74" />
          <stop offset="80%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="ks_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="ks_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ks_wrap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      {/* Kulfi stick shape — trapezoid wider at top */}
      <path
        d="M18 6 L62 6 L58 82 Q56 88 40 88 Q24 88 22 82Z"
        fill="url(#ks_body)"
        stroke="#ea580c"
        strokeWidth="1.5"
      />
      {/* Shine overlay */}
      <path
        d="M20 8 L28 8 L26 82"
        stroke="url(#ks_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Saffron speckles */}
      <circle cx="34" cy="35" r="1.5" fill="#d97706" opacity="0.4" />
      <circle cx="50" cy="42" r="1" fill="#b45309" opacity="0.35" />
      <circle cx="44" cy="60" r="1.5" fill="#d97706" opacity="0.4" />
      <circle cx="30" cy="65" r="1" fill="#b45309" opacity="0.35" />
      {/* Header brand band */}
      <path d="M18 6 L62 6 L62 22 L18 22Z" fill="url(#ks_header)" />
      <text
        x="40"
        y="13"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="19.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#fed7aa"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Inner sticker label */}
      <rect
        x="22"
        y="26"
        width="36"
        height="40"
        rx="3"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="23"
        y="27"
        width="34"
        height="38"
        rx="2"
        fill="none"
        stroke="#fdba74"
        strokeWidth="0.6"
      />
      {/* Saffron badge */}
      <rect x="24" y="29" width="32" height="7" rx="3.5" fill="#d97706" />
      <text
        x="40"
        y="34.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        SAFFRON
      </text>
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#7c2d12"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        KULFI
      </text>
      <text
        x="40"
        y="55"
        textAnchor="middle"
        fontSize="7"
        fill="#c2410c"
        fontFamily="Arial"
      >
        कुल्फी
      </text>
      <text
        x="40"
        y="63"
        textAnchor="middle"
        fontSize="4.5"
        fill="#374151"
        fontFamily="Arial"
      >
        100ml • Frozen
      </text>
      {/* Wooden stick */}
      <rect x="36" y="86" width="8" height="46" rx="4" fill="#d97706" />
      <rect
        x="37"
        y="87"
        width="3"
        height="44"
        rx="2"
        fill="#fbbf24"
        opacity="0.4"
      />
    </svg>
  );
}

function CondensedMilkCanSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Condensed Milk Can</title>
      <defs>
        <linearGradient id="cm_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="30%" stopColor="#fafafa" />
          <stop offset="70%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="cm_tin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="20%" stopColor="#e2e8f0" />
          <stop offset="45%" stopColor="#f8fafc" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="cm_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cm_redstripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b91c1c" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="cm_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      {/* Tin lid rim */}
      <ellipse cx="45" cy="18" rx="36" ry="10.5" fill="#475569" />
      {/* Tin lid */}
      <ellipse cx="45" cy="16.5" rx="33" ry="9" fill="url(#cm_tin)" />
      {/* Lid ridges */}
      <ellipse
        cx="45"
        cy="15.5"
        rx="27"
        ry="7"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="0.8"
      />
      <ellipse
        cx="45"
        cy="15.5"
        rx="18"
        ry="5"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="0.5"
      />
      {/* Ring pull */}
      <path
        d="M40 14 Q45 10 50 14"
        stroke="#f59e0b"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Can body */}
      <rect
        x="10"
        y="16"
        width="70"
        height="86"
        rx="3"
        fill="url(#cm_body)"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      {/* Metallic shine */}
      <rect x="11" y="17" width="9" height="84" rx="2" fill="url(#cm_shine)" />
      {/* Top metallic band */}
      <rect
        x="10"
        y="16"
        width="70"
        height="7"
        fill="url(#cm_tin)"
        opacity="0.7"
      />
      {/* Bottom metallic band */}
      <rect
        x="10"
        y="95"
        width="70"
        height="7"
        fill="url(#cm_tin)"
        opacity="0.7"
      />
      {/* Bottom lid rim */}
      <ellipse cx="45" cy="102" rx="36" ry="10" fill="#475569" />
      <ellipse cx="45" cy="100.5" rx="33" ry="8.5" fill="url(#cm_tin)" />
      {/* Header label band */}
      <rect x="13" y="24" width="64" height="14" fill="url(#cm_header)" />
      <text
        x="45"
        y="30.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="36.5"
        textAnchor="middle"
        fontSize="5"
        fill="#94a3b8"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Red decorative stripe */}
      <rect x="10" y="38" width="70" height="5" fill="url(#cm_redstripe)" />
      {/* White label zone */}
      <rect
        x="13"
        y="44"
        width="64"
        height="50"
        rx="2"
        fill="white"
        opacity="0.92"
      />
      <rect
        x="14"
        y="45"
        width="62"
        height="48"
        rx="1"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="0.5"
      />
      {/* Product illustration — condensed milk drip */}
      <path
        d="M45 50 Q42 56 43 62 Q44 65 45 66 Q46 65 47 62 Q48 56 45 50Z"
        fill="#fbbf24"
        opacity="0.6"
      />
      {/* Product name */}
      <text
        x="45"
        y="66"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1e293b"
        fontFamily="Arial"
      >
        CONDENSED
      </text>
      <text
        x="45"
        y="76"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1e293b"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="45"
        y="85"
        textAnchor="middle"
        fontSize="5.5"
        fill="#475569"
        fontFamily="Arial"
      >
        कंडेंस्ड मिल्क • Sweetened
      </text>
      {/* Net weight */}
      <text
        x="45"
        y="91"
        textAnchor="middle"
        fontSize="4.5"
        fill="#64748b"
        fontFamily="Arial"
      >
        NET WT 400g
      </text>
      {/* Barcode strip */}
      <rect
        x="15"
        y="77"
        width="22"
        height="7"
        rx="1"
        fill="white"
        opacity="0.8"
      />
      {[17, 18.5, 20, 21.5, 23, 25, 26.5, 28, 29.5, 31, 33, 34.5].map((x) => (
        <rect key={x} x={x} y="78" width="0.7" height="5" fill="#1e293b" />
      ))}
    </svg>
  );
}

function MilkPowderBoxSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Milk Powder Box</title>
      <defs>
        <linearGradient id="mpb_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="mpb_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="mpb_3d_right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mpb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D box effect */}
      <path d="M8 108 L14 114 L92 114 L86 108Z" fill="#1e40af" opacity="0.2" />
      <path d="M86 8 L92 14 L92 114 L86 108Z" fill="#1e40af" opacity="0.18" />
      {/* Box face */}
      <rect
        x="8"
        y="8"
        width="78"
        height="100"
        rx="5"
        fill="url(#mpb_body)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <rect x="9" y="9" width="10" height="98" rx="3" fill="url(#mpb_shine)" />
      {/* Header brand band */}
      <rect x="8" y="8" width="78" height="24" rx="5" fill="url(#mpb_header)" />
      <rect x="8" y="26" width="78" height="6" fill="#1e40af" />
      <text
        x="47"
        y="19"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="47"
        y="28"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Scoop illustration */}
      <ellipse cx="47" cy="60" rx="18" ry="10" fill="#dbeafe" opacity="0.8" />
      <ellipse cx="47" cy="58" rx="14" ry="7" fill="#bfdbfe" />
      {/* Scoop handle */}
      <rect
        x="56"
        y="60"
        width="16"
        height="5"
        rx="2.5"
        fill="#2563eb"
        opacity="0.6"
        transform="rotate(20 56 60)"
      />
      {/* Powder particles */}
      {[35, 40, 48, 55, 42, 50].map((x) => (
        <circle
          key={x}
          cx={x}
          cy={55 + (x % 3) * 3}
          r="1"
          fill="#1d4ed8"
          opacity="0.3"
        />
      ))}
      {/* Product name */}
      <text
        x="47"
        y="82"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        MILK
      </text>
      <text
        x="47"
        y="93"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        POWDER
      </text>
      {/* Nutrition / info band */}
      <rect x="8" y="96" width="78" height="8" fill="#dbeafe" opacity="0.7" />
      <text
        x="47"
        y="102"
        textAnchor="middle"
        fontSize="5"
        fill="#1e40af"
        fontFamily="Arial"
      >
        दूध पाउडर • NET WT 500g
      </text>
      {/* Barcode */}
      <rect
        x="12"
        y="76"
        width="22"
        height="7"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[14, 15.5, 17, 18.5, 20, 22, 23.5, 25, 26.5, 28, 29.5, 31].map((x) => (
        <rect key={x} x={x} y="77" width="0.8" height="5" fill="#1e293b" />
      ))}
    </svg>
  );
}

function KhoaBoxSVG() {
  return (
    <svg
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Khoa Box</title>
      <defs>
        <linearGradient id="kb2_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="kb2_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="kb2_3d_right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#78350f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="kb2_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D box */}
      <path d="M6 68 L12 74 L96 74 L90 68Z" fill="#78350f" opacity="0.25" />
      <path d="M90 8 L96 14 L96 74 L90 68Z" fill="#78350f" opacity="0.2" />
      {/* Box face */}
      <rect
        x="6"
        y="8"
        width="84"
        height="60"
        rx="4"
        fill="url(#kb2_body)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <rect x="7" y="9" width="10" height="58" rx="2" fill="url(#kb2_shine)" />
      {/* Header band */}
      <rect x="6" y="8" width="84" height="18" rx="4" fill="url(#kb2_header)" />
      <rect x="6" y="20" width="84" height="6" fill="#78350f" />
      <text
        x="48"
        y="16.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      {/* Earthy texture — grain dots on body */}
      {[20, 30, 40, 50, 60, 70, 80].map((x) => (
        <circle key={x} cx={x} cy={50} r="1.2" fill="#d97706" opacity="0.25" />
      ))}
      {/* Inner label */}
      <rect
        x="18"
        y="28"
        width="60"
        height="32"
        rx="3"
        fill="#fffbeb"
        stroke="#d97706"
        strokeWidth="0.7"
      />
      {/* Traditional badge */}
      <rect x="28" y="30" width="40" height="7" rx="3.5" fill="#b45309" />
      <text
        x="48"
        y="35.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        TRADITIONAL MAWA
      </text>
      {/* Product name */}
      <text
        x="48"
        y="48"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="1"
      >
        KHOA
      </text>
      <text
        x="48"
        y="56"
        textAnchor="middle"
        fontSize="7"
        fill="#92400e"
        fontFamily="Arial"
      >
        खोया • 250g Fresh
      </text>
      {/* Barcode */}
      <rect
        x="8"
        y="60"
        width="24"
        height="7"
        rx="1"
        fill="white"
        opacity="0.5"
      />
      {[10, 11.5, 13, 14.5, 16, 18, 19.5, 21, 22.5, 24, 25.5, 27].map((x) => (
        <rect key={x} x={x} y="61" width="0.7" height="5" fill="#1e293b" />
      ))}
    </svg>
  );
}

function FlavoredMilkTetrapackSVG() {
  return (
    <svg
      viewBox="0 0 80 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Flavored Milk Tetrapack</title>
      <defs>
        <linearGradient id="fmt_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="fmt_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="fmt_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fmt_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="40%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
      {/* Gable top panels */}
      <polygon points="8,16 40,4 40,16" fill="#9a3412" />
      <polygon points="72,16 40,4 40,16" fill="#7c2d12" />
      <line x1="40" y1="4" x2="40" y2="16" stroke="#c2410c" strokeWidth="1" />
      {/* Opening tab */}
      <rect x="30" y="7" width="20" height="8" rx="2.5" fill="#dc2626" />
      <text
        x="40"
        y="13"
        textAnchor="middle"
        fontSize="3.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        OPEN
      </text>
      {/* Carton body */}
      <rect
        x="8"
        y="16"
        width="64"
        height="84"
        rx="2"
        fill="url(#fmt_bg)"
        stroke="#ea580c"
        strokeWidth="1.5"
      />
      {/* Side shine */}
      <rect x="9" y="17" width="10" height="82" rx="2" fill="url(#fmt_side)" />
      {/* Foil strip */}
      <rect x="8" y="40" width="64" height="2.5" fill="url(#fmt_foil)" />
      {/* Orange header band */}
      <rect x="8" y="16" width="64" height="20" fill="url(#fmt_header)" />
      <text
        x="40"
        y="24"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="31.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#fed7aa"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Flavor color accent circle */}
      <circle cx="40" cy="56" r="16" fill="#ea580c" opacity="0.15" />
      <circle cx="40" cy="56" r="11" fill="#f97316" opacity="0.2" />
      {/* Product label zone */}
      <rect
        x="12"
        y="44"
        width="56"
        height="44"
        rx="3"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="13"
        y="45"
        width="54"
        height="42"
        rx="2"
        fill="none"
        stroke="#fdba74"
        strokeWidth="0.5"
      />
      {/* Flavor badge */}
      <rect x="22" y="47" width="36" height="7" rx="3.5" fill="#ea580c" />
      <text
        x="40"
        y="52.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        CHOCOLATE FLAVOUR
      </text>
      {/* Product name */}
      <text
        x="40"
        y="66"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#c2410c"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        FLAVORED
      </text>
      <text
        x="40"
        y="77"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#ea580c"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        MILK
      </text>
      <text
        x="40"
        y="84"
        textAnchor="middle"
        fontSize="5.5"
        fill="#9a3412"
        fontFamily="Arial"
      >
        चॉकलेट दूध
      </text>
      {/* Bottom info */}
      <rect x="8" y="92" width="64" height="8" fill="#c2410c" opacity="0.12" />
      <text
        x="40"
        y="97.5"
        textAnchor="middle"
        fontSize="4"
        fill="#7c2d12"
        fontFamily="Arial"
      >
        NET 200 ml • Tetra Pack
      </text>
    </svg>
  );
}

function ProteinDrinkBottleSVG() {
  return (
    <svg
      viewBox="0 0 70 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Protein Drink Bottle</title>
      <defs>
        <linearGradient id="pd_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="35%" stopColor="#1e293b" />
          <stop offset="70%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="pd_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="pd_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
        <linearGradient id="pd_neon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="pd_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Cap */}
      <rect x="20" y="4" width="30" height="12" rx="4" fill="url(#pd_cap)" />
      <line
        x1="20"
        y1="8"
        x2="50"
        y2="8"
        stroke="#22c55e"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="22"
        y="14"
        width="26"
        height="14"
        rx="2"
        fill="url(#pd_body)"
        stroke="#374151"
        strokeWidth="1"
      />
      {/* Sports bottle body */}
      <path
        d="M10 28 Q8 32 10 108 Q10 128 35 130 Q60 128 60 108 Q62 32 60 28Z"
        fill="url(#pd_body)"
        stroke="#374151"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <path
        d="M13 34 Q12 74 14 112"
        stroke="url(#pd_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Neon green accent stripe */}
      <rect x="10" y="52" width="50" height="5" fill="url(#pd_neon)" />
      {/* Second accent */}
      <rect
        x="10"
        y="94"
        width="50"
        height="3"
        fill="url(#pd_neon)"
        opacity="0.6"
      />
      {/* Label wraparound */}
      <rect
        x="10"
        y="28"
        width="50"
        height="66"
        fill="url(#pd_label)"
        opacity="0.8"
      />
      {/* Label inner */}
      <rect
        x="13"
        y="32"
        width="44"
        height="62"
        rx="2"
        fill="white"
        opacity="0.08"
      />
      {/* Brand header */}
      <rect x="13" y="32" width="44" height="14" rx="2" fill="#0f766e" />
      <text
        x="35"
        y="40"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="44"
        textAnchor="middle"
        fontSize="4.5"
        fill="#99f6e4"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Neon product name */}
      <text
        x="35"
        y="64"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="#34d399"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        PROTEIN
      </text>
      <text
        x="35"
        y="74"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="1"
      >
        PRO
      </text>
      <text
        x="35"
        y="84"
        textAnchor="middle"
        fontSize="6"
        fill="#6ee7b7"
        fontFamily="Arial"
      >
        प्रोटीन ड्रिंक
      </text>
      {/* Info band */}
      <rect x="13" y="88" width="44" height="7" rx="1" fill="#134e4a" />
      <text
        x="35"
        y="93"
        textAnchor="middle"
        fontSize="4.5"
        fill="#6ee7b7"
        fontFamily="Arial"
      >
        NET 500ml • 20g Protein
      </text>
      {/* Barcode */}
      <rect
        x="14"
        y="112"
        width="42"
        height="8"
        rx="1"
        fill="white"
        opacity="0.5"
      />
      {[
        16, 17.5, 19, 20.5, 22, 23.5, 25.5, 27, 28.5, 30, 31.5, 33.5, 35, 36.5,
        38, 39.5, 41.5, 43, 44.5, 46, 47.5, 49,
      ].map((x) => (
        <rect key={x} x={x} y="113" width="0.8" height="6" fill="#0f172a" />
      ))}
      <rect x="10" y="118" width="50" height="4" fill="#15803d" />
    </svg>
  );
}

function KefirBottleSVG() {
  return (
    <svg
      viewBox="0 0 70 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Kefir Bottle</title>
      <defs>
        <linearGradient id="kb_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="50%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
        <linearGradient id="kb_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="kb_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
        <linearGradient id="kb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Screw cap */}
      <rect x="20" y="4" width="30" height="13" rx="4" fill="url(#kb_cap)" />
      <line
        x1="20"
        y1="8"
        x2="50"
        y2="8"
        stroke="#22c55e"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="11"
        x2="50"
        y2="11"
        stroke="#4ade80"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="22"
        y="15"
        width="26"
        height="16"
        rx="2"
        fill="url(#kb_body)"
        stroke="#16a34a"
        strokeWidth="1"
      />
      {/* Bottle body — clean glass-look */}
      <path
        d="M8 30 Q5 34 7 106 Q7 124 35 126 Q63 124 63 106 Q65 34 62 30Z"
        fill="url(#kb_body)"
        stroke="#4ade80"
        strokeWidth="1.5"
      />
      {/* Glass shine */}
      <path
        d="M10 36 Q9 76 11 110"
        stroke="url(#kb_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Minimal health-food green label */}
      <rect x="7" y="40" width="56" height="70" fill="url(#kb_label)" />
      {/* Label inner zone */}
      <rect
        x="10"
        y="44"
        width="50"
        height="62"
        rx="2"
        fill="white"
        opacity="0.92"
      />
      {/* Brand header */}
      <rect x="10" y="44" width="50" height="14" rx="2" fill="#15803d" />
      <text
        x="35"
        y="52"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="56.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#bbf7d0"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Probiotic health badge */}
      <rect x="20" y="60" width="30" height="6.5" rx="3.25" fill="#16a34a" />
      <text
        x="35"
        y="64.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        PROBIOTIC RICH
      </text>
      {/* Product name */}
      <text
        x="35"
        y="78"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#166534"
        fontFamily="Arial"
        letterSpacing="1"
      >
        KEFIR
      </text>
      <text
        x="35"
        y="88"
        textAnchor="middle"
        fontSize="6"
        fill="#15803d"
        fontFamily="Arial"
      >
        केफिर • Cultured
      </text>
      {/* Info band */}
      <rect x="10" y="97" width="50" height="6" rx="0" fill="#d1fae5" />
      <text
        x="35"
        y="101.5"
        textAnchor="middle"
        fontSize="4"
        fill="#166534"
        fontFamily="Arial"
      >
        NET 500ml • Digestive Health
      </text>
      {/* Barcode */}
      <rect
        x="14"
        y="112"
        width="42"
        height="7"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        16, 17.5, 19, 20.5, 22, 23.5, 25.5, 27, 28.5, 30, 31.5, 33.5, 35, 36.5,
        38, 39.5, 41.5, 43, 44.5, 46, 47.5,
      ].map((x) => (
        <rect key={x} x={x} y="113" width="0.8" height="5" fill="#1e293b" />
      ))}
      {/* Bottom ring */}
      <rect x="7" y="116" width="56" height="4" fill="#15803d" />
    </svg>
  );
}

function BuffaloMilkPouchSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Buffalo Milk Pouch</title>
      <defs>
        <linearGradient id="bmp_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="40%" stopColor="#2d4f7f" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id="bmp_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bmp_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="bmp_seal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      {/* Pouch body */}
      <path
        d="M28 8 Q50 3 72 8 L80 20 Q86 34 84 90 Q82 114 50 116 Q18 114 16 90 Q14 34 20 20Z"
        fill="url(#bmp_bg)"
        stroke="#1e3a5f"
        strokeWidth="1.5"
      />
      {/* Glossy shine */}
      <path
        d="M22 22 Q20 36 20 82 Q20 104 24 112"
        stroke="url(#bmp_shine)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Heat-seal top (deep navy) */}
      <path d="M28 8 Q50 3 72 8 L78 17 Q50 12 22 17Z" fill="url(#bmp_seal)" />
      <line
        x1="22"
        y1="17.5"
        x2="78"
        y2="17.5"
        stroke="#3b82f6"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
      {/* Deep maroon/navy header band */}
      <rect x="16" y="19" width="68" height="22" fill="url(#bmp_header)" />
      <text
        x="50"
        y="28"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="37"
        textAnchor="middle"
        fontSize="5.5"
        fill="#93c5fd"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Maroon accent stripe */}
      <rect x="16" y="41" width="68" height="3" fill="#7c3d96" opacity="0.5" />
      {/* Label area */}
      <rect
        x="20"
        y="46"
        width="60"
        height="40"
        rx="3"
        fill="white"
        opacity="0.14"
      />
      <rect
        x="21"
        y="47"
        width="58"
        height="38"
        rx="2"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="0.5"
        strokeDasharray="4,3"
      />
      {/* Buffalo silhouette stylized */}
      <path
        d="M34 52 Q38 46 44 49 Q50 44 56 49 Q62 46 66 52 Q68 58 64 62 Q58 66 50 66 Q42 66 36 62 Q32 58 34 52Z"
        fill="#1e40af"
        opacity="0.3"
      />
      {/* BUFFALO text */}
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        BUFFALO
      </text>
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="1"
      >
        MILK
      </text>
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontSize="6.5"
        fill="#93c5fd"
        fontFamily="Arial"
      >
        भैंस का दूध
      </text>
      {/* Quality badge */}
      <rect
        x="32"
        y="80"
        width="36"
        height="7"
        rx="3.5"
        fill="#1d4ed8"
        opacity="0.8"
      />
      <text
        x="50"
        y="85.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        FULL CREAM • 6% FAT
      </text>
      {/* Bottom brand band */}
      <rect x="16" y="93" width="68" height="16" fill="url(#bmp_header)" />
      <text
        x="50"
        y="102"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontFamily="Arial"
      >
        NET VOL: 500 ml
      </text>
      <text
        x="50"
        y="107"
        textAnchor="middle"
        fontSize="4"
        fill="#93c5fd"
        fontFamily="Arial"
      >
        Rich &amp; Creamy
      </text>
      {/* Heat-seal bottom */}
      <path
        d="M16 109 L84 109 Q82 116 50 116 Q18 116 16 109Z"
        fill="url(#bmp_seal)"
      />
      <line
        x1="16"
        y1="109"
        x2="84"
        y2="109"
        stroke="#3b82f6"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
    </svg>
  );
}

function GoatMilkBottleSVG() {
  return (
    <svg
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Goat Milk Bottle</title>
      <defs>
        <linearGradient id="gmb_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="50%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
        <linearGradient id="gmb_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="gmb_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
        <linearGradient id="gmb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Green screw cap */}
      <rect x="27" y="4" width="26" height="12" rx="4" fill="url(#gmb_cap)" />
      <line
        x1="27"
        y1="8"
        x2="53"
        y2="8"
        stroke="#22c55e"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="27"
        y1="11"
        x2="53"
        y2="11"
        stroke="#22c55e"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="28"
        y="14"
        width="24"
        height="16"
        rx="2"
        fill="url(#gmb_bg)"
        stroke="#16a34a"
        strokeWidth="1"
      />
      {/* Bottle body */}
      <rect
        x="10"
        y="28"
        width="60"
        height="92"
        rx="12"
        fill="url(#gmb_bg)"
        stroke="#16a34a"
        strokeWidth="1.5"
      />
      {/* Glass shine */}
      <rect x="13" y="32" width="9" height="82" rx="5" fill="url(#gmb_shine)" />
      {/* Green wraparound label */}
      <rect x="10" y="38" width="60" height="64" fill="url(#gmb_label)" />
      {/* Label inner white zone */}
      <rect
        x="13"
        y="42"
        width="54"
        height="56"
        rx="2"
        fill="white"
        opacity="0.88"
      />
      {/* Brand header in label */}
      <rect x="13" y="42" width="54" height="14" rx="2" fill="#15803d" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="53.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#bbf7d0"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Organic badge */}
      <rect x="24" y="59" width="32" height="7" rx="3.5" fill="#16a34a" />
      <text
        x="40"
        y="64.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        ORGANIC GOAT
      </text>
      {/* Product name */}
      <text
        x="40"
        y="79"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#14532d"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        GOAT MILK
      </text>
      <text
        x="40"
        y="89"
        textAnchor="middle"
        fontSize="7"
        fill="#16a34a"
        fontFamily="Arial"
      >
        बकरी का दूध
      </text>
      {/* Info band */}
      <rect x="13" y="93" width="54" height="6" rx="0" fill="#d1fae5" />
      <text
        x="40"
        y="97.5"
        textAnchor="middle"
        fontSize="4"
        fill="#15803d"
        fontFamily="Arial"
      >
        500 ml • Digestive • Probiotic
      </text>
      {/* Barcode */}
      <rect
        x="18"
        y="105"
        width="44"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        20, 22, 24, 26, 28, 30, 32, 34, 37, 39, 41, 43, 45, 47, 50, 52, 54, 56,
      ].map((x) => (
        <rect key={x} x={x} y="106" width="0.9" height="6" fill="#1e293b" />
      ))}
      {/* Bottom cap ring */}
      <rect x="10" y="116" width="60" height="4" fill="#15803d" />
    </svg>
  );
}

function CamelMilkBottleSVG() {
  return (
    <svg
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Camel Milk Bottle</title>
      <defs>
        <linearGradient id="cmb_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="cmb_cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="cmb_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="cmb_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cmb_gold_band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="40%" stopColor="#fcd34d" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      {/* Sandy/tan screw cap */}
      <rect x="27" y="4" width="26" height="12" rx="4" fill="url(#cmb_cap)" />
      <line
        x1="27"
        y1="8"
        x2="53"
        y2="8"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="27"
        y1="11"
        x2="53"
        y2="11"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="28"
        y="14"
        width="24"
        height="16"
        rx="2"
        fill="url(#cmb_bg)"
        stroke="#d97706"
        strokeWidth="1"
      />
      {/* Bottle body */}
      <rect
        x="10"
        y="28"
        width="60"
        height="92"
        rx="12"
        fill="url(#cmb_bg)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Glass shine */}
      <rect x="13" y="32" width="9" height="82" rx="5" fill="url(#cmb_shine)" />
      {/* Gold premium accent lines */}
      <rect x="10" y="30" width="60" height="3" fill="url(#cmb_gold_band)" />
      <rect x="10" y="115" width="60" height="3" fill="url(#cmb_gold_band)" />
      {/* Sandy label */}
      <rect x="10" y="38" width="60" height="64" fill="url(#cmb_label)" />
      {/* Label inner */}
      <rect
        x="13"
        y="42"
        width="54"
        height="56"
        rx="2"
        fill="white"
        opacity="0.88"
      />
      {/* Brand header */}
      <rect x="13" y="42" width="54" height="14" rx="2" fill="#b45309" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="53.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#fde68a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Premium badge */}
      <rect x="24" y="59" width="32" height="7" rx="3.5" fill="#92400e" />
      <text
        x="40"
        y="64.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="#fcd34d"
        fontFamily="Arial"
      >
        RARE PREMIUM
      </text>
      {/* Product name */}
      <text
        x="40"
        y="79"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        CAMEL MILK
      </text>
      <text
        x="40"
        y="89"
        textAnchor="middle"
        fontSize="7"
        fill="#b45309"
        fontFamily="Arial"
      >
        ऊंटनी का दूध
      </text>
      {/* Info band */}
      <rect x="13" y="93" width="54" height="6" rx="0" fill="#fef3c7" />
      <text
        x="40"
        y="97.5"
        textAnchor="middle"
        fontSize="4"
        fill="#92400e"
        fontFamily="Arial"
      >
        250 ml • Immunity Booster
      </text>
      {/* Barcode */}
      <rect
        x="18"
        y="105"
        width="44"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        20, 22, 24, 26, 28, 30, 32, 34, 37, 39, 41, 43, 45, 47, 50, 52, 54, 56,
      ].map((x) => (
        <rect key={x} x={x} y="106" width="0.9" height="6" fill="#1e293b" />
      ))}
      <rect x="10" y="116" width="60" height="4" fill="#b45309" />
    </svg>
  );
}

function A2MilkBottleSVG() {
  return (
    <svg
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy A2 Cow Milk Bottle</title>
      <defs>
        <linearGradient id="a2b_bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <linearGradient id="a2b_gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="25%" stopColor="#fcd34d" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="75%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="a2b_label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="a2b_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="a2b_badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Premium gold cap */}
      <rect x="27" y="4" width="26" height="12" rx="4" fill="url(#a2b_gold)" />
      <line
        x1="27"
        y1="7.5"
        x2="53"
        y2="7.5"
        stroke="#d97706"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1="27"
        y1="10.5"
        x2="53"
        y2="10.5"
        stroke="#fbbf24"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Neck */}
      <rect
        x="28"
        y="14"
        width="24"
        height="16"
        rx="2"
        fill="url(#a2b_bg)"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      {/* Bottle body */}
      <rect
        x="10"
        y="28"
        width="60"
        height="92"
        rx="12"
        fill="url(#a2b_bg)"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      {/* Shine */}
      <rect x="13" y="32" width="9" height="82" rx="5" fill="url(#a2b_shine)" />
      {/* Gold accent lines */}
      <rect x="10" y="30" width="60" height="2.5" fill="url(#a2b_gold)" />
      <rect x="10" y="115" width="60" height="2.5" fill="url(#a2b_gold)" />
      {/* Gold wraparound label */}
      <rect x="10" y="38" width="60" height="64" fill="url(#a2b_label)" />
      {/* Label inner */}
      <rect
        x="13"
        y="42"
        width="54"
        height="56"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      {/* Brand header */}
      <rect x="13" y="42" width="54" height="14" rx="2" fill="#92400e" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="53.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#fde68a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* A2 gold badge — prominent */}
      <ellipse
        cx="40"
        cy="72"
        rx="16"
        ry="12"
        fill="url(#a2b_badge)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <ellipse
        cx="40"
        cy="72"
        rx="13"
        ry="9.5"
        fill="none"
        stroke="#fef3c7"
        strokeWidth="0.8"
      />
      <text
        x="40"
        y="76.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
      >
        A2
      </text>
      {/* "COW MILK" text */}
      <text
        x="40"
        y="91"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        COW MILK
      </text>
      <text
        x="40"
        y="98"
        textAnchor="middle"
        fontSize="6"
        fill="#b45309"
        fontFamily="Arial"
      >
        ए2 गाय का दूध
      </text>
      {/* Info band */}
      <rect x="13" y="93" width="54" height="6" rx="0" fill="#fef9c3" />
      <text
        x="40"
        y="97.5"
        textAnchor="middle"
        fontSize="4"
        fill="#92400e"
        fontFamily="Arial"
      >
        500 ml • Gir Cow • Premium
      </text>
      {/* Barcode */}
      <rect
        x="18"
        y="105"
        width="44"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        20, 22, 24, 26, 28, 30, 32, 34, 37, 39, 41, 43, 45, 47, 50, 52, 54, 56,
      ].map((x) => (
        <rect key={x} x={x} y="106" width="0.9" height="6" fill="#1e293b" />
      ))}
      <rect x="10" y="116" width="60" height="4" fill="url(#a2b_gold)" />
    </svg>
  );
}

function MistiDahiCupSVG() {
  return (
    <svg
      viewBox="0 0 90 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Misti Dahi Cup</title>
      <defs>
        <linearGradient id="md_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
        <linearGradient id="md_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="25%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="80%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="md_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Foil lid rim — saffron/golden */}
      <ellipse cx="45" cy="22" rx="37" ry="9.5" fill="#92400e" />
      {/* Metallic saffron foil lid */}
      <ellipse cx="45" cy="20.5" rx="34" ry="8" fill="url(#md_foil)" />
      {/* Foil shine */}
      <ellipse cx="33" cy="18.5" rx="10" ry="4" fill="white" opacity="0.22" />
      {/* Peel tab */}
      <path d="M63 20 Q71 13 77 17 L75 23 Q69 26 65 24Z" fill="#d97706" />
      <text
        x="45"
        y="23.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="#78350f"
        fontWeight="bold"
        fontFamily="Arial"
      >
        MISHTI DOI
      </text>
      {/* Cup body */}
      <path
        d="M11 22 L15 98 Q15 103 45 103 Q75 103 75 98 L79 22Z"
        fill="url(#md_bg)"
        stroke="#fcd34d"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <path
        d="M13 28 Q12 70 14 96"
        stroke="url(#md_shine)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Saffron/yellow band at top of cup */}
      <path
        d="M11 22 L15 38 Q45 35 75 38 L79 22Z"
        fill="#d97706"
        opacity="0.2"
      />
      {/* Label area */}
      <rect
        x="17"
        y="32"
        width="56"
        height="58"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="18"
        y="33"
        width="54"
        height="56"
        rx="3"
        fill="none"
        stroke="#fde68a"
        strokeWidth="0.7"
      />
      {/* Saffron header band */}
      <rect x="17" y="32" width="56" height="15" rx="4" fill="#d97706" />
      <rect x="17" y="41" width="56" height="6" fill="#d97706" />
      <text
        x="45"
        y="40"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="49"
        textAnchor="middle"
        fontSize="5"
        fill="#fef3c7"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Saffron swirl decorative */}
      <path
        d="M34 60 Q45 55 56 60 Q45 65 34 60Z"
        fill="#fbbf24"
        opacity="0.4"
      />
      {/* Product name */}
      <text
        x="45"
        y="65"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        MISHTI
      </text>
      <text
        x="45"
        y="76"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#d97706"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        DOI
      </text>
      <text
        x="45"
        y="85"
        textAnchor="middle"
        fontSize="7"
        fill="#b45309"
        fontFamily="Arial"
      >
        मिष्टी दही
      </text>
      {/* Nutrition band */}
      <rect x="17" y="86" width="56" height="6" rx="2" fill="#fffbeb" />
      <text
        x="45"
        y="91"
        textAnchor="middle"
        fontSize="4.5"
        fill="#92400e"
        fontFamily="Arial"
      >
        NET WT 200g • Sweet
      </text>
      {/* Base */}
      <path
        d="M15 98 Q15 103 45 103 Q75 103 75 98Z"
        fill="#d97706"
        opacity="0.1"
      />
    </svg>
  );
}

function SourCreamTubSVG() {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Sour Cream Tub</title>
      <defs>
        <linearGradient id="sct_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="50%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        <linearGradient id="sct_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="30%" stopColor="#9ca3af" />
          <stop offset="55%" stopColor="#d1d5db" />
          <stop offset="80%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient id="sct_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sct_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="50" cy="17" rx="43" ry="11.5" fill="#1f2937" />
      {/* Grey/silver lid */}
      <ellipse cx="50" cy="15.5" rx="40" ry="10" fill="url(#sct_lid)" />
      {/* Lid shine */}
      <ellipse cx="36" cy="12" rx="12" ry="4.5" fill="white" opacity="0.3" />
      {/* Lid ridges */}
      <ellipse
        cx="50"
        cy="15"
        rx="34"
        ry="8"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="0.7"
      />
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontSize="5.5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        SOUR CREAM
      </text>
      {/* Tub body */}
      <path
        d="M8 17 Q6 22 10 72 Q10 82 50 82 Q90 82 90 72 Q94 22 92 17Z"
        fill="url(#sct_body)"
        stroke="#d1d5db"
        strokeWidth="1.5"
      />
      {/* Tub shine */}
      <path
        d="M12 24 Q11 58 13 74"
        stroke="url(#sct_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="48"
        rx="4"
        fill="white"
        opacity="0.88"
      />
      <rect
        x="15"
        y="25"
        width="70"
        height="46"
        rx="3"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="0.6"
      />
      {/* Header band on label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="14"
        rx="4"
        fill="url(#sct_header)"
      />
      <rect x="14" y="32" width="72" height="6" fill="#1f2937" />
      <text
        x="50"
        y="31"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="5"
        fill="#d1d5db"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* TANGY CULTURED badge */}
      <rect x="26" y="40" width="48" height="7" rx="3.5" fill="#4b5563" />
      <text
        x="50"
        y="45.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        TANGY • CULTURED
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1f2937"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        SOUR CREAM
      </text>
      {/* Nutrition band */}
      <rect x="14" y="64" width="72" height="7" rx="2" fill="#f3f4f6" />
      <text
        x="50"
        y="69.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#374151"
        fontFamily="Arial"
      >
        खट्टी क्रीम • NET WT 200g • Probiotic
      </text>
    </svg>
  );
}

function KefirBottlePurpleSVG() {
  return (
    <svg
      viewBox="0 0 70 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Kefir Bottle</title>
      <defs>
        <linearGradient id="kbp_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="100%" stopColor="#ede9fe" />
        </linearGradient>
      </defs>
      <rect x="22" y="4" width="26" height="12" rx="4" fill="#7c3aed" />
      <rect
        x="25"
        y="14"
        width="20"
        height="16"
        fill="#f5f3ff"
        stroke="#7c3aed"
        strokeWidth="1"
      />
      <path
        d="M10 30 Q8 34 10 108 Q10 126 35 126 Q60 126 60 108 Q62 34 60 30Z"
        fill="url(#kbp_bg)"
        stroke="#a78bfa"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="44"
        width="42"
        height="66"
        rx="5"
        fill="white"
        opacity="0.85"
      />
      {/* Probiotic bubbles */}
      <circle cx="24" cy="62" r="3" fill="#c4b5fd" opacity="0.7" />
      <circle cx="46" cy="58" r="2" fill="#ddd6fe" opacity="0.7" />
      <circle cx="38" cy="68" r="4" fill="#a78bfa" opacity="0.4" />
      <text
        x="35"
        y="58"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#5b21b6"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="67"
        textAnchor="middle"
        fontSize="5"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="35"
        y="85"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#4c1d95"
        fontFamily="Arial"
      >
        KEFIR
      </text>
      <text
        x="35"
        y="96"
        textAnchor="middle"
        fontSize="6"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        केफिर
      </text>
      <text
        x="35"
        y="106"
        textAnchor="middle"
        fontSize="5"
        fill="#8b5cf6"
        fontFamily="Arial"
      >
        Probiotic Rich
      </text>
      <text
        x="35"
        y="118"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        500 ml
      </text>
    </svg>
  );
}

function WheyProteinCanSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Whey Protein Can</title>
      <defs>
        <linearGradient id="wpc_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="25%" stopColor="#1f2937" />
          <stop offset="60%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="wpc_metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="30%" stopColor="#6b7280" />
          <stop offset="55%" stopColor="#9ca3af" />
          <stop offset="80%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="wpc_electric" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="wpc_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="45" cy="18" rx="36" ry="10" fill="#1f2937" />
      {/* Metallic lid */}
      <ellipse cx="45" cy="16.5" rx="33" ry="8.5" fill="url(#wpc_metal)" />
      <ellipse
        cx="45"
        cy="15.5"
        rx="26"
        ry="6.5"
        fill="none"
        stroke="#4b5563"
        strokeWidth="0.8"
      />
      <ellipse
        cx="45"
        cy="15.5"
        rx="18"
        ry="4.5"
        fill="none"
        stroke="#374151"
        strokeWidth="0.5"
      />
      {/* Can body */}
      <rect
        x="10"
        y="16"
        width="70"
        height="90"
        rx="3"
        fill="url(#wpc_body)"
        stroke="#374151"
        strokeWidth="1.5"
      />
      {/* Metallic shine */}
      <rect x="11" y="17" width="8" height="88" rx="2" fill="url(#wpc_shine)" />
      {/* Top metallic band */}
      <rect
        x="10"
        y="16"
        width="70"
        height="8"
        fill="url(#wpc_metal)"
        opacity="0.7"
      />
      {/* Bottom lid */}
      <ellipse cx="45" cy="106" rx="36" ry="10" fill="#1f2937" />
      <ellipse cx="45" cy="104.5" rx="33" ry="8.5" fill="url(#wpc_metal)" />
      {/* Electric blue accent band */}
      <rect x="10" y="36" width="70" height="8" fill="url(#wpc_electric)" />
      {/* Electric zigzag stripe accent */}
      <path
        d="M10 44 L20 50 L30 44 L40 50 L50 44 L60 50 L70 44 L80 50 L80 44Z"
        fill="#2563eb"
        opacity="0.4"
      />
      {/* Header brand zone */}
      <rect x="13" y="24" width="64" height="12" rx="1" fill="#1f2937" />
      <text
        x="45"
        y="30"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#d1d5db"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="36"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Main label zone */}
      <rect
        x="13"
        y="54"
        width="64"
        height="44"
        rx="2"
        fill="#1f2937"
        opacity="0.8"
      />
      {/* Product name */}
      <text
        x="45"
        y="66"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        WHEY PROTEIN
      </text>
      {/* Big bold POWER text */}
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#3b82f6"
        fontFamily="Arial"
        letterSpacing="2"
      >
        POWER
      </text>
      <text
        x="45"
        y="90"
        textAnchor="middle"
        fontSize="6"
        fill="#60a5fa"
        fontFamily="Arial"
      >
        व्हे प्रोटीन
      </text>
      {/* Net weight bar */}
      <rect x="28" y="93" width="34" height="7" rx="3.5" fill="#1d4ed8" />
      <text
        x="45"
        y="98"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        500g • 25g Protein/Serve
      </text>
    </svg>
  );
}

function CaseinProteinCanSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Casein Protein Can</title>
      <defs>
        <linearGradient id="cpc_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="30%" stopColor="#312e81" />
          <stop offset="60%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="cpc_metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3730a3" />
          <stop offset="30%" stopColor="#6d28d9" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="80%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id="cpc_nightband" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="cpc_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="45" cy="18" rx="36" ry="10" fill="#1e1b4b" />
      {/* Metallic purple lid */}
      <ellipse cx="45" cy="16.5" rx="33" ry="8.5" fill="url(#cpc_metal)" />
      <ellipse
        cx="45"
        cy="15.5"
        rx="26"
        ry="6.5"
        fill="none"
        stroke="#6d28d9"
        strokeWidth="0.8"
      />
      <ellipse
        cx="45"
        cy="15.5"
        rx="18"
        ry="4.5"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="0.5"
      />
      {/* Can body */}
      <rect
        x="10"
        y="16"
        width="70"
        height="90"
        rx="3"
        fill="url(#cpc_body)"
        stroke="#3730a3"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <rect x="11" y="17" width="8" height="88" rx="2" fill="url(#cpc_shine)" />
      {/* Top band */}
      <rect
        x="10"
        y="16"
        width="70"
        height="8"
        fill="url(#cpc_metal)"
        opacity="0.7"
      />
      {/* Bottom lid */}
      <ellipse cx="45" cy="106" rx="36" ry="10" fill="#1e1b4b" />
      <ellipse cx="45" cy="104.5" rx="33" ry="8.5" fill="url(#cpc_metal)" />
      {/* Night purple band */}
      <rect x="10" y="36" width="70" height="6" fill="url(#cpc_nightband)" />
      {/* Moon/stars decoration */}
      <circle cx="22" cy="50" r="3" fill="#a78bfa" opacity="0.25" />
      <circle cx="68" cy="46" r="2" fill="#c4b5fd" opacity="0.2" />
      <circle cx="58" cy="58" r="1.5" fill="#a78bfa" opacity="0.2" />
      {/* Header brand zone */}
      <rect x="13" y="24" width="64" height="12" rx="1" fill="#1e1b4b" />
      <text
        x="45"
        y="30"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#c4b5fd"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="36"
        textAnchor="middle"
        fontSize="5"
        fill="#6d28d9"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Main label */}
      <rect
        x="13"
        y="44"
        width="64"
        height="50"
        rx="2"
        fill="#1e1b4b"
        opacity="0.7"
      />
      <text
        x="45"
        y="57"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.3"
      >
        CASEIN PROTEIN
      </text>
      {/* Moon icon */}
      <path
        d="M40 62 Q44 58 48 62 Q50 68 45 71 Q40 71 40 62Z"
        fill="#a78bfa"
        opacity="0.5"
      />
      {/* NIGHT text */}
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#8b5cf6"
        fontFamily="Arial"
        letterSpacing="2"
      >
        NIGHT
      </text>
      <text
        x="45"
        y="90"
        textAnchor="middle"
        fontSize="6"
        fill="#a78bfa"
        fontFamily="Arial"
      >
        केसीन प्रोटीन • Night Recovery
      </text>
      {/* Net weight bar */}
      <rect x="28" y="93" width="34" height="7" rx="3.5" fill="#4c1d95" />
      <text
        x="45"
        y="98"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        500g • Slow Release
      </text>
    </svg>
  );
}

function LactoseFreeMilkTetraPackSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Lactose-Free Milk Tetrapack</title>
      <defs>
        <linearGradient id="lft_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ccfbf1" />
          <stop offset="100%" stopColor="#f0fdfa" />
        </linearGradient>
        <linearGradient id="lft_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
        <linearGradient id="lft_side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lft_foil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="40%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      {/* Gable top panels */}
      <polygon points="8,18 45,5 45,18" fill="#0f766e" />
      <polygon points="82,18 45,5 45,18" fill="#0e6a63" />
      <line x1="45" y1="5" x2="45" y2="18" stroke="#0d9488" strokeWidth="1" />
      {/* Opening tab */}
      <rect x="33" y="9" width="24" height="9" rx="3" fill="#dc2626" />
      <rect x="35" y="7" width="20" height="5" rx="2.5" fill="#b91c1c" />
      <text
        x="45"
        y="15"
        textAnchor="middle"
        fontSize="4"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        OPEN HERE
      </text>
      {/* Carton body */}
      <rect
        x="8"
        y="18"
        width="74"
        height="93"
        rx="2"
        fill="url(#lft_bg)"
        stroke="#0d9488"
        strokeWidth="1.5"
      />
      {/* Side shine */}
      <rect x="9" y="19" width="12" height="91" rx="2" fill="url(#lft_side)" />
      {/* Silver foil strip */}
      <rect x="8" y="46" width="74" height="3" fill="url(#lft_foil)" />
      {/* Teal header band */}
      <rect x="8" y="18" width="74" height="24" fill="url(#lft_header)" />
      <text
        x="45"
        y="28"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="37"
        textAnchor="middle"
        fontSize="5.5"
        fill="#99f6e4"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Content label zone */}
      <rect
        x="13"
        y="50"
        width="64"
        height="52"
        rx="3"
        fill="white"
        opacity="0.8"
      />
      <rect
        x="14"
        y="51"
        width="62"
        height="50"
        rx="2"
        fill="none"
        stroke="#99f6e4"
        strokeWidth="0.5"
      />
      {/* LACTOSE FREE badge — prominent */}
      <rect x="18" y="54" width="54" height="11" rx="5.5" fill="#0f766e" />
      <text
        x="45"
        y="62"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.3"
      >
        LACTOSE FREE
      </text>
      {/* Product name */}
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#0f766e"
        fontFamily="Arial"
        letterSpacing="1"
      >
        MILK
      </text>
      <text
        x="45"
        y="90"
        textAnchor="middle"
        fontSize="7"
        fill="#0d9488"
        fontFamily="Arial"
      >
        लैक्टोज-फ्री दूध
      </text>
      <text
        x="45"
        y="98"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        EASY DIGEST • 0% LACTOSE
      </text>
      {/* Bottom info bar */}
      <rect x="8" y="103" width="74" height="8" fill="#0d9488" opacity="0.12" />
      <text
        x="45"
        y="109"
        textAnchor="middle"
        fontSize="4.5"
        fill="#0f766e"
        fontFamily="Arial"
      >
        NET 1 LITRE • Keep Refrigerated
      </text>
      {/* Opening indicator */}
      <rect
        x="28"
        y="42"
        width="34"
        height="4"
        rx="2"
        fill="white"
        opacity="0.4"
      />
      <text
        x="45"
        y="45.5"
        textAnchor="middle"
        fontSize="3.5"
        fill="#0f766e"
        fontFamily="Arial"
      >
        OPEN HERE ▲
      </text>
    </svg>
  );
}

function MilkPowderPackSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Milk Powder Pack</title>
      <defs>
        <linearGradient id="mpp_body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="40%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="mpp_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="mpp_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mpp_seal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      {/* Stand-up pouch body */}
      <path
        d="M22 10 Q50 5 78 10 L84 18 Q88 28 86 100 Q84 114 50 116 Q16 114 14 100 Q12 28 16 18Z"
        fill="url(#mpp_body)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      {/* Glossy shine */}
      <path
        d="M18 20 Q16 35 16 86 Q16 106 20 112"
        stroke="url(#mpp_shine)"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* Heat-seal top */}
      <path d="M22 10 Q50 5 78 10 L82 17 Q50 12 18 17Z" fill="url(#mpp_seal)" />
      <line
        x1="18"
        y1="17.5"
        x2="82"
        y2="17.5"
        stroke="#93c5fd"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
      {/* Header brand band */}
      <rect x="14" y="18" width="72" height="22" fill="url(#mpp_header)" />
      <text
        x="50"
        y="28"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="36.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Inner label area */}
      <rect
        x="18"
        y="42"
        width="64"
        height="48"
        rx="3"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="19"
        y="43"
        width="62"
        height="46"
        rx="2"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="0.5"
        strokeDasharray="4,3"
      />
      {/* Scoop badge */}
      <rect x="28" y="45" width="44" height="8" rx="4" fill="#1d4ed8" />
      <text
        x="50"
        y="50.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        ENRICHED FORMULA
      </text>
      {/* Product name */}
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        MILK
      </text>
      <text
        x="50"
        y="77"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        POWDER
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontSize="6"
        fill="#374151"
        fontFamily="Arial"
      >
        मिल्क पाउडर
      </text>
      {/* Bottom band */}
      <rect x="14" y="93" width="72" height="14" fill="#1d4ed8" />
      <text
        x="50"
        y="101"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontFamily="Arial"
      >
        NET WT 500g • Full Cream
      </text>
      <text
        x="50"
        y="105"
        textAnchor="middle"
        fontSize="4"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        Instant Dissolving
      </text>
      {/* Bottom heat seal */}
      <path
        d="M14 107 L86 107 Q84 114 50 116 Q16 114 14 107Z"
        fill="url(#mpp_seal)"
      />
      <line
        x1="14"
        y1="107"
        x2="86"
        y2="107"
        stroke="#93c5fd"
        strokeWidth="0.6"
        strokeDasharray="3,2"
      />
    </svg>
  );
}

function BasundiTubSVG() {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Basundi Tub</title>
      <defs>
        <linearGradient id="bst_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="50%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="bst_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c2410c" />
          <stop offset="25%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="75%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="bst_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bst_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="50" cy="17" rx="43" ry="11.5" fill="#7c2d12" />
      {/* Lid */}
      <ellipse cx="50" cy="15.5" rx="40" ry="10" fill="url(#bst_lid)" />
      {/* Lid shine */}
      <ellipse cx="36" cy="12" rx="12" ry="4.5" fill="white" opacity="0.28" />
      {/* Lid ridges */}
      <ellipse
        cx="50"
        cy="15"
        rx="34"
        ry="8"
        fill="none"
        stroke="#fdba74"
        strokeWidth="0.7"
      />
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        BASUNDI • बासुंदी
      </text>
      {/* Tub body */}
      <path
        d="M8 17 Q6 22 10 72 Q10 82 50 82 Q90 82 90 72 Q94 22 92 17Z"
        fill="url(#bst_body)"
        stroke="#fdba74"
        strokeWidth="1.5"
      />
      {/* Tub shine */}
      <path
        d="M12 24 Q11 58 13 74"
        stroke="url(#bst_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Saffron thread decoration */}
      <path
        d="M22 42 Q50 36 78 42"
        stroke="#f97316"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        strokeDasharray="3,2"
      />
      <circle cx="30" cy="48" r="2.5" fill="#f97316" opacity="0.4" />
      <circle cx="55" cy="44" r="1.8" fill="#ea580c" opacity="0.35" />
      <circle cx="72" cy="50" r="2" fill="#fb923c" opacity="0.4" />
      {/* Inner label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="48"
        rx="4"
        fill="white"
        opacity="0.82"
      />
      <rect
        x="15"
        y="25"
        width="70"
        height="46"
        rx="3"
        fill="none"
        stroke="#fdba74"
        strokeWidth="0.6"
      />
      {/* Header band on label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="14"
        rx="4"
        fill="url(#bst_header)"
      />
      <rect x="14" y="32" width="72" height="6" fill="#7c2d12" />
      <text
        x="50"
        y="31"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="5"
        fill="#fed7aa"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* TRADITIONAL RECIPE badge */}
      <rect x="26" y="40" width="48" height="7" rx="3.5" fill="#f97316" />
      <text
        x="50"
        y="45.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        TRADITIONAL RECIPE
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#c2410c"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        BASUNDI
      </text>
      {/* Nutrition band */}
      <rect x="14" y="64" width="72" height="7" rx="2" fill="#fff7ed" />
      <text
        x="50"
        y="69.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#9a3412"
        fontFamily="Arial"
      >
        बासुंदी • NET WT 250g • Saffron
      </text>
    </svg>
  );
}

function RabriTubSVG() {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Rabri Tub</title>
      <defs>
        <linearGradient id="rbt_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="50%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="rbt_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="25%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="75%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="rbt_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rbt_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
      </defs>
      {/* Lid rim */}
      <ellipse cx="50" cy="17" rx="43" ry="11.5" fill="#713f12" />
      {/* Lid */}
      <ellipse cx="50" cy="15.5" rx="40" ry="10" fill="url(#rbt_lid)" />
      {/* Lid shine */}
      <ellipse cx="36" cy="12" rx="12" ry="4.5" fill="white" opacity="0.25" />
      {/* Lid ridges */}
      <ellipse
        cx="50"
        cy="15"
        rx="34"
        ry="8"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="0.7"
      />
      <text
        x="50"
        y="18"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        RABRI • रबड़ी
      </text>
      {/* Tub body */}
      <path
        d="M8 17 Q6 22 10 72 Q10 82 50 82 Q90 82 90 72 Q94 22 92 17Z"
        fill="url(#rbt_body)"
        stroke="#fcd34d"
        strokeWidth="1.5"
      />
      {/* Tub shine */}
      <path
        d="M12 24 Q11 58 13 74"
        stroke="url(#rbt_shine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Cream layer lines — Indian sweet aesthetic */}
      <path
        d="M14 38 Q50 32 86 38"
        stroke="#d97706"
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M14 46 Q50 40 86 46"
        stroke="#f59e0b"
        strokeWidth="0.8"
        fill="none"
        opacity="0.45"
      />
      {/* Cardamom/kesar decoration */}
      <circle cx="30" cy="52" r="2" fill="#d97706" opacity="0.4" />
      <circle cx="55" cy="50" r="1.5" fill="#b45309" opacity="0.35" />
      <circle cx="72" cy="54" r="2" fill="#f59e0b" opacity="0.4" />
      {/* Inner label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="48"
        rx="4"
        fill="white"
        opacity="0.8"
      />
      <rect
        x="15"
        y="25"
        width="70"
        height="46"
        rx="3"
        fill="none"
        stroke="#fde68a"
        strokeWidth="0.6"
      />
      {/* Header band on label */}
      <rect
        x="14"
        y="24"
        width="72"
        height="14"
        rx="4"
        fill="url(#rbt_header)"
      />
      <rect x="14" y="32" width="72" height="6" fill="#713f12" />
      <text
        x="50"
        y="31"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.4"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="5"
        fill="#fde68a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* NORTH INDIAN DELIGHT badge */}
      <rect x="26" y="40" width="48" height="7" rx="3.5" fill="#b45309" />
      <text
        x="50"
        y="45.5"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        NORTH INDIAN DELIGHT
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        RABRI
      </text>
      {/* Nutrition band */}
      <rect x="14" y="64" width="72" height="7" rx="2" fill="#fffbeb" />
      <text
        x="50"
        y="69.5"
        textAnchor="middle"
        fontSize="4.5"
        fill="#78350f"
        fontFamily="Arial"
      >
        रबड़ी • NET WT 250g • Kesar
      </text>
    </svg>
  );
}

function LactosePowderPackSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Lactose Powder Pack</title>
      <defs>
        <linearGradient id="lpp_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fafaf9" />
          <stop offset="60%" stopColor="#f5f5f4" />
          <stop offset="100%" stopColor="#e7e5e4" />
        </linearGradient>
        <linearGradient id="lpp_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#292524" />
          <stop offset="100%" stopColor="#1c1917" />
        </linearGradient>
        <linearGradient id="lpp_industrial" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#57534e" />
          <stop offset="50%" stopColor="#78716c" />
          <stop offset="100%" stopColor="#57534e" />
        </linearGradient>
        <linearGradient id="lpp_3d_right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#44403c" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#44403c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lpp_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D industrial box effects */}
      <path d="M8 108 L14 114 L92 114 L86 108Z" fill="#44403c" opacity="0.25" />
      <path d="M86 8 L92 14 L92 114 L86 108Z" fill="#44403c" opacity="0.2" />
      {/* Box face */}
      <rect
        x="8"
        y="8"
        width="78"
        height="100"
        rx="4"
        fill="url(#lpp_body)"
        stroke="#78716c"
        strokeWidth="2"
      />
      {/* Shine */}
      <rect x="9" y="9" width="10" height="98" rx="2" fill="url(#lpp_shine)" />
      {/* Header band */}
      <rect x="8" y="8" width="78" height="24" rx="4" fill="url(#lpp_header)" />
      <rect x="8" y="26" width="78" height="6" fill="#1c1917" />
      <text
        x="47"
        y="19"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="47"
        y="28.5"
        textAnchor="middle"
        fontSize="5.5"
        fill="#a8a29e"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Industrial warning/quality stripes */}
      <rect
        x="8"
        y="44"
        width="78"
        height="5"
        fill="url(#lpp_industrial)"
        opacity="0.6"
      />
      <rect
        x="8"
        y="94"
        width="78"
        height="5"
        fill="url(#lpp_industrial)"
        opacity="0.6"
      />
      {/* FOOD GRADE badge */}
      <rect x="18" y="50" width="58" height="8" rx="4" fill="#57534e" />
      <text
        x="47"
        y="55.5"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        FOOD GRADE INDUSTRIAL
      </text>
      {/* Product name */}
      <text
        x="47"
        y="70"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1c1917"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        LACTOSE
      </text>
      <text
        x="47"
        y="82"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#292524"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        POWDER
      </text>
      <text
        x="47"
        y="91"
        textAnchor="middle"
        fontSize="6.5"
        fill="#57534e"
        fontFamily="Arial"
      >
        लैक्टोज पाउडर
      </text>
      {/* Info band */}
      <rect x="8" y="99" width="78" height="8" fill="#e7e5e4" />
      <text
        x="47"
        y="105"
        textAnchor="middle"
        fontSize="4.5"
        fill="#44403c"
        fontFamily="Arial"
      >
        NET WT 1kg • Pharmaceutical Grade
      </text>
      {/* Barcode strip */}
      <rect
        x="12"
        y="70"
        width="22"
        height="7"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[14, 15.5, 17, 18.5, 20, 22, 23.5, 25, 26.5, 28, 29.5, 31].map((x) => (
        <rect key={x} x={x} y="71" width="0.7" height="5" fill="#1e293b" />
      ))}
    </svg>
  );
}

function DessertCupSVG() {
  return (
    <svg
      viewBox="0 0 100 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Dessert Cup</title>
      <defs>
        <linearGradient id="dc_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#f3e8ff" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="24" rx="40" ry="12" fill="#7c3aed" />
      <ellipse cx="50" cy="22" rx="37" ry="10" fill="#8b5cf6" />
      <text
        x="50"
        y="25"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        YADAV DAIRY SWEETS
      </text>
      <path
        d="M12 24 L16 94 Q16 100 50 100 Q84 100 84 94 L88 24Z"
        fill="url(#dc_bg)"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="32"
        width="64"
        height="54"
        rx="4"
        fill="white"
        opacity="0.7"
        stroke="#fbbf24"
        strokeWidth="0.8"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#6d28d9"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        SWEETS
      </text>
      <text
        x="50"
        y="82"
        textAnchor="middle"
        fontSize="6.5"
        fill="#8b5cf6"
        fontFamily="Arial"
      >
        मिठाई
      </text>
    </svg>
  );
}

function GenericDairySVG({ productName }: { productName?: string }) {
  const name = productName ?? "DAIRY";
  const truncated = name.length > 12 ? `${name.slice(0, 12)}…` : name;
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Product</title>
      <defs>
        <linearGradient id="gd_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="gd_header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="gd_3d_right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gd_shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D box effect */}
      <path d="M8 108 L14 114 L92 114 L86 108Z" fill="#1e40af" opacity="0.2" />
      <path d="M86 8 L92 14 L92 114 L86 108Z" fill="#1e40af" opacity="0.18" />
      {/* Box front */}
      <rect
        x="8"
        y="8"
        width="78"
        height="100"
        rx="6"
        fill="url(#gd_body)"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      {/* Shine */}
      <rect x="9" y="9" width="10" height="98" rx="3" fill="url(#gd_shine)" />
      {/* Header band */}
      <rect x="8" y="8" width="78" height="24" rx="6" fill="url(#gd_header)" />
      <rect x="8" y="26" width="78" height="6" fill="#1e40af" />
      <text
        x="47"
        y="19"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        YADAV DAIRY
      </text>
      <text
        x="47"
        y="28"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      {/* Quality star seal */}
      <circle cx="47" cy="62" r="18" fill="#dbeafe" opacity="0.6" />
      <circle cx="47" cy="62" r="14" fill="#bfdbfe" opacity="0.7" />
      {/* Star shape */}
      <path
        d="M47 50 L49 58 L57 58 L51 63 L53 71 L47 66 L41 71 L43 63 L37 58 L45 58Z"
        fill="#1d4ed8"
        opacity="0.6"
      />
      {/* Product name */}
      <text
        x="47"
        y="88"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >
        {truncated.toUpperCase()}
      </text>
      {/* Info band */}
      <rect x="8" y="96" width="78" height="8" fill="#dbeafe" opacity="0.7" />
      <text
        x="47"
        y="102"
        textAnchor="middle"
        fontSize="5"
        fill="#1e40af"
        fontFamily="Arial"
      >
        DAIRY PRODUCT • Premium Quality
      </text>
      {/* Barcode */}
      <rect
        x="56"
        y="78"
        width="26"
        height="8"
        rx="1"
        fill="white"
        opacity="0.7"
      />
      {[
        58, 59.5, 61, 62.5, 64, 65.5, 67.5, 69, 70.5, 72, 73.5, 75.5, 77, 78.5,
      ].map((x) => (
        <rect key={x} x={x} y="79" width="0.8" height="6" fill="#1e293b" />
      ))}
    </svg>
  );
}

const SVG_MAP: Record<string, React.FC<{ productName?: string }>> = {
  milk_pouch: () => <MilkPouchSVG />,
  milk_bottle: () => <MilkBottleSVG />,
  milk_tetrapack: () => <MilkTetrapackSVG />,
  butter_box: () => <ButterBoxSVG />,
  ghee_jar: () => <GheeJarSVG />,
  ghee_tin: () => <GheeTinSVG />,
  paneer_block: () => <PaneerBlockSVG />,
  curd_cup: () => <CurdCupSVG />,
  yogurt_cup: () => <YogurtCupSVG />,
  butter_milk_pouch: () => <ButtermilkPouchSVG />,
  buttermilk_pouch: () => <ButtermilkPouchSVG />,
  lassi_bottle: () => <LassiBottleSVG />,
  cream_tub: () => <CreamTubSVG />,
  cheese_block: () => <CheeseBlockSVG />,
  mozzarella_block: () => <MozzarellaBlockSVG />,
  cheddar_block: () => <CheddarBlockSVG />,
  cheese_slices_box: () => <CheeseSlicesSVG />,
  cheese_slices: () => <CheeseSlicesSVG />,
  cream_cheese_tub: () => <CreamCheeseTubSVG />,
  cream_tub_small: () => <CreamTubSVG />,
  ice_cream_tub: () => <IceCreamTubSVG />,
  kulfi_stick: () => <KulfiStickSVG />,
  condensed_milk_can: () => <CondensedMilkCanSVG />,
  milk_powder_box: () => <MilkPowderBoxSVG />,
  khoa_box: () => <KhoaBoxSVG />,
  flavored_milk_tetrapack: () => <FlavoredMilkTetrapackSVG />,
  flavored_milk_bottle: () => <FlavoredMilkTetrapackSVG />,
  oat_milk_tetrapack: () => (
    <SmallTetrapackSVG label="OAT MILK" labelHindi="ओट मिल्क" />
  ),
  almond_milk_tetrapack: () => (
    <SmallTetrapackSVG label="ALMOND MILK" labelHindi="बादाम दूध" />
  ),
  soy_milk_tetrapack: () => (
    <SmallTetrapackSVG label="SOY MILK" labelHindi="सोया दूध" />
  ),
  coconut_milk_tetrapack: () => (
    <SmallTetrapackSVG label="COCONUT MILK" labelHindi="नारियल दूध" />
  ),
  plant_milk_carton: () => (
    <SmallTetrapackSVG label="PLANT MILK" labelHindi="प्लांट मिल्क" />
  ),
  protein_drink_bottle: () => <ProteinDrinkBottleSVG />,
  protein_powder_jar: () => <ProteinDrinkBottleSVG />,
  kefir_bottle: () => <KefirBottlePurpleSVG />,
  kefir_bottle_green: () => <KefirBottleSVG />,
  dessert_cup: () => <DessertCupSVG />,
  buffalo_milk_pouch: () => <BuffaloMilkPouchSVG />,
  goat_milk_bottle: () => <GoatMilkBottleSVG />,
  camel_milk_bottle: () => <CamelMilkBottleSVG />,
  a2_milk_bottle: () => <A2MilkBottleSVG />,
  misti_dahi_cup: () => <MistiDahiCupSVG />,
  sour_cream_tub: () => <SourCreamTubSVG />,
  kefir_bottle_purple: () => <KefirBottlePurpleSVG />,
  whey_protein_can: () => <WheyProteinCanSVG />,
  casein_protein_can: () => <CaseinProteinCanSVG />,
  lactose_free_tetrapack: () => <LactoseFreeMilkTetraPackSVG />,
  milk_powder_pack: () => <MilkPowderPackSVG />,
  basundi_tub: () => <BasundiTubSVG />,
  rabri_tub: () => <RabriTubSVG />,
  lactose_powder_pack: () => <LactosePowderPackSVG />,
};

export default function ProductPackageSVG({
  packagingKey,
  productName,
  size = "md",
  className = "",
}: ProductPackageSVGProps) {
  const px = SIZE_MAP[size];
  const SVGComponent = SVG_MAP[packagingKey];

  return (
    <div
      className={`flex items-center justify-center transition-transform duration-200 hover:scale-105 ${className}`}
      style={{ width: px, height: px }}
      aria-label={`${productName ?? packagingKey} packaging`}
      role="img"
    >
      {SVGComponent ? (
        <SVGComponent productName={productName} />
      ) : (
        <GenericDairySVG productName={productName} />
      )}
    </div>
  );
}
