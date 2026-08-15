import { ImageResponse } from "next/og";

export const alt = "Nelio — Reviews on autopilot, the moment the job's done";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a1930",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 22, height: 22, backgroundColor: "#e2590a" }} />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -1,
              textTransform: "uppercase",
            }}
          >
            Nelio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Reviews on autopilot — the moment the job&apos;s done.
          </span>
          <span style={{ fontSize: 28, color: "#c3d0e4", maxWidth: 820 }}>
            Built natively for HVAC and home services. Works with Jobber and
            Housecall Pro.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
