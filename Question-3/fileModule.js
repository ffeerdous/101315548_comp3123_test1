const fs = require("fs");
const path = require("path")

 function createLogs(){
    const dir = "./logs";
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
 process.chdir(dir);
 for (let i = 0; i <= 10; i++){
    fs.writeFile(`log${i}.txt`, 'This is a Log File', (error) =>
    error?
    console.log(`Error creating file 'log${i}.txt'`) : console.log(`creating file 'log${i}.txt'`)
    );
}
};

function removeLogs(){
    const dir = "./logs";
    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        for (const file of files){
            fs.unlink(path.join(dir, file), (err) => {
                if (err) throw err;
                console.log(`Deleting file '${file}'`)
            })
        }
    });
    if(fs.existsSync(dir)){
        fs.rmdir(dir, (err) => {
            if (err){
                console.log("error occured in deleting folder", err);
            }
            console.log("directory deleted successfully");
        })
    }
};
createLogs();
//Run the RemoveLogs twice completly delete the directory
removeLogs();
