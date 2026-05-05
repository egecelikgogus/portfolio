import Navbar from "@/components/Navbar";
import AboutContent from "./AboutContent";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <AboutContent />
    </main>
  );
}
