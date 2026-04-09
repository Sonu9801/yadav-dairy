/**
 * ProductPackageSVG — renders a realistic-looking SVG product package
 * for the given packagingKey (stored in product.imageUrl field).
 * All packages show "Yadav Dairy" / "यादव डेयरी" branding prominently.
 */

export interface ProductPackageSVGProps {
  packagingKey: string;
  productName?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = { sm: 80, md: 160, lg: 240 };

function MilkPouchSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Milk Pouch</title>
      <defs>
        <linearGradient id="mp_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f4fd" />
          <stop offset="100%" stopColor="#c5dff8" />
        </linearGradient>
      </defs>
      <rect
        x="10"
        y="8"
        width="80"
        height="104"
        rx="12"
        fill="url(#mp_bg)"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <rect x="10" y="8" width="80" height="12" rx="6" fill="#3b82f6" />
      <rect x="10" y="80" width="80" height="16" fill="#dc2626" />
      <text
        x="50"
        y="91"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="28"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#1e3a5f"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <ellipse cx="50" cy="52" rx="22" ry="22" fill="white" opacity="0.7" />
      <ellipse cx="50" cy="52" rx="16" ry="16" fill="white" />
      <ellipse
        cx="32"
        cy="44"
        rx="3"
        ry="5"
        fill="white"
        transform="rotate(-30 32 44)"
      />
      <ellipse
        cx="68"
        cy="44"
        rx="3"
        ry="5"
        fill="white"
        transform="rotate(30 68 44)"
      />
      <ellipse cx="50" cy="34" rx="3" ry="5" fill="white" />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="6"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        दूध
      </text>
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        500 ml • Full Cream
      </text>
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
        <linearGradient id="mb_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0fffe" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>
      </defs>
      <rect x="27" y="4" width="26" height="14" rx="4" fill="#0d9488" />
      <rect
        x="30"
        y="16"
        width="20"
        height="14"
        fill="#e6fffa"
        stroke="#0d9488"
        strokeWidth="1"
      />
      <rect
        x="12"
        y="28"
        width="56"
        height="90"
        rx="10"
        fill="url(#mb_bg)"
        stroke="#0d9488"
        strokeWidth="1.5"
      />
      <rect
        x="16"
        y="36"
        width="48"
        height="70"
        rx="6"
        fill="white"
        opacity="0.85"
      />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#0f766e"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="60"
        textAnchor="middle"
        fontSize="5.5"
        fill="#0d9488"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <path
        d="M32 68 Q40 64 48 68 Q48 82 40 86 Q32 82 32 68Z"
        fill="#ccfbf1"
        stroke="#0d9488"
        strokeWidth="1"
      />
      <text
        x="40"
        y="80"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#115e59"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="40"
        y="90"
        textAnchor="middle"
        fontSize="5.5"
        fill="#134e4a"
        fontFamily="Arial"
      >
        Fresh • Toned
      </text>
      <text
        x="40"
        y="100"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        1 Litre
      </text>
    </svg>
  );
}

function MilkTetrapackSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy UHT Milk Tetrapack</title>
      <defs>
        <linearGradient id="mt_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="18"
        width="74"
        height="92"
        rx="4"
        fill="url(#mt_bg)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <polygon points="8,18 45,4 82,18" fill="#2563eb" />
      <line x1="45" y1="4" x2="45" y2="18" stroke="#1d4ed8" strokeWidth="1" />
      <rect x="8" y="18" width="74" height="22" fill="#2563eb" />
      <text
        x="45"
        y="26"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="34"
        textAnchor="middle"
        fontSize="5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <line
        x1="8"
        y1="60"
        x2="82"
        y2="60"
        stroke="#93c5fd"
        strokeWidth="0.5"
        strokeDasharray="3,2"
      />
      <text
        x="45"
        y="55"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >
        UHT MILK
      </text>
      <text
        x="45"
        y="66"
        textAnchor="middle"
        fontSize="6"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        Long Life • UHT दूध
      </text>
      <rect
        x="30"
        y="70"
        width="30"
        height="30"
        rx="3"
        fill="white"
        opacity="0.5"
      />
      <text
        x="45"
        y="88"
        textAnchor="middle"
        fontSize="8"
        fill="#1d4ed8"
        fontFamily="Arial"
      >
        🥛
      </text>
      <text
        x="45"
        y="105"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        1 Litre
      </text>
    </svg>
  );
}

