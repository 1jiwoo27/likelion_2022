const outer = (x) => () => x*x;

const innerFuc = outer(10);
const result=innerFuc();
console.log(result);