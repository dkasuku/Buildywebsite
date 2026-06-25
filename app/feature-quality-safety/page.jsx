import { readContent } from "../../lib/content";
export const metadata = { title: 'Quality & Safety — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("feature-quality-safety") }} />;
}
