function writeln (n)
{
    console.log(n)
}

function main ()
{
    try {
        let a = `ankara`
        let b = a.toUpperCase()
        writeln(b)
        a.foo()
    } catch (e) {
        writeln(e.toString())
    }
}

main ()