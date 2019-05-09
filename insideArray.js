const { performance } = require("perf_hooks");

let count = 10000;
let size = 1000000;

console.log("Initalized with test count of " + count + " with array sizes of " + size);

let timeAvg = [];
for (let i = 0; i < count; i++) {
	let array = Array.from({ length: size }, () => Math.random().toString());
	let checkFor = Math.random().toString();
	let t0 = performance.now();
	array.indexOf(checkFor);
	let t1 = performance.now();
	timeAvg.push(t1 - t0);
}

console.log(
	"indexOf Took  " + timeAvg.reduce((prev, curr) => prev + curr) / timeAvg.length + " milliseconds per array."
);

timeAvg = [];
for (let i = 0; i < count; i++) {
	let array = Array.from({ length: size }, () => Math.random().toString());
	let checkFor = Math.random().toString();
	let t0 = performance.now();
	array.includes(checkFor);
	let t1 = performance.now();
	timeAvg.push(t1 - t0);
}

console.log(
	"includes took  " + timeAvg.reduce((prev, curr) => prev + curr) / timeAvg.length + " milliseconds per array."
);
