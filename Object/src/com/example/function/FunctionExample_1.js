function writeln (n)
{
    console.log(n)
}

let add = function (a, b){
    return a + b
}

function main ()
{
    writeln(typeof add)
    writeln(add(10, 20))
}

main ()