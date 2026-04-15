import Link from "next/link";
import type { ReactNode } from "react";
import type { LegalBlock, LegalDocument as LegalDoc } from "@/data/legal/legal-types";

function renderInlineText(text: string) {
  const regex = /(https?:\/\/[^\s)]+)|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
  const out: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      out.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, matchIndex)}</span>);
    }

    const [full, url, email] = match;
    if (url) {
      out.push(
        <a key={`url-${matchIndex}`} href={url} className="text-decoration-underline">
          {url}
        </a>,
      );
    } else if (email) {
      out.push(
        <a key={`email-${matchIndex}`} href={`mailto:${email}`} className="text-decoration-underline">
          {email}
        </a>,
      );
    } else {
      out.push(<span key={`other-${matchIndex}`}>{full}</span>);
    }

    lastIndex = matchIndex + full.length;
  }

  if (lastIndex < text.length) {
    out.push(<span key={`tail-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }

  return out;
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      return <Tag className={block.level === 2 ? "cs_fs_32 cs_bold mb-3" : "cs_fs_24 cs_semibold mb-3"}>{block.text}</Tag>;
    }
    case "paragraph":
      return <p className="mb-3">{renderInlineText(block.text)}</p>;
    case "list":
      return (
        <ul className="mb-3 ps-3">
          {block.items.map((it) => (
            <li key={it} className="mb-2">
              {renderInlineText(it)}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="table-responsive mb-3">
          <table className="table table-bordered align-middle mb-0">
            <thead>
              <tr>
                {block.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, idx) => (
                <tr key={idx}>
                  {r.map((cell) => (
                    <td key={cell}>{renderInlineText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption ? <div className="small opacity-75 mt-2">{renderInlineText(block.caption)}</div> : null}
        </div>
      );
    case "callout": {
      const cls = block.variant === "warning" ? "alert alert-warning" : "alert alert-secondary";
      return (
        <div className={`${cls} mb-3`} role="note">
          {block.title ? <div className="fw-semibold mb-2">{block.title}</div> : null}
          {block.lines.map((line) => (
            <p key={line} className="mb-2">
              {renderInlineText(line)}
            </p>
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

export function LegalDocument({
  doc,
  heading,
  crossLinks,
}: {
  doc: LegalDoc;
  heading: { label: string; productLine: string };
  crossLinks: { label: string; href: string }[];
}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="mt-5">
            <p className="mb-1 fw-semibold">{heading.label}</p>
            <p className="mb-3">{heading.productLine}</p>
            <p className="mb-4 opacity-75">
              Effective Date: {doc.effectiveDateLabel} | Last Updated: {doc.lastUpdatedLabel}
            </p>

            <div className="mb-4">
              <div className="d-flex flex-wrap gap-2">
                {crossLinks.map((l) => (
                  <Link key={l.href + l.label} href={l.href} className="text-decoration-underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h2 className="cs_fs_24 cs_semibold mb-3">Table of contents</h2>
              <ul className="mb-0 ps-3">
                {doc.toc.map((t) => (
                  <li key={t.id} className="mb-2">
                    <a className="text-decoration-underline" href={`#${t.id}`}>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-5">
                <h2 className="cs_fs_32 cs_bold mb-3">{s.title}</h2>
                {s.blocks.map((b, idx) => (
                  <LegalBlockView key={idx} block={b} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

