import { readContent } from "../lib/content";
export default function NotFound() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("404") }} />;
}
