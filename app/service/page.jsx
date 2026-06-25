import { readContent } from "../../lib/content";
export const metadata = { title: 'Features — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("service") }} />;
}
