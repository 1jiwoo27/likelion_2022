const me = {
    name: "엄지우",
    age: 21,
    militaryState: false
};

const { militaryState, ...another } =me;

console.log(another);
//{name: '엄지우', age: 21}


const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] =numbers;

console.log(rest);
//(6) [1, 2, 3, 4, 5, 6]