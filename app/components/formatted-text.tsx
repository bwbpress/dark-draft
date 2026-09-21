// Lightweight formatter for copy blocks that need paragraph breaks and the
// occasional bold word (book descriptions, bios, etc.) without pulling in a
// full markdown renderer. Supported syntax:
//   - Blank line between paragraphs
//   - **bold** for emphasis
function renderInline(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : 
    part.startsWith("%%") && part.endsWith("%%") ? (
      <i key={i}>{part.slice(2, -2)}</i>
    ) : 
    part.startsWith("@@") && part.endsWith("@@") ? (
      <ul className="list-disc pl-4 pt-2" key={i}>        
        {part.slice(2, -2).split("$").map((p, j) => (
          p != "" && p !== " " ? <li key={j}>{p}</li> : null
        ))}
      </ul>
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
    <div className={className ? `space-y-4 ${className}` : "space-y-4"}>
      {paragraphs.map((paragraph, i) => (
        paragraph.startsWith("^^") ?
          <div key={i} className="pt-2">{renderInline(paragraph.slice(2))}</div>
        :
          <p key={i}>{renderInline(paragraph)}</p>
      ))}
    </div>
  );
}
