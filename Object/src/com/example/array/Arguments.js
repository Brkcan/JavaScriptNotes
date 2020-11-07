function writeln (n)
{
    console.log(n)
}

function sum ()
{
    let total = 0
    for (let val of arguments) {
        total += val
    }

    return total
}

function main ()
{
    writeln(sum(10, 20))
    writeln(sum())
}
main ()