const fs = require("fs");
const path = require("path");

const galleryPath = path.join(__dirname, "../public/imgs/gallery");
const files = fs.readdirSync(galleryPath).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

fs.writeFileSync(
  path.join(__dirname, "../src/galleryImages.json"),
  JSON.stringify(files, null, 2)
);

console.log("Gallery JSON generated with", files.length, "images.");