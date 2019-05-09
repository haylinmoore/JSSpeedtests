const { performance } = require("perf_hooks");

let count = 10000;
let size = 100000;

console.log("Initalized with test count of " + count + " with array sizes of " + size);

let timeAvg = [];
for (let i = 0; i < count; i++) {
	let array = Array.from({ length: size }, () => Math.random());
	let t0 = performance.now();
	[...array];
	let t1 = performance.now();
	timeAvg.push(t1 - t0);
}

console.log(
	"Spread Operator Took  " + timeAvg.reduce((prev, curr) => prev + curr) / timeAvg.length + " milliseconds per array."
);

timeAvg = [];
for (let i = 0; i < count; i++) {
	let array = Array.from({ length: size }, () => Math.random());
	let t0 = performance.now();
	array.splice();
	let t1 = performance.now();
	timeAvg.push(t1 - t0);
}

console.log(
	"Splice Took  " + timeAvg.reduce((prev, curr) => prev + curr) / timeAvg.length + " milliseconds per array."
);

timeAvg = [];
for (let i = 0; i < count; i++) {
	let array = Array.from({ length: size }, () => Math.random());
	let t0 = performance.now();
	JSON.parse(JSON.stringify(array));
	let t1 = performance.now();
	timeAvg.push(t1 - t0);
}

console.log(
	"Stringify/Parse Took  " + timeAvg.reduce((prev, curr) => prev + curr) / timeAvg.length + " milliseconds per array."
);
