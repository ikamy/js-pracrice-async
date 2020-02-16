// test O

// main promise
Promise.resolve("fulfill DATA!")
.then(result => {
    console.log("[1] then", result);

    // inner promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Nested promise error data!");
        }, 1000);
    }).then(data => `Inner promise data": ${data}`);
})
.then(result => console.log("[2] then", result))
.catch(error => console.log("[1] catch", error));