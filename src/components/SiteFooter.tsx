const LINKS: { label: string; href: string; download?: string }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/egecelikgogus" },
  { label: "Behance", href: "https://www.behance.net/egecl" },
  { label: "Resume", href: "/CV_Ege%20Celikgogus.pdf", download: "Ege-Celikgogus-CV.pdf" },
];

export default function SiteFooter() {
  return (
    <footer className="sitefooter">
      <div className="sitefooter__inner">
        <p className="sitefooter__place">Vienna, AT · 48.21° N, 16.37° E</p>

        <nav className="sitefooter__nav" aria-label="Social and résumé">
          {LINKS.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                {...(l.download ? { download: l.download } : {})}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <p className="sitefooter__copy">
          © {new Date().getFullYear()} Ege Çelikgöğüs
        </p>
      </div>
    </footer>
  );
}
