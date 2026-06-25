import { readContent } from "../../lib/content";
export const metadata = { title: 'Run Projects — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("service-details") }} />;
}
