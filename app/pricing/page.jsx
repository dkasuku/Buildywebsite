import { readContent } from "../../lib/content";
export const metadata = { title: 'Pricing — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("pricing") }} />;
}
