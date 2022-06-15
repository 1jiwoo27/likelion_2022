//First-class citizen 일급객체
const a =1;
const b =2;

function add(a, b) {
    return a + b;
}

const result = add(a,b); // 3


const add = (x, y) => x + y;

//아래는 같은 코드입니다
const add = function(x, y) {return x + y};


function exec(fn){
    fn(1);
}

exec(console.log);
exec(alert);


function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function add(a, b) {
    return a + b;
}

let curriedAdd = curry(add);

console.log(curriedAdd(1)(2)); //3


//addEventListener
const button = document.querySelector('button');

const printClicked =() => {
    console.log('clicked');
}

button.addEventListener('click', printClicked);

button.addEventListener('click', () => {
    console.log('clicked');
});
