let a = 1; let b = 2; let c = 3;

(function firstFunction () {
    b = 5;  c = 6;

  (function secondFunction () {
     b = 8;

    (function thirdFunction () {
       a = 7;

      (function fourthFunction () {
         a = 1;
      })()
    })()
  })()
})()
console.log(`a: ${a}, b: ${b}, c: ${c}`);