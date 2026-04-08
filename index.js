import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { pipeline } from "stream/promises";

const { url } = await inquirer.prompt([
  {
    message: "Enter your URL:",
    name: "url",
    validate: (input) => input.trim().length > 0 || "URL cannot be empty",
  },
]);

await Promise.all([
  pipeline(qr.image(url), fs.createWriteStream("qr_img.png")),
  fs.promises.writeFile("URL.txt", url),
]);
