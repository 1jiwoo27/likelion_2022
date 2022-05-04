function outer(x) {
    return function inner(){
        return x*x;
    }
}

const innerFuc = outer(10);
const result=innerFuc();
console.log(result);