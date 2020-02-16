// test V

const a = () => new Promise(resolve => {
    setTimeout(() => resolve("results of a()"), 1000); // 1s delay
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("results of b()"), 500); // 0.5s delay
});

const c = () => new Promise(resolve => {
    setTimeout(() => resolve("results of c()"), 1200); // 1.2s delay
});

const doJobs = async () => {
    try {
        var resultA = await a();
        var resultB = await b();
        var resultC = await c();

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    values: [resultA, resultB, resultC]
                })
            }, 1000);
        });

    } catch(error) {
        return [null, null, null];
    }
}

// doJobs() returns a promise
doJobs()
.then(result => console.log("success:", result))
.catch(error => console.log("error:", error));

// normal flow
console.log("I am a sync operation!");