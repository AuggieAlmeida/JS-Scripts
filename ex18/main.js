var numbers = Array.apply( null, { length: 100 } );
numbers.forEach((_, index, numbers) => { (index + 1) % 4 == 0 ? numbers[index] = "PI" : numbers[index] = index + 1 ; console.log(numbers[index]) })
