import Link from "next/link";

export default function BackToProjects() {
  return (
    <div className="backwrap">
      <Link className="backbtn" href="/" aria-label="Go back to all projects">
        <span className="backbtn__arrow" aria-hidden="true">
          ←
        </span>
        <span>Go back</span>
      </Link>
    </div>
  );
}
