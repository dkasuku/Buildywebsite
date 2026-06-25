import { readContent } from "../../lib/content";
export const metadata = { title: 'Blog — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("news") }} />;
}
