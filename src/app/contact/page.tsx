import Navbar from "@/components/Navbar";
import ContactContent from "./ContactContent";

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <ContactContent />
    </main>
  );
}
