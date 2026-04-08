import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your URL:",
      name: "url",
    },
  ])
  .then((answers) => {
    const qrImage = qr.image(answers.url);
    qrImage.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("The URL has been saved!");
    });
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