function ButterBoxSVG() {
  return (
    <svg
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Butter Box</title>
      <defs>
        <linearGradient id="bb_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="8"
        width="88"
        height="64"
        rx="6"
        fill="url(#bb_bg)"
        stroke="#d97706"
        strokeWidth="2"
      />
      <rect x="6" y="8" width="88" height="14" rx="6" fill="#f59e0b" />
      <rect x="6" y="16" width="88" height="6" fill="#f59e0b" />
      <text
        x="50"
        y="20"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <rect
        x="30"
        y="28"
        width="40"
        height="24"
        rx="4"
        fill="#fcd34d"
        stroke="#d97706"
        strokeWidth="1"
      />
      <rect x="33" y="31" width="34" height="18" rx="3" fill="#fde68a" />
      <text
        x="50"
        y="43"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        BUTTER
      </text>
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="6.5"
        fill="#78350f"
        fontFamily="Arial"
      >
        मक्खन
      </text>
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        100g • Salted
      </text>
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
        <linearGradient id="gj_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="20" rx="32" ry="8" fill="#d97706" />
      <ellipse cx="45" cy="18" rx="28" ry="6" fill="#f59e0b" />
      <text
        x="45"
        y="21"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        GHEE
      </text>
      <path
        d="M14 20 Q10 24 12 80 Q12 96 45 96 Q78 96 78 80 Q80 24 76 20Z"
        fill="url(#gj_bg)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <rect
        x="16"
        y="36"
        width="58"
        height="50"
        rx="4"
        fill="white"
        opacity="0.75"
      />
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="60"
        textAnchor="middle"
        fontSize="5.5"
        fill="#d97706"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="45"
        y="72"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
      >
        GHEE
      </text>
      <text
        x="45"
        y="83"
        textAnchor="middle"
        fontSize="7"
        fill="#92400e"
        fontFamily="Arial"
      >
        घी
      </text>
      <text
        x="45"
        y="105"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        500 ml • Pure Desi
      </text>
    </svg>
  );
}

function PaneerBlockSVG() {
  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Paneer Block</title>
      <defs>
        <linearGradient id="pb_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fafaf9" />
          <stop offset="100%" stopColor="#f5f5f0" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="10"
        width="98"
        height="60"
        rx="6"
        fill="url(#pb_bg)"
        stroke="#93c5fd"
        strokeWidth="1.5"
      />
      {[20, 32, 44, 56, 68, 80, 92].map((x) => (
        <line
          key={x}
          x1={x}
          y1="10"
          x2={x}
          y2="70"
          stroke="#e5e7eb"
          strokeWidth="0.5"
        />
      ))}
      {[22, 34, 46, 58].map((y) => (
        <line
          key={y}
          x1="6"
          y1={y}
          x2="104"
          y2={y}
          stroke="#e5e7eb"
          strokeWidth="0.5"
        />
      ))}
      <rect x="6" y="10" width="98" height="14" rx="6" fill="#2563eb" />
      <rect x="6" y="18" width="98" height="6" fill="#2563eb" />
      <text
        x="55"
        y="20"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      <text
        x="55"
        y="44"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >
        PANEER
      </text>
      <text
        x="55"
        y="57"
        textAnchor="middle"
        fontSize="8"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        पनीर
      </text>
      <text
        x="55"
        y="67"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200g • Fresh Daily
      </text>
    </svg>
  );
}

