import { readContent } from "../../lib/content";
export const metadata = { title: 'Change Orders & Money — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("feature-change-orders") }} />;
}
