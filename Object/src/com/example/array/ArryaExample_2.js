function writeln (n)
{
    console.log(n)
}


function main ()
{
    let array = new Array(10)
    array[4] = "Burak"
    for(let i = 0; i < array.length; i++){
        writeln(`${array[i]}`)
    }
}

main ()