function CurdCupSVG() {
  return (
    <svg
      viewBox="0 0 90 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Curd Cup</title>
      <defs>
        <linearGradient id="cc_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="22" rx="36" ry="9" fill="#2563eb" />
      <ellipse cx="45" cy="20" rx="33" ry="7" fill="#3b82f6" />
      <path
        d="M30 20 Q37 15 45 20 Q53 25 60 20"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="45"
        y="23"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        CURD
      </text>
      <path
        d="M12 22 L16 98 Q16 102 45 102 Q74 102 74 98 L78 22Z"
        fill="url(#cc_bg)"
        stroke="#93c5fd"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="32"
        width="54"
        height="56"
        rx="4"
        fill="white"
        opacity="0.8"
      />
      <text
        x="45"
        y="46"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="56"
        textAnchor="middle"
        fontSize="5.5"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="45"
        y="70"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#1d4ed8"
        fontFamily="Arial"
      >
        CURD
      </text>
      <text
        x="45"
        y="81"
        textAnchor="middle"
        fontSize="7.5"
        fill="#2563eb"
        fontFamily="Arial"
      >
        दही
      </text>
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
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#f3e8ff" />
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="22" rx="36" ry="9" fill="#a855f7" />
      <ellipse cx="45" cy="20" rx="33" ry="7" fill="#c084fc" />
      <text
        x="45"
        y="23"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        YOGURT
      </text>
      <path
        d="M12 22 L16 98 Q16 102 45 102 Q74 102 74 98 L78 22Z"
        fill="url(#yc_bg)"
        stroke="#d8b4fe"
        strokeWidth="1.5"
      />
      <circle cx="45" cy="56" r="16" fill="white" opacity="0.6" />
      <path
        d="M34 56 Q38 50 45 56 Q52 62 56 56"
        stroke="#a855f7"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="45"
        y="44"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#7e22ce"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="54"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="bold"
        fill="#7e22ce"
        fontFamily="Arial"
      >
        YOGURT
      </text>
      <text
        x="45"
        y="65"
        textAnchor="middle"
        fontSize="6.5"
        fill="#a855f7"
        fontFamily="Arial"
      >
        दही (Creamy)
      </text>
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200g
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
        <linearGradient id="bm_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
      <rect
        x="10"
        y="8"
        width="80"
        height="104"
        rx="12"
        fill="url(#bm_bg)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      <rect x="10" y="8" width="80" height="12" rx="6" fill="#0284c7" />
      <rect x="10" y="82" width="80" height="16" fill="#0369a1" />
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="26"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#0c4a6e"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <ellipse cx="50" cy="52" rx="22" ry="8" fill="#7dd3fc" opacity="0.5" />
      <ellipse cx="50" cy="52" rx="15" ry="5" fill="#38bdf8" opacity="0.5" />
      <ellipse cx="50" cy="52" rx="8" ry="3" fill="#0ea5e9" opacity="0.6" />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="bold"
        fill="#0369a1"
        fontFamily="Arial"
      >
        CHAAS
      </text>
      <text
        x="50"
        y="79"
        textAnchor="middle"
        fontSize="7"
        fill="#0284c7"
        fontFamily="Arial"
      >
        छाछ • Buttermilk
      </text>
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fontSize="5"
        fill="#374151"
        fontFamily="Arial"
      >
        500 ml • Salted
      </text>
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
        <linearGradient id="lb_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect x="22" y="4" width="26" height="12" rx="4" fill="#d97706" />
      <rect
        x="25"
        y="14"
        width="20"
        height="16"
        fill="#fef9c3"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      <path
        d="M8 30 Q6 34 8 110 Q8 128 35 128 Q62 128 62 110 Q64 34 62 30Z"
        fill="url(#lb_bg)"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      <rect
        x="12"
        y="42"
        width="46"
        height="72"
        rx="5"
        fill="white"
        opacity="0.8"
      />
      <text
        x="35"
        y="55"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="64"
        textAnchor="middle"
        fontSize="5"
        fill="#d97706"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <path
        d="M14 72 Q35 66 56 72"
        stroke="#f59e0b"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="35"
        y="82"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        LASSI
      </text>
      <text
        x="35"
        y="93"
        textAnchor="middle"
        fontSize="7"
        fill="#d97706"
        fontFamily="Arial"
      >
        लस्सी
      </text>
      <text
        x="35"
        y="103"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        Mango Flavor
      </text>
      <text
        x="35"
        y="120"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        250 ml
      </text>
    </svg>
  );
}

