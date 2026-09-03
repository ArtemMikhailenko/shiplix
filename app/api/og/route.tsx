import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const clamp = (value: string | null, max: number, fallback = "") => {
  const text = (value ?? "").trim() || fallback;
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
};

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = clamp(
    searchParams.get("title"),
    80,
    "We ship products that matter"
  );
  const subtitle = clamp(
    searchParams.get("subtitle"),
    130,
    "SaaS · Marketplaces · Fintech · Mobile"
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-260px",
            right: "-160px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 68%)",
          }}
        />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #b4a0ff 0%, #8b5cf6 100%)",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
            }}
          >
            shiplix
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: title.length > 46 ? "60px" : "74px",
              fontWeight: 700,
              color: "#f5f5f7",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              maxWidth: "960px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: "26px",
              fontSize: "28px",
              color: "#8a8a8e",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: "26px",
          }}
        >
          <div style={{ fontSize: "24px", color: "#56565a" }}>
            shiplix.it.com
          </div>
          <div style={{ fontSize: "24px", color: "#b4a0ff" }}>
            Product dev team · Ukraine
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
