function writeln (n)
{
    console.log(n)
}

function main ()
{
    let timeout = setTimeout(() => writeln("Sure doldu../"), 4000)

    let ms = parseInt(Math.random() * 10000)

    writeln(`ms = ${ms}`)

    setTimeout(() => clearTimeout(timeout), ms)

    writeln("Main bitti.../")
}

main ()
