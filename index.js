const userInfo = require("./information");
console.log(`${userInfo.mySelf.username} ${userInfo.mySelf.campus}`);

const cowsay = require("cowsay");
console.log(cowsay.think({
    text: `${userInfo.mySelf.username} ${userInfo.mySelf.campus}`,
    e: "oO",
    T: "U"
}));
