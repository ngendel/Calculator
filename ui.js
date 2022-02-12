
//ADD
function addNumbers(...nums){
    let result = nums.reduce((num1, num2,) => num1 + num2)
    return result
}

//Subtract
function subtractNumbers(...nums){
    let result = nums.reduce((num1, num2,) => num1 - num2)
    return result
}

//multiply 
function multiplyNumbers(...nums){
    let result = nums.reduce((num1,num2,) => num1 * num2)
    return result 
}

//Divide
function divideNumbers(...nums){
    let result = nums.reduce((num1,num2,) => num1 / num2)
    return result
}

function operate(operator, num1, num2, ){
    switch(operator) {
        case ('+'): return addNumbers(num1, num2);
        break;
        case ('-'): return subtractNumbers(num1,num2,);
        break;
        case ('*'): return multiplyNumbers(num1,num2,);
        break;
        case ('/'): return divideNumbers(num1, num2,);

    }
};
console.log(operate('*', 22, 4,));
