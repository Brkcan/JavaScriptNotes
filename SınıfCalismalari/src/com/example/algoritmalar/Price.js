function writeln (n)
{
    console.log(n)
}

let Product = function (name, price, stock)
{
    this.name = name
    this.price = price
    this.stock = stock
    this.getTotal = function (){
        return stock * price
    }
    this.display = function () {
        writeln(`${this.name}, ${this.price}, ${this.stock}`)
    }
}

function main ()
{
    let p1 = new Product(`Laptop`, 400, 34)
    let p2 = p1
    p1.display()
    p2.display()

    p2.stock *= 2

    p1.display()
    p2.display()

}

main ()