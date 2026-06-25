import fs from "fs";
import path from "path";

// Reads a page-body HTML partial from /content and returns it as a string.
export function readContent(name) {
  const file = path.join(process.cwd(), "content", `${name}.html`);
  return fs.readFileSync(file, "utf8");
}
