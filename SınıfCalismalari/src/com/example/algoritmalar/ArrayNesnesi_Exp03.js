function writeln (n)
{
    console.log(n)
}

function main ()
{
    let arrays = new Array()

    for(let i = 0; i < 10; ++i)
        arrays.push(i)

    writeln(arrays)
    writeln(arrays.shift())
    writeln(arrays)
}
main ()