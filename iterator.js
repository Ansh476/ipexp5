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

var arr = [3, 6, 20, 14, 9];
var iterator = squareiterator(arr);

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  
