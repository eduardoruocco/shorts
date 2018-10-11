const fs = require("fs");

function randStr(len) {
    let s = '';
    while (s.length < len) 
      s += Math.random().toString(36).substr(2, len - s.length);
    return s;
  }

fs.writeFileSync("test.txt", randStr(10000000));
