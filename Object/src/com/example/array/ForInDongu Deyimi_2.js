function writeln (n)
{
    console.log(n)
}

function main()
{
    let person = {
        name: "Burak",
        age: 28
    }

    for(let i in person){
        writeln(`${person[i]}`)
    }
}

main ()