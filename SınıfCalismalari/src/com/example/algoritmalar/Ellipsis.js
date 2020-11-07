function writeln (n)
{
    console.log(n)
}

function foo (...args)
{
    for(let arg of args)
        writeln(arg)
    writeln('------------------')
}

function  bar (a, b, ...args)
{
    writeln(`a = ${a}`)
    writeln(`b = ${b}`)
    for(let arg of args)
        writeln(arg)
    writeln('---------------------')
}

function tar (a, b, ...  arguments)
{
    writeln(`a = ${a}`)
    writeln(`b = ${b}`)
    for(let arg of arguments)
        writeln(arg)
    writeln('---------------------')
}
function har ()
{
    for(let arg of arguments)
        writeln(arg)
    writeln('---------------------')

}

let display = (a, b, ...args) => {
    writeln(`a = ${a}`)
    writeln(`b = ${b}`)
    for (let elem of args) {
        writeln(elem)
    }
    writeln('---------------------')
}

function main ()
{
    foo(10, 20, 30 )
    bar(50, 60, 70)
    tar(80, 90, 100)
    har(80, 90, 100)
    display(19, 30, 50)
}

main ()