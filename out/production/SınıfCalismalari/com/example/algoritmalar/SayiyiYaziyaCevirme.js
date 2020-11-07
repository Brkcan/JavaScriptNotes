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
        writeln(`Deger 3 basamakli ${mod}` ${divide)
    }
}

function main ()
{
    numToStrTr3D(340)
}

main ()