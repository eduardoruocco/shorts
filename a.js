const fs = require("fs");

let a = ""; for(let i = 0; i < 10000000; i++) {a = a + "a"}

fs.writeFileSync("test.txt", a);