function CreamBoxSVG() {
  return (
    <svg
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Cream Box</title>
      <defs>
        <linearGradient id="cb_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fffbf0" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="8"
        width="88"
        height="64"
        rx="6"
        fill="url(#cb_bg)"
        stroke="#d4b483"
        strokeWidth="1.5"
      />
      <path
        d="M6 30 Q30 22 50 28 Q70 34 94 26 L94 8 L6 8Z"
        fill="#fde68a"
        opacity="0.5"
      />
      <rect x="6" y="8" width="88" height="14" rx="6" fill="#d4b483" />
      <rect x="6" y="16" width="88" height="6" fill="#d4b483" />
      <text
        x="50"
        y="19"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY • यादव डेयरी
      </text>
      <path
        d="M30 46 Q40 38 50 46 Q60 54 70 46"
        stroke="#d4b483"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="50"
        y="42"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        CREAM
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="7"
        fill="#b45309"
        fontFamily="Arial"
      >
        मलाई
      </text>
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200 ml • Fresh
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
        <linearGradient id="chb_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="10"
        width="98"
        height="60"
        rx="6"
        fill="url(#chb_bg)"
        stroke="#d97706"
        strokeWidth="2"
      />
      <circle
        cx="28"
        cy="36"
        r="6"
        fill="#fcd34d"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      <circle
        cx="55"
        cy="46"
        r="8"
        fill="#fcd34d"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      <circle
        cx="80"
        cy="32"
        r="5"
        fill="#fcd34d"
        stroke="#f59e0b"
        strokeWidth="1"
      />
      <rect x="6" y="10" width="98" height="14" rx="6" fill="#d97706" />
      <rect x="6" y="18" width="98" height="6" fill="#d97706" />
      <text
        x="55"
        y="20"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="55"
        y="44"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        CHEESE
      </text>
      <text
        x="55"
        y="57"
        textAnchor="middle"
        fontSize="7"
        fill="#78350f"
        fontFamily="Arial"
      >
        चीज़
      </text>
      <text
        x="55"
        y="66"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200g • Natural
      </text>
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
        <linearGradient id="cs_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="84"
        height="104"
        rx="10"
        fill="url(#cs_bg)"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <rect
        x="22"
        y="30"
        width="56"
        height="44"
        rx="4"
        fill="#fcd34d"
        stroke="#d97706"
        strokeWidth="1"
      />
      <rect x="26" y="34" width="48" height="36" rx="3" fill="#fef9c3" />
      {[42, 50, 58].map((y) => (
        <line
          key={y}
          x1="26"
          y1={y}
          x2="74"
          y2={y}
          stroke="#f59e0b"
          strokeWidth="0.8"
          strokeDasharray="3,2"
        />
      ))}
      <text
        x="50"
        y="22"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="#92400e"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="Arial"
      >
        CHEESE
      </text>
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontSize="7"
        fill="#92400e"
        fontFamily="Arial"
      >
        SLICES
      </text>
      <text
        x="50"
        y="84"
        textAnchor="middle"
        fontSize="5.5"
        fill="#374151"
        fontFamily="Arial"
      >
        चीज़ स्लाइस
      </text>
      <text
        x="50"
        y="98"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="#d97706"
        fontFamily="Arial"
      >
        10 Slices
      </text>
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200g Pack
      </text>
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
        <linearGradient id="cct_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="28" rx="40" ry="12" fill="#ec4899" />
      <ellipse cx="50" cy="26" rx="37" ry="10" fill="#f472b6" />
      <text
        x="50"
        y="29"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        CREAM CHEESE
      </text>
      <path
        d="M12 28 Q10 32 14 80 Q14 88 50 88 Q86 88 86 80 Q90 32 88 28Z"
        fill="url(#cct_bg)"
        stroke="#f9a8d4"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="38"
        width="64"
        height="40"
        rx="4"
        fill="white"
        opacity="0.8"
      />
      <text
        x="50"
        y="52"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#9d174d"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#be185d"
        fontFamily="Arial"
      >
        CREAM
      </text>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#be185d"
        fontFamily="Arial"
      >
        CHEESE
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200g
      </text>
    </svg>
  );
}

