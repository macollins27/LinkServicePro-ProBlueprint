export function injectHeadingIds(html: string, toc: { id: string; text: string; level: number }[]): string {
  if (!html) return html;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    toc.forEach(item => {
      // match headings by text content and level (h2/h3/etc.)
      const tagName = item.level === 2 ? "H2" :
                      item.level === 3 ? "H3" :
                      item.level === 4 ? "H4" : "H2";

      // Find the first heading of that level whose innerText matches item.text (trimmed)
      const candidates = Array.from(doc.getElementsByTagName(tagName));
      const match = candidates.find(el => el.textContent && el.textContent.trim() === item.text.trim());
      if (match) {
        match.setAttribute("id", item.id);
      }
    });

    return doc.body.innerHTML;
  } catch (err) {
    console.warn("injectHeadingIds failed", err);
    return html;
  }
}
