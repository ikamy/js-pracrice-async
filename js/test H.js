// test H

const promiseA = new Promise((resolve, reject) => {
    console.log("creating promise.");

    setTimeout(() => reject("something bad happened a()")
    , 1000); // reject after 1 second

    console.log("exiting promise executer");
})

// normal flow
console.log("I am sync job.");

// promise listeners
promiseA
.then(result => console.log("promiseA success:", result))
.catch(error => console.log("promiseA error:", error))
.finally(() => console.log("promiseA is done!"));

// normal flow
console.log("I am good sync job.");
console.log("I am awesome sync job too.");