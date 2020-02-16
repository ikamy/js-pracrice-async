// test P

const a = () => new Promise(resolve => {
    setTimeout(() => resolve("results of a()"), 1000); // 1s delay
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("results of b()"), 500); // 0.5s delay
});

const c = () => new Promise(resolve => {
    setTimeout(() => resolve("results of c()"), 1200); // 1.2s delay
});

// call a(), b() and c() in series
a()
.then(result => {
    console.log("a() success:", result);
    b()
    .then(result => {
        console.log("b() success:", result);

        c()
        .then(result => console.log("c() success:", result))
        .catch(error => console.log("c() error:", error));
    })
    .catch(error => console.log("b() error:", error));
})
.catch(error => console.log("a() error", error));