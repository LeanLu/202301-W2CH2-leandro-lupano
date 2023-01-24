import { strictEquals } from "./strictEqualsFunction.js";

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "oil"));
console.log(strictEquals(2, 2));
console.log(strictEquals(0, 2));
console.log(strictEquals(0, NaN));