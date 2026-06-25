import { readContent } from "../lib/content";
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("home") }} />;
}
