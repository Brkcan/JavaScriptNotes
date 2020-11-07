function writeln (n)
{
    console.log(n)
}

function main ()
{ 
    let a = new Date(1999, 7, 17, 3, 2, 0)
    let b = new Date()

    let year = (b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24 * 365)
    writeln(year)
    writeln(a)
    writeln(b.getFullYear())
}

main ()