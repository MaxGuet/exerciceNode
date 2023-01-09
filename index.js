const me = require("./information");
let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, i'm ${me.myName} and my campus is ${me.myCampus}`,
    e: "BoB",
    T: "U",
  })
);

console.log(me);
