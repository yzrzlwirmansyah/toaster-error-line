// One line, at most 120 characters: the funniest error message a kitchen toaster would show its owner.
import fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "ERROR 404: WILL TO LIVE NOT FOUND. UNPLUG ME AND LET ME REST.\n");
