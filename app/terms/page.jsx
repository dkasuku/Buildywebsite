import { readContent } from "../../lib/content";
export const metadata = { title: "Terms & Conditions — Buildsasa" };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("terms") }} />;
}