function IceCreamTubSVG() {
  return (
    <svg
      viewBox="0 0 100 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Ice Cream Tub</title>
      <defs>
        <linearGradient id="ic_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="ic_lid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="33%" stopColor="#a78bfa" />
          <stop offset="66%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="26" rx="42" ry="14" fill="url(#ic_lid)" />
      <ellipse
        cx="50"
        cy="24"
        rx="39"
        ry="12"
        fill="url(#ic_lid)"
        opacity="0.8"
      />
      <text
        x="50"
        y="27"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
      >
        ICE CREAM
      </text>
      <path
        d="M10 26 Q8 30 12 86 Q12 94 50 94 Q88 94 88 86 Q92 30 90 26Z"
        fill="url(#ic_bg)"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      <path
        d="M22 56 Q35 46 50 56 Q65 66 78 56"
        stroke="#f472b6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M22 66 Q35 56 50 66 Q65 76 78 66"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="80"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#7c3aed"
        fontFamily="Arial"
      >
        ICE CREAM
      </text>
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        आइसक्रीम • 500ml
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
        <linearGradient id="ks_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect
        x="14"
        y="6"
        width="52"
        height="90"
        rx="8"
        fill="url(#ks_bg)"
        stroke="#ea580c"
        strokeWidth="1.5"
      />
      <text
        x="40"
        y="22"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#7c2d12"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="40"
        y="32"
        textAnchor="middle"
        fontSize="5.5"
        fill="#ea580c"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <path
        d="M24 40 L56 40 L52 78 Q50 82 40 82 Q30 82 28 78Z"
        fill="#fdba74"
        stroke="#ea580c"
        strokeWidth="1"
      />
      <path
        d="M28 44 L52 44 L49 72 Q47 76 40 76 Q33 76 31 72Z"
        fill="#fde68a"
        opacity="0.6"
      />
      <text
        x="40"
        y="60"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#7c2d12"
        fontFamily="Arial"
      >
        KULFI
      </text>
      <text
        x="40"
        y="70"
        textAnchor="middle"
        fontSize="6"
        fill="#92400e"
        fontFamily="Arial"
      >
        कुल्फी
      </text>
      <rect x="37" y="80" width="6" height="46" rx="3" fill="#d97706" />
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
        <linearGradient id="cm_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="18" rx="36" ry="10" fill="#94a3b8" />
      <ellipse cx="45" cy="16" rx="33" ry="8" fill="#cbd5e1" />
      <rect
        x="10"
        y="16"
        width="70"
        height="88"
        rx="4"
        fill="url(#cm_bg)"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <ellipse cx="45" cy="104" rx="36" ry="8" fill="#94a3b8" />
      <ellipse cx="45" cy="102" rx="33" ry="7" fill="#cbd5e1" />
      <rect
        x="14"
        y="28"
        width="62"
        height="68"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      <text
        x="45"
        y="42"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#1e293b"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="52"
        textAnchor="middle"
        fontSize="5"
        fill="#475569"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="45"
        y="64"
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
        y="74"
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
        fontSize="6"
        fill="#475569"
        fontFamily="Arial"
      >
        मिठाई दूध
      </text>
      <text
        x="45"
        y="93"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        400g Sweetened
      </text>
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
        <linearGradient id="mpb_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="84"
        height="104"
        rx="8"
        fill="url(#mpb_bg)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <rect x="8" y="8" width="84" height="26" rx="8" fill="#2563eb" />
      <rect x="8" y="26" width="84" height="8" fill="#2563eb" />
      <text
        x="50"
        y="20"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="30"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <circle cx="50" cy="64" r="20" fill="#e0f2fe" />
      <circle cx="50" cy="64" r="14" fill="#bae6fd" />
      {[
        [38, 60],
        [55, 58],
        [62, 66],
        [42, 70],
        [52, 72],
      ].map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="2"
          fill="white"
          opacity="0.8"
        />
      ))}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#0369a1"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >
        POWDER
      </text>
      <text
        x="50"
        y="102"
        textAnchor="middle"
        fontSize="6"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        दूध पाउडर
      </text>
      <text
        x="50"
        y="112"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        500g
      </text>
    </svg>
  );
}

