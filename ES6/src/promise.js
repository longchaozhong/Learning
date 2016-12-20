/**
 * Created by longcz on 2016/12/20.
 */
const p1 = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.info(">>>p1 begin");
    reject("from p1");
    console.info(">>>p1 end");
  }, 1000);
});

const p2 = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.info(">>>p2 begin");
    resolve(p1);
    console.info(">>>p2 end");
  }, 1000);
});

p2.then((data)=> {
  console.info(">>>resolve", data);
}, (data)=> {
  console.info(">>>reject", data);
});