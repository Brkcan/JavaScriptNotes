function writeln (n) {
    console.log(n)
}


function isPrime(val) {

    let count = 0;
    let sqrtVal = parseInt(Math.sqrt(val))
    console.log(`sqrt = ${sqrtVal}`)
    for(let i = 3; i <= sqrtVal; i+=2){
        count++
        if(val % i === 0 )
            return false;

    }
    console.log(`count  = ${count}`)
    return `val = ${val} is Prime`;
}


function main () {
    writeln(isPrime(9))
}

main ()