// test L

const promiseA = new Promise((resolve, reject) => {
    i++;
    setTimeout(() => resolve(i), 1000); // resolve after 1 second
});

promiseA
.then(result => console.log("promiseA success:", result));