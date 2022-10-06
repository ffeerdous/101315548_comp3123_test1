const fs = require("fs");

 function createLogs(){
    const dir = "./logs";
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
 process.chdir(dir);
 for (let i = 0; i < 10; i++){
    fs.writeFile(`log${i}.txt`, 'This is a Log File', (error) =>
    error?
    console.log(`Error creating file 'log${i}.txt'`) : console.log(`creating file 'log${i}.txt'`)
    );
}
};

function removeLogs(){
    const dir = "./logs";
    if (fs.existsSync(dir)) {
        process.chdir(dir);
        fs.readdir(process.cwd(), (err, files) => {
        files.forEach((file) => {
            fs.unlink(file, (err) =>
            err ? console.error(`Error deleting file '${file}'`) : console.log(`Deleting file '${file}'`)
            );
        });
    });
    }
};
createLogs();
//removeLogs();
