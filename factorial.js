function factoria(num,i = 1,factorial = 1){
    if(i > num) return factorial;
    
    return factoria(num,i +1,factorial *= i)
}
console.log(factoria(6))