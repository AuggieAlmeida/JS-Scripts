const fibonacci = (index) => {return index < 1 ? 0 : index <= 2 ? 1 : fibonacci(index - 2) + fibonacci(index - 1)}

for(var i = 0 ; i < 30 ; i++){
    console.log(fibonacci(i))
}
