var fs = require('fs');
var files = fs.readdirSync('/');
document.write(files);
