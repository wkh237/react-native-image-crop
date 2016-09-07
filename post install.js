var fs = require("fs"); 
var pkg = JSON.parse(fs.readFileSync("./package.json")); 
pkg.dependencies["react-native-image-resizer"]="0.0.9"; 
fs.writeFileSync("./package.json", JSON.stringify(pkg,null,2));
