const fs = require("fs");
const { execSync } = require("child_process");
const readline = require("readline");

const ORIGINAL = "package.json";
const TEMP = "package.ovsx.json";

// ---- helper to read hidden input ----
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
          rl.output.write("\x1B[2K\x1B[200D" + question + "*".repeat(rl.line.length));
          break;
      }
    });

    rl.question(question, (value) => {
      rl.history = rl.history.slice(1);
      rl.close();
      resolve(value);
    });
  });
}

(async () => {
  // Read original package.json
  const pkg = JSON.parse(fs.readFileSync(ORIGINAL, "utf8"));

  // Patch publisher ONLY for Open VSX
  pkg.publisher = "AnuragThePathak";

  // Write temp package.json
  fs.writeFileSync(TEMP, JSON.stringify(pkg, null, 2));

  try {
    const token = await askHidden("Open VSX PAT: ");

    if (!token) {
      console.error("❌ No token provided. Aborting.");
      process.exit(1);
    }

    // Run ovsx with token scoped to this process only
    execSync(`npx ovsx publish ${TEMP}`, {
      stdio: "inherit",
      env: {
        ...process.env,
        OVSX_PAT: token,
      },
    });

    console.log("✅ Published to Open VSX successfully.");
  } finally {
    fs.unlinkSync(TEMP);
  }
})();
