function writeln (n)
{
    console.log(n)
}

function main ()
{
    let now = new Date()
    writeln(`${now.getUTCHours()}.${now.getUTCMinutes()}`)
}

main ()