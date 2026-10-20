import type { Block } from "@/data/caseTypes";
import type { Project } from "@/data/projects";
import CaseHeroVideo from "./CaseHeroVideo";
import CaseImage from "./CaseImage";
import { imageSize } from "@/lib/imageSize";

/* Transparent images must not sit on the loading plate. */
const plate = (src: string) => (imageSize(src)?.alpha ? " plain" : "");

type Pub = { label: string; href: string; note?: string };

/* Fallback: turn legacy {sections, images, responsibilities, additionalImages}
   into blocks so every project looks right even before its copy is condensed
   into a hand-authored `blocks` array. */
function autoBlocks(p: Project, skipFirstImage: boolean): Block[] {
  // images[0] is only dropped when it is the image actually shown in the hero.
  const imgs: string[] = (p.images ?? []).slice(skipFirstImage ? 1 : 0);
  const sections = p.sections ?? [];
  const out: Block[] = [];

  if (p.responsibilities?.length) {
    out.push({
      t: "section",
      label: "00",
      heading: "My role",
      body: `<ul class="rlist">${p.responsibilities
        .map((r) => `<li>${r}</li>`)
        .join("")}</ul>`,
    });
  }

  sections.forEach((s, i) => {
    out.push({
      t: "section",
      label: String(i + 1).padStart(2, "0"),
      heading: s.title,
      body: s.content
        .split("\n\n")
        .map((para) => `<p>${para}</p>`)
        .join(""),
    });
    if (imgs[i]) {
      out.push({
        t: "image",
        src: imgs[i],
        alt: `${p.title} — ${s.title}`,
        wide: true,
      });
    }
  });

  // Anything left over (extra images, additionalImages) closes the story.
  const rest = [...imgs.slice(sections.length), ...(p.additionalImages ?? [])];
  if (rest.length === 1) {
    out.push({ t: "image", src: rest[0], alt: `${p.title} — detail` });
  } else if (rest.length > 1) {
    out.push({
      t: "grid",
      cols: rest.length % 3 === 0 ? 3 : 2,
      items: rest.map((src, i) => ({
        src,
        alt: `${p.title} — detail ${i + 1}`,
      })),
    });
  }

  return out;
}

/* Legacy publications/links/link all collapse into the pill row. */
function autoPubs(p: Project): Pub[] {
  if (p.pubs?.length) return p.pubs;
  return [
    ...(p.publications ?? []).map((x) => ({
      label: x.title,
      href: x.url,
      note: x.venue,
    })),
    ...(p.links ?? []).map((x) => ({ label: x.label, href: x.url })),
    ...(p.link ? [{ label: p.link.label, href: p.link.url }] : []),
  ];
}

export default function CaseStudy({ p }: { p: Project }) {
  /* Hero precedence mirrors the previous template so no project's hero
     changes: a purpose-made hero image wins, then a hero film, then the first
     gallery image. Without this, the short carousel hover-loops in `video`
     would be promoted over the dedicated heroImage on amiai and 3d-renders. */
  const explicitImage = p.hero ?? p.heroImage;
  const heroVideo = explicitImage ? undefined : p.detailVideo ?? p.video;
  const galleryHero =
    !explicitImage && !heroVideo ? p.images?.[0] : undefined;
  const heroImage = explicitImage ?? galleryHero;

  const blocks: Block[] = p.blocks?.length
    ? p.blocks
    : autoBlocks(p, Boolean(galleryHero));
  const pubs = autoPubs(p);

  return (
    <article
      style={
        {
          "--accent": p.accent,
          "--accent-light": p.accentLight,
        } as React.CSSProperties
      }
    >
      <div className="case">
        <h1>{p.title}</h1>
        {p.sub && <p className="case-sub">{p.sub}</p>}
        <div className="case-meta">
          <div className="mlist">
            {p.meta?.length ? (
              p.meta.map((m, i) => (
                <div key={i}>
                  <div className="k">{m.k}</div>
                  <div className="v">{m.v}</div>
                </div>
              ))
            ) : (
              <>
            {p.role && (
              <div>
                <div className="k">Role</div>
                <div className="v">{p.role}</div>
              </div>
            )}
            {p.team && (
              <div>
                <div className="k">Team</div>
                <div className="v">{p.team}</div>
              </div>
            )}
            {p.duration && (
              <div>
                <div className="k">Duration</div>
                <div className="v">{p.duration}</div>
              </div>
            )}
            {p.category && (
              <div>
                <div className="k">Type</div>
                <div className="v">{p.category}</div>
              </div>
            )}
              </>
            )}
          </div>
          <div>
            <p className="case-intro">{p.description}</p>
            {pubs.length > 0 && (
              <div className="pubs">
                {pubs.map((x, i) => (
                  <a
                    className="pub"
                    key={i}
                    href={x.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {x.label}
                    {x.note && <span className="note">{x.note}</span>}
                    <span className="src" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sec">
        {heroVideo ? (
          <figure className="case-hero">
            <CaseHeroVideo src={heroVideo} label={`${p.title} — hero film`} />
          </figure>
        ) : (
          heroImage && (
            <figure className={`case-hero${plate(heroImage)}`}>
              <CaseImage src={heroImage} alt={p.title} priority />
            </figure>
          )
        )}

        {blocks.map((b, i) => {
          switch (b.t) {
            case "section":
              return (
                <div className="sblock" key={i}>
                  <span className="slab">{b.label}</span>
                  <h2>{b.heading}</h2>
                  {/* div, not p: block bodies carry real <p>/<ul>, which are
                      invalid inside a <p> and get hoisted out by the parser. */}
                  <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: b.body }}
                  />
                </div>
              );
            case "image":
              return (
                <figure className={`cimg${b.wide ? " wide" : ""}${plate(b.src)}`} key={i}>
                  <CaseImage src={b.src} alt={b.alt} />
                  {b.caption && <figcaption className="cap">{b.caption}</figcaption>}
                </figure>
              );
            case "video":
              return (
                <figure
                  className={`cimg cvid${b.wide ? " wide" : ""}`}
                  key={i}
                >
                  <CaseHeroVideo src={b.src} label={b.alt ?? `${p.title} film`} />
                  {b.caption && (
                    <figcaption className="cap">{b.caption}</figcaption>
                  )}
                </figure>
              );
            case "grid":
              return (
                <div className={`cgrid c${b.cols}`} key={i}>
                  {b.items.map((m, j) => (
                    <figure className={`cfig${plate(m.src)}`} key={j}>
                      <CaseImage
                        src={m.src}
                        alt={m.alt}
                        sizes="(max-width:720px) 100vw, 50vw"
                      />
                    </figure>
                  ))}
                </div>
              );
            case "stat":
              return (
                <div className="stat" key={i}>
                  {b.items.map((s, j) => (
                    <div className="s" key={j}>
                      {/* num may carry small markup, e.g. a unit suffix */}
                      <div
                        className="num"
                        dangerouslySetInnerHTML={{ __html: s.num }}
                      />
                      <div className="cap">{s.cap}</div>
                    </div>
                  ))}
                </div>
              );
            case "quote":
              return (
                <blockquote className="cquote" key={i}>
                  {b.text}
                  {b.by && <span>— {b.by}</span>}
                </blockquote>
              );
          }
        })}
      </div>
    </article>
  );
}
