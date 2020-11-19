function writeln (n)
{
    console.log(n)
}

function main ()
{
    try {
        let expression = `writeln("Merhaba");console.log("Nasilsin")`

        eval(expression)
    } catch (e) {
        writeln(e.toString())
    } 
}

main ()