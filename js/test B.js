// test B

function a() {
    setTimeout(() => console.log("results of a()")
    , 1000); // 1 second delay
}

function b() {
    setTimeout(() => console.log("results of b()")
    , 500); // 0.5 second delay
}

function c() {
    setTimeout(() => console.log("results of c()")
    , 1200); // 1.2 second delay
}

// call in sequence
a();
console.log("a() is done!");

b();
console.log("b() is done!");

c();
console.log("c() is done!");