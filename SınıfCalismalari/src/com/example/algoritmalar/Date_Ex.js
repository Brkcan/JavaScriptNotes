function writeln (n)
{
    console.log(n)
}

function main ()
{
    let now = new Date(2020, 10, 2)
    writeln(now.getDay())
    writeln(now.getFullYear())

    let now_2 = new Date()
    writeln(now_2.getTime())
}

main ()