function writeln (n)
{
    console.log(n)
}

class Product {
    constructor(id, name, stock) {
        this.id = id;
        this.name = name;
        if(arguments.length >=3)
            this.stock = stock;
        else
            this.stock = 0;
    }

    toString ()
    {
        return `${this.id} - ${this.name} - ${this.stock}`
    }
}
function main ()
{
    let p = new Product(1, 'Laptop', 10)
    writeln(p.toString())
}

main()