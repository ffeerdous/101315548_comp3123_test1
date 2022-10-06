function lowerCaseWords(arr){
    var p1 = new Promise((resolve, reject) => {
        if (arr || Array.isArray(arr)){
            setTimeout(() => {
                resolve(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
            })
        }else{
            reject("Invalid Array")
        }
    })
    return p1;
}

lowerCaseWords(['PIZZA', 10, true, 25, false, "Wings"]).then( success => console.log(success))
.catch(err => console.log(err)).finally(() => console.log("Finaly"));