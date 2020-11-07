function writeln (n)
{
    console.log(n)
}

function main ()
{
    let numbers = new Array()

    for(let i = 0; i < 10; ++i)
        numbers.unshift(i)

    writeln(numbers)
    writeln(numbers.shift())
    writeln(numbers)
}

main ()