import { readContent } from "../../lib/content";
export const metadata = { title: 'Manage the Field — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("feature-manage-field") }} />;
}
