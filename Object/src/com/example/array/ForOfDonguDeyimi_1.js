function writeln (n)
{
    console.log(n)
}

function main ()
{
    let numbers = [1, 2, 3, 4]

    for (let number of numbers) {
        writeln(`${number}`)
    }
}

main ()