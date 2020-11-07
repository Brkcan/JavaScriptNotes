function writeln (n)
{
    console.log(n)
}


function main ()
{
    for (let i = 0; i < 10; i ++)
        writeln(parseInt(Math.random() * 100) )
}

main ()