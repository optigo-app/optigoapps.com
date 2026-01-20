// scripts/cleanTxt.js
import fs from "fs";
import path from "path";

const rootDir = path.resolve("out");

function deleteTxtFiles(dir) {
    if (!fs.existsSync(dir)) return;

    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            deleteTxtFiles(fullPath);
        } else if (file.endsWith(".txt")) {
            fs.unlinkSync(fullPath);
            console.log("🗑️ Deleted:", fullPath);
        }
    }
}

deleteTxtFiles(rootDir);
console.log("✅ All .txt files removed successfully!");
