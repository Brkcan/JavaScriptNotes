function writeln (n)
{
    console.log(n)
}

function main ()
{
    let numbers = [1, 2]
    let result = numbers.reduce((sum, val) => sum * val)
    writeln(result)
}

main ()