// test W

const a = () => new Promise(resolve => {
    setTimeout(() => resolve("results of a()"), 1000); // 1s delay
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("results of b()"), 500); // 0.5s delay
});

const c = () => new Promise(resolve => {
    setTimeout(() => resolve("results of c()"), 1200); // 1.2s delay
});

const myAsyncGenerator = async function*() {
    yield await a();
    yield await b();
    yield await c();
};

// generator object
const gen = myAsyncGenerator();

// gen `gen` values
(async () => {
    console.log(await gen.next());
    console.log(await gen.next());
    console.log(await gen.next());
    console.log(await gen.next());
})();