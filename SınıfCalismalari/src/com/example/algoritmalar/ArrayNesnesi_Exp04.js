function writeln (n)
{
    console.log(n)
}

function toString ()
{
    return `${this.name}: ${this.stock * this.price}`
}

function main ()
{
    let product = [
        {name: "Laptop", stock: 6, price:4356, toString: toString},
        {name: "mouse", stock: 60, price:356, toString: toString},
        {name: "board", stock: 5, price:46, toString: toString},
    ]

    product.sort((a, b) => b.stock - a.stock)
    writeln(product)
    writeln(`/////////////////////////////`)
    for (let productElement of product)
        writeln(productElement.toString())

    for (let productKey in product)
        writeln(product[productKey].toString())


}

main ()