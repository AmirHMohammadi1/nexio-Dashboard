import fs from "fs";
import path from "path";

const PROJECT_PATH = "./";  // مسیر ریشه پروژه
const BASE_PATH = "/nexio-Dashboard";

function fixImagePaths(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    // اگر فولدر بود -> بازش کن
    if (fs.statSync(filePath).isDirectory()) {
      if (!["node_modules", ".next", "out"].includes(file)) {
        fixImagePaths(filePath);
      }
      continue;
    }

    // فقط فایل‌های jsx، tsx، js، ts، html
    if (!file.match(/\.(js|jsx|ts|tsx|html)$/)) continue;

    let content = fs.readFileSync(filePath, "utf8");

    // regex: هر src="/img/..." را تبدیل می‌کنیم به src="/nexio-Dashboard/img/..."
    const updated = content.replace(
      /src="\/img\//g,
      `src="${BASE_PATH}/img/`
    );

    if (updated !== content) {
      fs.writeFileSync(filePath, updated, "utf8");
      console.log(`✔ fixed: ${filePath}`);
    }
  }
}

console.log("🔍 Fixing image paths...");
fixImagePaths(PROJECT_PATH);
console.log("✅ Done!");
