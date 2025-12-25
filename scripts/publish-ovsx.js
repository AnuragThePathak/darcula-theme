const fs = require("fs");
const { execSync } = require("child_process");
const readline = require("readline");

const ORIGINAL = "package.json";
const BACKUP = "package.json.bak";
const VSIX = "darcula-theme-ovsx.vsix";

// ---- hidden input helper ----
function askHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    process.stdin.on("data", (char) => {
      char = char + "";
      switch (char) {
        case "\n":
        case "\r":
        case "\u0004":
          rl.output.write("\n");
          break;
        default:
          rl.output.write(
            "\x1B[2K\x1B[200D" + question + "*".repeat(rl.line.length)
          );
          break;
      }
    });

    rl.question(question, (value) => {
      rl.close();
      resolve(value);
    });
  });
}

(async () => {
  // Backup original package.json
  fs.copyFileSync(ORIGINAL, BACKUP);

  try {
    const token = await askHidden("Open VSX PAT: ");
    if (!token) {
      console.error("❌ No token provided. Aborting.");
      process.exit(1);
    }

    // Patch publisher
    const pkg = JSON.parse(fs.readFileSync(ORIGINAL, "utf8"));
    pkg.publisher = "AnuragThePathak";
    fs.writeFileSync(ORIGINAL, JSON.stringify(pkg, null, 2));

    // Build VSIX with known name
    execSync(`npx vsce package -o ${VSIX}`, { stdio: "inherit" });

    // Publish to Open VSX
    execSync(`npx ovsx publish ${VSIX}`, {
      stdio: "inherit",
      env: {
        ...process.env,
        OVSX_PAT: token,
      },
    });

    console.log("✅ Published to Open VSX successfully.");
  } finally {
    // Restore original package.json
    fs.copyFileSync(BACKUP, ORIGINAL);
    fs.unlinkSync(BACKUP);

    if (fs.existsSync(VSIX)) {
      fs.unlinkSync(VSIX);
    }
  }
})();
