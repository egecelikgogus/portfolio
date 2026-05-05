import Navbar from "@/components/Navbar";
import ResumeContent from "./ResumeContent";

export default function ResumePage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <ResumeContent />
    </main>
  );
}
