function writeln (n)
{
    console.log(n)
}

function main ()
{
    let str = "Bugun hava cok guzel"
    let strFind = "hava"

    writeln(str.includes(strFind) ? 'Iceriyor' : 'Icermiyor')
}

main ()