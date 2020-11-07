function writeln (n)
{
    console.log(n)
}

function main ()
{
    let devices = {
        id: 1,
        name: "Burak",
        middleName: "Damla",
        surname: "Can",
        getFullName: function (){
            return this.name + " " + this.middleName + " " + this.surname
        }
    }  

    writeln(`${devices.getFullName() }`)
}

main ()