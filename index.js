const fs = require("fs");

const app = require("./app");

console.log(app);

console.log(__filename);

const name = "Tanvir";

fs.writeFileSync("demo.txt", "Hello Programmer");

fs.writeFileSync("demo.txt", "How are You");

fs.appendFile(
  "demo.txt",

  " I am fine and  you",
  (error) => {
    if (error) throw error;
    console.log("saved");
  }
);

fs.readFile("demo.txt", (error, data) => {
  console.log(data.toString());
});

fs.rmdir("demo.txt", (error) => {
  console.log("remove successfully");
});
