const fs = require("fs");

// Reading a file
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Writing to a file

let content = "Hello, from Node.js \n";

fs.writeFileSync("example.txt", content, "utf-8");

// Appending to a file

let additionalContent = "Appending more data";

fs.appendFileSync("example.txt", additionalContent, "utf-8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been appended");
});

// Check if the file or directory exists before we doing something

if (fs.existsSync("example1.txt")) {
  console.log("file does exist");
} else {
  console.log("file does not exist");
}

// creating and removing directories

// creating a directory
if (fs.existsSync('./myDirectory')){
    fs.writeFileSync("./myDirectory/example.txt", content, "utf-8");
}else{
    fs.mkdirSync("myDirectory");
}
if (fs.existsSync("./myDirectory/.")) {
  return;
} else {
  fs.rmdirSync("myDirectory");
}
