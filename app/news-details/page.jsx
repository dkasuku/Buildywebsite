import { readContent } from "../../lib/content";
export const metadata = { title: 'Article — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("news-details") }} />;
}
