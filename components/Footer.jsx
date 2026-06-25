import { readContent } from "../lib/content";

// Single source of truth for the site footer (identical on every page).
export default function Footer() {
  const html = readContent("_footer");
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
