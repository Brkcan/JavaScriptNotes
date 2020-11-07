function writeln (n)
{
    console.log(n)
}

function numToStrTr3D (val)
{
    let value = val.length
    if(value === 1){
        writeln(`Deger 1 basamakli`)
    }else if(value === 2){
        writeln(`Deger 2 basamakli`)
    }else {
        let mod = val % 100
        let divide = parseInt(val / 100)
        let tenMod = mod % 10
        let oneMod = mod % 1

        writeln(`Deger 3 basamakli ${mod},--- ${divide}, -- ${tenMod}`)
    }
}

function main ()
{
    numToStrTr3D(344)
}

main ()