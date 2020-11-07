function writeln (n)
{
    console.log(n)
}

function main ()
{
    let s = "Ankara"

    for (let i = 0; i < s.length; i++)
        writeln(`s => ${s.charAt(i)}`)
}

main () 