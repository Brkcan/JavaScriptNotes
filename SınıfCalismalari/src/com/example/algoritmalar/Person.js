function writeln (n)
{
    console.log(n)
}

let Person = function (id, name, address){
    this.id = id
    this.name = name
    this.address = address
    this.display = function (){
        writeln(`${id}, ${name}, ${address}`)
    }
}

function main ()
{
    let p = new Person(1, `Burak`, `Ankara`)
    p.display()
}

main ()