from __future__ import annotations

from pathlib import Path


def main() -> None:
    root = Path(__file__).resolve().parents[1] / "src"

    exclude = {
        root.parent / "src" / "config" / "coreqc" / "brand.ts",
        root.parent / "src" / "config" / "site-metadata.ts",
    }

    changed: list[Path] = []

    for p in root.rglob("*"):
        if p.suffix not in {".tsx", ".ts", ".jsx", ".js"}:
            continue
        if p in exclude:
            continue

        try:
            text = p.read_text(encoding="utf-8")
        except Exception:
            continue

        if "Biosure" not in text and "Biosure's" not in text:
            continue

        new_text = text.replace("Biosure's", "our").replace("Biosure", "our platform")
        if new_text != text:
            p.write_text(new_text, encoding="utf-8")
            changed.append(p)

    for p in changed:
        print(p.relative_to(root.parent))


if __name__ == "__main__":
    main()

