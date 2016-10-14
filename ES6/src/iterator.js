/**
 * Created by longcz on 2016/10/13.
 */
let arr = [1,2,3,4,5];
let set = new Set(arr);
let map = new Map(arr);

let arrIterator = arr[Symbol.iterator]();
let setIterator = set[Symbol.iterator]();
let mapIterator = map[Symbol.iterator]();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

console.info(setIterator.next());
console.info(setIterator.next());
console.info(setIterator.next());
console.info(setIterator.next());
console.info(setIterator.next());
console.info(setIterator.next());
console.info(setIterator.next());

console.warn(mapIterator.next());
console.warn(mapIterator.next());
console.warn(mapIterator.next());
console.warn(mapIterator.next());
console.warn(mapIterator.next());
console.warn(mapIterator.next());
