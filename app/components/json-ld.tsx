// Renders a schema.org object as a JSON-LD <script> tag.
// `<` is escaped so the payload can't accidentally close the script tag
// early if a description ever contains raw HTML.
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
