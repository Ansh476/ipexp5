function squareiterator(values) {
    let index = 0;
    return {
        next: function() {
            if (index < values.length) {
                return {
                    value: values[index] * values[index++], 
                    done: false
                };
            } else {
                return { done: true };
            }
        }
    };
}

var arr = [1, 2, 3, 4, 5];
var iterator = squareiterator(arr);

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  