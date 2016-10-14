/**
 * Created by longcz on 2016/10/14.
 */
/*function* gen() {
  yield 1;
  yield 2;
  console.info("inner", yield "inner");
  return 3;
}

const g = gen();

console.info(g.next());
console.info(g.next());
console.info(g.next());
console.info(g.next("hehe"));*/


function *foo() {
  yield 2;
  yield 3;
  return "foo";
}

function *bar() {
  yield 1;
  var v = yield *foo();
  console.log( "v: " + v );
  yield 4;
}

var it = bar();

console.info(it.next());
// {value: 1, done: false}
console.info(it.next());
// {value: 2, done: false}
console.info(it.next());
// {value: 3, done: false}
console.info(it.next());
// "v: foo"
// {value: 4, done: false}
console.info(it.next());
// {value: undefined, done: true}