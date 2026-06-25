import { readContent } from "../lib/content";

// Single source of truth for the site header (identical on every page).
export default function Header() {
  const html = readContent("_header");
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
