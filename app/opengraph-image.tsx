import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Salon editorial sharing image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "72px 84px",
        background: "#F8F5EF", color: "#1C1C1C", position: "relative"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 24, letterSpacing: 4, fontWeight: 600 }}>UNISEX SALON</div>
        <div style={{ width: 84, height: 2, background: "#977439" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 90, lineHeight: 1.02, letterSpacing: -3, maxWidth: 940 }}>
          {siteConfig.name}
        </div>
        <div style={{ background: "#C6A664", height: 2, width: 112 }} />
        <div style={{ fontSize: 27, color: "#625B53", maxWidth: 850 }}>
          {siteConfig.tagline && !siteConfig.tagline.startsWith("[")
            ? siteConfig.tagline
            : "Considered care. Effortless confidence. For everyone."}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, color: "#625B53" }}>
        <div>HAIR · BEAUTY · PERSONAL EXPRESSION</div>
        <div>{siteConfig.city.startsWith("[") ? "" : siteConfig.city}</div>
      </div>
    </div>,
    { ...size }
  );
}
