import { readContent } from "../../lib/content";
export const metadata = { title: "Privacy Policy — Buildsasa" };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("privacy") }} />;
}
