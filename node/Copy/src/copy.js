/**
 * Created by longcz on 2016/10/19.
 */
var fs = require('fs');

function copy(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));


function copyRight(){
  console.info("OH, my my, Lihai le word g");
}