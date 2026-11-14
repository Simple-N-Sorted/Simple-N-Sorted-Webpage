import type { ArtKind, CollectionId } from "@/data/products";

const bg: Record<CollectionId, string> = {
  "kitchen-pantry": "#EDE8DF",
  closet: "#E4EEEA",
  bath: "#E5EBEF",
};

const INK = "#1E2A2B";
const ACC = "#2F6B5E";
const SOFT = "#FFFFFF";
const MID = "#C9D8D2";

function Shape({ kind }: { kind: ArtKind }) {
  const s = { stroke: INK, strokeWidth: 4, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  switch (kind) {
    case "tray":
      return (
        <g {...s}>
          <rect x="70" y="110" width="260" height="180" rx="18" fill={SOFT} />
          <path d="M150 110v180M250 110v180M150 200h100" fill="none" />
          <rect x="84" y="124" width="52" height="152" rx="8" fill={MID} stroke="none" />
          <rect x="264" y="124" width="52" height="68" rx="8" fill={ACC} stroke="none" />
        </g>
      );
    case "drawers":
      return (
        <g {...s}>
          <rect x="95" y="95" width="210" height="100" rx="12" fill={SOFT} />
          <rect x="95" y="205" width="210" height="100" rx="12" fill={SOFT} />
          <rect x="170" y="135" width="60" height="16" rx="8" fill={ACC} />
          <rect x="170" y="245" width="60" height="16" rx="8" fill={MID} />
        </g>
      );
    case "canisters":
      return (
        <g {...s}>
          <rect x="70" y="170" width="76" height="140" rx="12" fill={SOFT} />
          <rect x="64" y="154" width="88" height="22" rx="8" fill={ACC} />
          <rect x="162" y="130" width="76" height="180" rx="12" fill={SOFT} />
          <rect x="156" y="114" width="88" height="22" rx="8" fill={ACC} />
          <rect x="254" y="200" width="76" height="110" rx="12" fill={SOFT} />
          <rect x="248" y="184" width="88" height="22" rx="8" fill={ACC} />
          <path d="M82 240h52M174 220h52M266 260h52" stroke={MID} />
        </g>
      );
    case "tiered":
      return (
        <g {...s}>
          <path d="M110 90v230M290 90v230" fill="none" />
          <rect x="100" y="120" width="200" height="60" rx="10" fill={SOFT} />
          <rect x="100" y="230" width="200" height="60" rx="10" fill={SOFT} />
          <rect x="125" y="100" width="34" height="34" rx="6" fill={ACC} />
          <rect x="170" y="210" width="40" height="34" rx="6" fill={MID} />
          <rect x="220" y="96" width="30" height="40" rx="6" fill={MID} />
        </g>
      );
    case "turntable":
      return (
        <g {...s}>
          <ellipse cx="200" cy="270" rx="130" ry="36" fill={SOFT} />
          <rect x="130" y="150" width="40" height="110" rx="10" fill={ACC} />
          <rect x="185" y="180" width="34" height="84" rx="10" fill={MID} />
          <rect x="235" y="130" width="38" height="132" rx="10" fill={SOFT} />
          <rect x="245" y="112" width="18" height="20" rx="4" fill={INK} stroke="none" />
        </g>
      );
    case "hangers":
      return (
        <g {...s} fill="none">
          <path d="M60 110h280" strokeWidth="6" />
          {[110, 200, 290].map((x, i) => (
            <g key={x}>
              <path d={`M${x} 110c0-14 14-14 14 0s-14 18-14 28`} />
              <path d={`M${x} 138l-58 46h116z`} fill={i === 1 ? ACC : SOFT} />
            </g>
          ))}
          <rect x="150" y="200" width="100" height="100" rx="10" fill={MID} stroke="none" />
        </g>
      );
    case "hanging-shelf":
      return (
        <g {...s}>
          <path d="M80 80h240" strokeWidth="6" fill="none" />
          <path d="M150 80v30M250 80v30" fill="none" />
          <rect x="140" y="110" width="120" height="220" rx="8" fill={SOFT} />
          {[146, 183, 220, 257, 294].map((y) => (
            <path key={y} d={`M140 ${y}h120`} fill="none" />
          ))}
          <rect x="155" y="118" width="40" height="22" rx="4" fill={ACC} stroke="none" />
          <rect x="200" y="192" width="48" height="22" rx="4" fill={MID} stroke="none" />
        </g>
      );
    case "bins":
      return (
        <g {...s}>
          <rect x="70" y="150" width="120" height="80" rx="10" fill={SOFT} />
          <rect x="210" y="150" width="120" height="80" rx="10" fill={ACC} />
          <rect x="70" y="240" width="260" height="70" rx="10" fill={SOFT} />
          <rect x="120" y="100" width="160" height="40" rx="10" fill={MID} />
          <path d="M110 180h40M250 180h40" stroke={INK} fill="none" />
        </g>
      );
    case "hooks":
      return (
        <g {...s}>
          <rect x="80" y="100" width="240" height="26" rx="8" fill={SOFT} />
          {[120, 200, 280].map((x) => (
            <path key={x} d={`M${x} 126v40c0 16 22 16 22 0`} fill="none" />
          ))}
          <path d="M175 175h50l18 120h-86z" fill={ACC} />
          <path d="M188 175c0-26 24-26 24 0" fill="none" />
        </g>
      );
    case "caddy":
      return (
        <g {...s}>
          <path d="M60 120h280M60 200h280M60 280h280M150 60v280M250 60v280" stroke={MID} strokeWidth="3" fill="none" />
          <rect x="120" y="160" width="40" height="80" rx="10" fill={ACC} />
          <rect x="175" y="140" width="40" height="100" rx="10" fill={SOFT} />
          <rect x="230" y="180" width="44" height="60" rx="10" fill={MID} />
          <rect x="95" y="240" width="210" height="26" rx="8" fill={SOFT} />
        </g>
      );
  }
}

type Props = {
  kind: ArtKind;
  collection: CollectionId;
  label: string;
  className?: string;
};

/** Neutral placeholder illustration used until real product photos exist. */
export function ProductArt({ kind, collection, label, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label={`Sample illustration: ${label}`}
      className={`block h-auto w-full ${className}`}
    >
      <rect width="400" height="400" fill={bg[collection]} />
      <Shape kind={kind} />
      <text
        x="384"
        y="384"
        textAnchor="end"
        fontSize="15"
        fontFamily="system-ui, sans-serif"
        fill="#59666A"
        letterSpacing="1"
      >
        SAMPLE IMAGE
      </text>
    </svg>
  );
}
