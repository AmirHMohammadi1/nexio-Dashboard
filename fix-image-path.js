import fs from "fs";
import path from "path";

const PROJECT_PATH = "./"; 
// const BASE_PATH = "/nexio-Dashboard";

function fixImagePaths(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    // skip folders we don't want to scan
    if (fs.statSync(filePath).isDirectory()) {
      if (!["node_modules", ".next", "out"].includes(file)) {
        fixImagePaths(filePath);
      }
      continue;
    }

    // only scan code files
    if (!file.match(/\.(js|jsx|ts|tsx|html|css)$/)) continue;

    let content = fs.readFileSync(filePath, "utf8");
    let updated = content;

    // 1) <img src="/img/...">
    // updated = updated.replace(
    //   /src="\/img\//g,
    //   `src="${BASE_PATH}/img/`
    // );

    // updated = updated.replace(
    //   /src='\/img\//g,
    //   `src='${BASE_PATH}/img/`
    // );

    // updated = updated.replace(
    //   /\/img\//g,
    //   `${BASE_PATH}/img/`
    // );

    // 2) background-image: url("/img/...")   OR   url('/img/...')
    // updated = updated.replace(
    //   /url\(["]\/img\//g,
    //   `url("${BASE_PATH}/img/`
    // );

    // updated = updated.replace(
    //   /url\([']\/img\//g,
    //   `url('${BASE_PATH}/img/`
    // );

    // اگر تغییر داشت → ذخیره کنیم
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, "utf8");
      console.log(`✔ fixed: ${filePath}`);
    }
  }
}

console.log("🔍 Fixing image paths...");
fixImagePaths(PROJECT_PATH);
console.log("✅ Done!");
