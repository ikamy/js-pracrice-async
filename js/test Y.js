// test Y

const promiseA = new Promise(resolve => {
    console.log("ExecuterA: Begin!");
    resolve("A");
    console.log("ExecuterA: End!");
});

const promiseB = new Promise (resolve => {
    console.log("ExecuterB: Begin!");
    resolve("B");
    console.log("ExecuterB: End!");
});

// Promise : classical approach
const getPromiseClassical = () => {
    console.log("getPromiseClassical()");
    
    return promiseA.then(resultA => {
        console.log("promiseA Classical: A");

        return promiseB.then(resultB => {
            console.log("promiseB Classical: B");
            console.log("Classical: Promise resolved: ", resultA, resultB);
        });
    }); 
};

const promiseClassical = getPromiseClassical();

// Promise: async/await
const getPromiseAsync = async () => {
    console.log("getPromiseAsync()");

    const resultA = await promiseA;
    console.log("promiseAsync: A");

    const resultB = await promiseB;
    console.log("promiseAsync: B");
    console.log("Async: Promises resolved: ", resultA, resultB);
};
const promiseAsync = getPromiseAsync();