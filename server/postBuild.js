const fs = require("fs");
const glob = require('glob');
const path = require('path');
const url = require('url');

const pathToEntry = "./build/index.html";
const bundlesRegExp = /\/static\/\w+\/\w+.[a-z0-9]+.[a-z0-9]+.\w{2,3}/g;
const splitBy = "</title>";
let links = [];
const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
links = builtHTMLContent.match(bundlesRegExp);

console.log(links);
const parts = builtHTMLContent.split(splitBy);
// const assets = glob.sync('./build/static/media/*.+(ttf|TTF)')
//     .map((assetPath) => {
//         return path.relative('./build', assetPath).replace(/\\/g, "/");
//     });


// console.log(assets);

let fileWithPreload = [parts[0], splitBy];

links.forEach(link => {
    let fileType = "script";

    if (/\.css$/.test(link)) {
        fileType = "style";
    }
    fileWithPreload = [
        ...fileWithPreload,
        `<link rel="preload" href=".${link}" as="${fileType}">`
    ];
});

// for (const link of assets) {
//     fileWithPreload.push(`<link rel="preload" href="./${link}" as="font">`);
// }

fileWithPreload = [...fileWithPreload, parts[1]];

fs.writeFileSync(pathToEntry, fileWithPreload.join(""));