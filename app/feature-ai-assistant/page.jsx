import { readContent } from "../../lib/content";
export const metadata = { title: 'AI Assistant — Buildsasa' };
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: readContent("feature-ai-assistant") }} />;
}
