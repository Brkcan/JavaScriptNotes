function writeln (n)
{
    console.log(n)
}

function AverageAges (arr)
{
    for (let arrKey in arr) {
        if(arrKey === "DogumTarih"){
            let date = new Date()
            let year = date.getFullYear() - arr[arrKey]
            writeln(year)
        }
    }
}

function main ()
{
    let person = {
        Ad: "Burak",
        Soyad: "Can",
        DogumTarih: 1992,
        Adres: "Ankara",
    }
    AverageAges(person)
}

main()