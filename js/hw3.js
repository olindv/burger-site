
// Task #1

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

function filter(input, than) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        
        if(array[i] > than) {
            
            newArray.push(array[i]);
            
        }
    };
    return newArray;
};

console.log(result);
    
result = filter(array, 20);
console.log(result);
    
// Task #2

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

function filter(input, than) {
    var newArray = [];
    if (input.length === 0) {
        throw new Error ('массив не должен быть пустым!');
    }
    for (var i = 0; i < input.length; i++) {
        if (!isFinite(input[i])) {
            throw new Error ('массив должен состоять из чисел!');
        } else if (input[i] < 0) {
            throw new Error ('должен быть положительным числом!');
        }
        
        if(input[i] > than) {
            
            newArray.push(input[i]);
            
        }
    };
    return newArray;
};

console.log(result);
    
result = filter(array, 20);
console.log(result);