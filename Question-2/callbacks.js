const resolvedPromise = () =>{
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message: "delayed success!"}), 500 
        })
    })
    return p1;
}

const rejectedPromise = () => {
    var p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception!"}), 500
        })
    })
    return p2;
}

resolvedPromise().then((success) => console.log(success)).catch(error => console.log(error));
rejectedPromise().then((success) => console.log(success)).catch(error => console.log(error));