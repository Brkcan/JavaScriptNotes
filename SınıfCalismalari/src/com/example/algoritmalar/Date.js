function writeln (n)
{
    console.log(n)
}

function month()
{
    let monthElement
    let month =  [
        "Ocak", "Subat", "Mart",
        "Nisan", "Mayis", "Haziran",
        "Temmuz", "Agustos", "Eylul",
        "Ekim", "Kasim", "Aralik"
    ]

    for (let monthElement of month)
        writeln(`${monthElement}`)

    return monthElement
}

function main ()
{
    let now = new Date(2020 ,3, 15, 22, 22, 22,22)
   month()
    writeln(now.toString())
}

main()