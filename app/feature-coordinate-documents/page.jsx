import { readContent } from "../../lib/content";
export const metadata = { title: 'Coordinate & Document — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("feature-coordinate-documents") }} />;
}