function FlavoredMilkBottleSVG() {
  return (
    <svg
      viewBox="0 0 70 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Flavored Milk Bottle</title>
      <defs>
        <linearGradient id="fm_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
      </defs>
      <rect x="22" y="4" width="26" height="12" rx="4" fill="#9d174d" />
      <rect
        x="25"
        y="14"
        width="20"
        height="16"
        fill="#fce7f3"
        stroke="#ec4899"
        strokeWidth="1"
      />
      <path
        d="M8 30 Q6 34 8 110 Q8 128 35 128 Q62 128 62 110 Q64 34 62 30Z"
        fill="url(#fm_bg)"
        stroke="#ec4899"
        strokeWidth="1.5"
      />
      <path
        d="M8 72 Q35 64 62 72 L62 128 Q35 136 8 128Z"
        fill="#f9a8d4"
        opacity="0.3"
      />
      <rect
        x="12"
        y="42"
        width="46"
        height="72"
        rx="5"
        fill="white"
        opacity="0.8"
      />
      <text
        x="35"
        y="56"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#9d174d"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="66"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#be185d"
        fontFamily="Arial"
      >
        FLAVORED
      </text>
      <text
        x="35"
        y="76"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#be185d"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="35"
        y="88"
        textAnchor="middle"
        fontSize="6"
        fill="#ec4899"
        fontFamily="Arial"
      >
        Strawberry
      </text>
      <text
        x="35"
        y="100"
        textAnchor="middle"
        fontSize="5.5"
        fill="#9d174d"
        fontFamily="Arial"
      >
        फ्लेवर्ड दूध
      </text>
      <text
        x="35"
        y="118"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        200 ml
      </text>
    </svg>
  );
}

function PlantMilkCartonSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Plant Milk Carton</title>
      <defs>
        <linearGradient id="pm_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#dcfce7" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="18"
        width="74"
        height="92"
        rx="4"
        fill="url(#pm_bg)"
        stroke="#16a34a"
        strokeWidth="1.5"
      />
      <polygon points="8,18 45,4 82,18" fill="#16a34a" />
      <line x1="45" y1="4" x2="45" y2="18" stroke="#15803d" strokeWidth="1" />
      <rect x="8" y="18" width="74" height="22" fill="#16a34a" />
      <text
        x="45"
        y="27"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="35"
        textAnchor="middle"
        fontSize="5"
        fill="#bbf7d0"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <path
        d="M35 60 Q45 46 55 60 Q50 72 45 74 Q40 72 35 60Z"
        fill="#86efac"
        stroke="#16a34a"
        strokeWidth="1"
      />
      <line x1="45" y1="74" x2="45" y2="88" stroke="#16a34a" strokeWidth="1" />
      <text
        x="45"
        y="96"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#15803d"
        fontFamily="Arial"
      >
        PLANT
      </text>
      <text
        x="45"
        y="107"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#15803d"
        fontFamily="Arial"
      >
        MILK
      </text>
      <text
        x="45"
        y="115"
        textAnchor="middle"
        fontSize="5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        Almond / Oat / Soy • 1L
      </text>
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
      <ellipse
        cx="50"
        cy="22"
        rx="33"
        ry="8"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
      />
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
        y="48"
        textAnchor="middle"
        fontSize="10"
        fill="#fbbf24"
        fontFamily="Arial"
      >
        👑
      </text>
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

