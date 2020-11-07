function writeln (n)
{
    console.log(n)
}

function main ()
{
    let a
    let f = (a, b) => {
        writeln(`${a}`)
        return a + b
    }

    writeln(f(10, 20))

    writeln(`${a}`) // Error ~ exception 
 }

main ()