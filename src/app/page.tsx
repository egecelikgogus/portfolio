import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* Spacer - smaller on mobile */}
      <div
        style={{
          height: "clamp(36px, 10vw, 90px)",
          flexShrink: 0,
        }}
      />

      {/* Horizontal scroll carousel */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <Carousel />
      </div>

      <ScrollIndicator />
    </main>
  );
}