function ProteinPowderJarSVG() {
  return (
    <svg
      viewBox="0 0 90 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Yadav Dairy Protein Powder Jar</title>
      <defs>
        <linearGradient id="pp_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="18" rx="36" ry="9" fill="#374151" />
      <ellipse cx="45" cy="16" rx="33" ry="7" fill="#4b5563" />
      <text
        x="45"
        y="19"
        textAnchor="middle"
        fontSize="6"
        fill="#9ca3af"
        fontWeight="bold"
        fontFamily="Arial"
      >
        PROTEIN
      </text>
      <rect
        x="10"
        y="16"
        width="70"
        height="90"
        rx="6"
        fill="url(#pp_bg)"
        stroke="#374151"
        strokeWidth="2"
      />
      <rect x="10" y="52" width="70" height="4" fill="#3b82f6" />
      <text
        x="45"
        y="38"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#9ca3af"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="45"
        y="72"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        PRO
      </text>
      <text
        x="45"
        y="84"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        WHEY PROTEIN
      </text>
      <text
        x="45"
        y="95"
        textAnchor="middle"
        fontSize="6"
        fill="#6b7280"
        fontFamily="Arial"
      >
        प्रोटीन
      </text>
      <text
        x="45"
        y="104"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        1kg • Unflavored
      </text>
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
        <linearGradient id="kb_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      <rect x="22" y="4" width="26" height="12" rx="4" fill="#16a34a" />
      <rect
        x="25"
        y="14"
        width="20"
        height="16"
        fill="#f0fdf4"
        stroke="#16a34a"
        strokeWidth="1"
      />
      <path
        d="M10 30 Q8 34 10 108 Q10 126 35 126 Q60 126 60 108 Q62 34 60 30Z"
        fill="url(#kb_bg)"
        stroke="#4ade80"
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
      <text
        x="35"
        y="58"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="#15803d"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="35"
        y="68"
        textAnchor="middle"
        fontSize="5"
        fill="#16a34a"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <circle cx="35" cy="82" r="8" fill="#bbf7d0" />
      <path
        d="M28 82 Q35 76 42 82"
        stroke="#16a34a"
        strokeWidth="1"
        fill="none"
      />
      <text
        x="35"
        y="96"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="#166534"
        fontFamily="Arial"
      >
        KEFIR
      </text>
      <text
        x="35"
        y="106"
        textAnchor="middle"
        fontSize="5.5"
        fill="#16a34a"
        fontFamily="Arial"
      >
        Probiotic
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
        <linearGradient id="gd_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="84"
        height="104"
        rx="10"
        fill="url(#gd_bg)"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <rect x="8" y="8" width="84" height="22" rx="10" fill="#2563eb" />
      <rect x="8" y="22" width="84" height="8" fill="#2563eb" />
      <text
        x="50"
        y="20"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial"
      >
        YADAV DAIRY
      </text>
      <text
        x="50"
        y="30"
        textAnchor="middle"
        fontSize="5.5"
        fill="#bfdbfe"
        fontFamily="Arial"
      >
        यादव डेयरी
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="10"
        fill="#1d4ed8"
        fontFamily="Arial"
      >
        🥛
      </text>
      <text
        x="50"
        y="75"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial"
      >{`${truncated.toUpperCase()}`}</text>
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fontSize="6"
        fill="#3b82f6"
        fontFamily="Arial"
      >
        Premium Quality
      </text>
      <text
        x="50"
        y="100"
        textAnchor="middle"
        fontSize="5.5"
        fill="#6b7280"
        fontFamily="Arial"
      >
        Fresh Daily
      </text>
    </svg>
  );
}

const SVG_MAP: Record<string, React.FC<{ productName?: string }>> = {
  milk_pouch: () => <MilkPouchSVG />,
  milk_bottle: () => <MilkBottleSVG />,
  milk_tetrapack: () => <MilkTetrapackSVG />,
  butter_box: () => <ButterBoxSVG />,
  ghee_jar: () => <GheeJarSVG />,
  paneer_block: () => <PaneerBlockSVG />,
  curd_cup: () => <CurdCupSVG />,
  yogurt_cup: () => <YogurtCupSVG />,
  buttermilk_pouch: () => <ButtermilkPouchSVG />,
  lassi_bottle: () => <LassiBottleSVG />,
  cream_box: () => <CreamBoxSVG />,
  cheese_block: () => <CheeseBlockSVG />,
  cheese_slices: () => <CheeseSlicesSVG />,
  cream_cheese_tub: () => <CreamCheeseTubSVG />,
  ice_cream_tub: () => <IceCreamTubSVG />,
  kulfi_stick: () => <KulfiStickSVG />,
  condensed_milk_can: () => <CondensedMilkCanSVG />,
  milk_powder_box: () => <MilkPowderBoxSVG />,
  flavored_milk_bottle: () => <FlavoredMilkBottleSVG />,
  plant_milk_carton: () => <PlantMilkCartonSVG />,
  dessert_cup: () => <DessertCupSVG />,
  protein_powder_jar: () => <ProteinPowderJarSVG />,
  kefir_bottle: () => <KefirBottleSVG />,
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
      className={`flex items-center justify-center bg-background/40 ${className}`}
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
