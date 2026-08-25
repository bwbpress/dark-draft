// Lightweight formatter for copy blocks that need paragraph breaks and the
// occasional bold word (book descriptions, bios, etc.) without pulling in a
// full markdown renderer. Supported syntax:
//   - Blank line between paragraphs
//   - **bold** for emphasis
function renderInline(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

// Strips the FormattedText syntax back to plain text, for contexts that
// can't render JSX (e.g. JSON-LD structured data, meta descriptions).
export function toPlainText(text: string): string {
  return text
    .trim()
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ");
}

type FormattedTextProps = {
  text: string;
  className?: string;
};

export function FormattedText({ text, className }: FormattedTextProps) {
  const paragraphs = text.trim().split(/\n{2,}/);

  return (
    <div className={className ? `space-y-3 ${className}` : "space-y-3"}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{renderInline(paragraph)}</p>
      ))}
    </div>
  );
}
