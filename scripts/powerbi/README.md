# Power BI .pbix → .zip and unzip

Convert a `.pbix` file to `.zip` and extract its contents using Node.js. (`.pbix` files are ZIP archives.)

## Prerequisites

- Node.js 18+
- Install deps: `npm install` (adds `adm-zip`)

## Usage

### 1. Local .pbix file

Download the file from [Google Drive (Power BI folder)](https://drive.google.com/drive/folders/1xP7dgIWb46hQDWJDJIBFyv-ZyZOa01-0) (e.g. **Department Financial Overview.pbix**), then:

```bash
# From repo root
npm run unzip-pbix -- path/to/Department\ Financial\ Overview.pbix
# or
node scripts/powerbi/unzip-pbix.js path/to/Department\ Financial\ Overview.pbix
```

This will:

1. **Convert** `file.pbix` → `file.zip` (copy with `.zip` extension) in the same directory.
2. **Unzip** into `file-unzipped/` in the same directory.

### 2. Download from Google Drive by file ID (optional)

To get the file ID: open the file in Drive → Share → “Copy link” → the ID is the long string in `https://drive.google.com/file/d/<FILE_ID>/view`.

```bash
npm run unzip-pbix -- --drive-id <FILE_ID>
```

Note: For large files, Drive may show a virus-scan page; then download the .pbix manually and use the local path as above.
