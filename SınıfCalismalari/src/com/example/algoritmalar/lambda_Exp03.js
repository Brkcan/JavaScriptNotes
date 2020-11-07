function writeln (n)
{
    console.log(n)
}

function generate (n, supplier, consumer)
{
    while (n--)
        consumer(supplier())
}

function main ()
{
    let min = 20
    let max = 40
    generate(10, () => parseInt(Math.random() * (max - min) + min), val => writeln(val))

}

main ()