function fibonacciValue(nr: number): number {
    if(nr < 2){
        return 1;
    }
    let prev = 0;
    let current = 1;

    let i: number;
    for(i = 2; i<=nr; i++){
        [prev,current] = [current, prev + current];
    }
    return current;
}

console.log(fibonacciValue(5))