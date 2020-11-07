function writeln (n)
{
    console.log(n)
}

function main ()
{
    let name = 'Burak' // B**** C**
    let surname = 'Can'
    let charA
    let charB
    let charC
    let charD
    let ren = "*"

        charA = name.charAt(0)
        charC = ren.repeat(name.length)
        charB = surname.charAt(0)
        charD = ren.repeat(surname.length)

    //writeln(name.repeat(10))
    writeln(charA + charC + charB + charD)
}

main ()