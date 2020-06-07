import {bubble_sort} from "performance-js-vs-rust";
import {bubbleSort} from "./bubbleSort";

function generateJSTestArrays() {
    let result = [];
    for(let i = 0; i < 10000; i++) {
        let single = [];
        for(let j = 0; j < 1000; j++) {
            const value = Math.floor(Math.random() * (100 - 0 + 1)) + 1;
            single.push(value)
        }
        result.push(Int32Array.from(single));
    }
    return result;
}

function generateRUSTTestArrays() {
    let result = [];
    for(let i = 0; i < 10000; i++) {
        let single = [];
        for(let j = 0; j < 1000; j++) {
            const value = Math.floor(Math.random() * (100 - 0 + 1)) + 1;
            single.push(value)
        }
        result.push(Int32Array.from(single));
    }
    return result;
}

const testJS = generateJSTestArrays();
const testRUST = generateRUSTTestArrays();

const jsStart = performance.now();
testJS.forEach(arr => bubbleSort(arr));
const jsStop = performance.now();

const rustStart = performance.now();
testRUST.forEach(arr => bubble_sort(arr));
const rustStop = performance.now();

console.log('JS TIME:', (jsStop - jsStart));
console.log('RUST TIME:', (rustStop - rustStart));
