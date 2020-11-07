function writeln (n)
{
    console.log(n)
}


function main()
{
    let person = new Object();
    person.name = "Burak"
    person.number = 1234
    person.age = 28

    writeln(`${person.name}, ${person.number}, ${person.age}`)
}

main ()