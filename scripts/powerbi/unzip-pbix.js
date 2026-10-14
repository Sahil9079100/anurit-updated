#!/usr/bin/env node
/**
 * Convert .pbix to .zip and unzip via Node.js.
 * .pbix files are ZIP archives; this script copies to .zip and extracts contents.
 *
 * Usage:
 *   node scripts/powerbi/unzip-pbix.js <path-to-file.pbix>
 *   node scripts/powerbi/unzip-pbix.js --drive-id <GOOGLE_DRIVE_FILE_ID>
 *
 * For Google Drive folder (e.g. https://drive.google.com/drive/folders/1xP7dgIWb46hQDWJDJIBFyv-ZyZOa01-0):
 *   Open the file "Department Financial Overview.pbix", click Share → Get link, copy the file ID from the file link.
 *   Then: node scripts/powerbi/unzip-pbix.js --drive-id <that-file-id>
 *
 * If --drive-id fails (e.g. large file or permission), download the .pbix manually and run:
 *   node scripts/powerbi/unzip-pbix.js ./path/to/Department\ Financial\ Overview.pbix
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const AdmZip = require("adm-zip");

const OUT_DIR = path.join(__dirname, "pbix-extracted");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function downloadFromDrive(fileId) {
  return new Promise((resolve, reject) => {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    https
      .get(url, (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          // Google may return HTML (virus scan page) for large files
          if (buf.length < 1000 && buf.toString().includes("virus scan")) {
            reject(
              new Error(
                "Drive returned virus-scan page. Download the .pbix manually and run: node scripts/powerbi/unzip-pbix.js <path/to/file.pbix>"
              )
            );
            return;
          }
          resolve(buf);
        });
      })
      .on("error", reject);
  });
}

function pbixToZipAndUnzip(pbixPath) {
  const absolutePath = path.resolve(pbixPath);
  if (!fs.existsSync(absolutePath)) {
    console.error("File not found:", absolutePath);
    process.exit(1);
  }

  const baseName = path.basename(absolutePath, ".pbix");
  const dir = path.dirname(absolutePath);
  const zipPath = path.join(dir, `${baseName}.zip`);

  // 1) Copy .pbix to .zip (convert to .zip)
  fs.copyFileSync(absolutePath, zipPath);
  console.log("Converted to .zip:", zipPath);

  // 2) Unzip
  const zip = new AdmZip(zipPath);
  const extractPath = path.join(dir, `${baseName}-unzipped`);
  ensureDir(extractPath);
  zip.extractAllTo(extractPath, true);
  console.log("Unzipped to:", extractPath);

  return { zipPath, extractPath };
}

async function main() {
  const args = process.argv.slice(2);
  const driveIdIndex = args.indexOf("--drive-id");
  let pbixPath;

  if (driveIdIndex !== -1 && args[driveIdIndex + 1]) {
    const fileId = args[driveIdIndex + 1];
    console.log("Downloading from Google Drive (id=%s)...", fileId);
    try {
      const buf = await downloadFromDrive(fileId);
      const fileName = "Department-Financial-Overview.pbix";
      pbixPath = path.join(__dirname, fileName);
      fs.writeFileSync(pbixPath, buf);
      console.log("Saved to:", pbixPath);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  } else {
    pbixPath = args[0];
    if (!pbixPath) {
      console.log("Usage:");
      console.log("  node scripts/powerbi/unzip-pbix.js <path-to-file.pbix>");
      console.log("  node scripts/powerbi/unzip-pbix.js --drive-id <GOOGLE_DRIVE_FILE_ID>");
      process.exit(1);
    }
  }

  pbixToZipAndUnzip(pbixPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
