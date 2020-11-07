function writeln (n)
{
    console.log(n)
}

function main ()
{
    let a = 10
    writeln(typeof a)

    let s = a.toString()
    writeln(typeof s)

    let i = a.toString(2)
    writeln(i)

    let o = a.toString(16)
    writeln(o)
}

main ()