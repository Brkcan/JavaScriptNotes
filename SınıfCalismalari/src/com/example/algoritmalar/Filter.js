function writeln (n)
{
    console.log(n)
}

let Product = function (name, price, stock)
{
    this.name = name
    this.price = price
    this.stock = stock
    this.getTotal = function ()
    {
        return this.stock * this.price
    }
}
function main ()
{
    let product = new Array()

    product.push(new Product("laptop", 4000, 0))
    product.push(new Product("mouse", 40, 356))
    product.push(new Product("klavye", 30, 0))

    let filter = product.filter(s => s.stock <= 0)

    filter.forEach(s => writeln(s.name))
}
main ()