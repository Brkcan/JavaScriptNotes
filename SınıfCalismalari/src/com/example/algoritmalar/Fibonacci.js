function writeln(n)
{
    console.log(n)
}

function getFibonacciNumber(n)
{
    let num1 = 0
    let num2 = 1
    let sum = 0
    for(let i = 2; i < n; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum
}


function main()
{
    writeln(getFibonacciNumber(7))
}

main ()