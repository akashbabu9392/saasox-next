export type LegalTocItem = {
  id: string;
  label: string;
};

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "table";
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "callout";
      variant: "secondary" | "warning";
      title?: string;
      lines: string[];
    };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  description: string;
  breadcrumbTitle: string;
  effectiveDateLabel: string;
  lastUpdatedLabel: string;
  toc: LegalTocItem[];
  sections: LegalSection[];
};

