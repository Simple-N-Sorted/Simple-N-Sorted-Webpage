import { ImageResponse } from "next/og";

export const alt = "Simple and Sorted: small-space home organization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const cell = (opacity: number) => (
    <div style={{ width: 64, height: 64, borderRadius: 16, background: "#F7F5F1", opacity }} />
  );
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#F7F5F1", color: "#1E2A2B" }}>
        <div style={{ display: "flex", width: 192, height: 192, borderRadius: 44, background: "#2F6B5E", flexWrap: "wrap", gap: 16, padding: 24 }}>
          {cell(1)}{cell(0.55)}{cell(0.55)}{cell(0.55)}
        </div>
        <div style={{ marginTop: 48, fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Simple and Sorted</div>
        <div style={{ marginTop: 12, fontSize: 36, color: "#59666A" }}>Small-space home organization, sorted room by room.</div>
      </div>
    ),
    size,
  );
}
