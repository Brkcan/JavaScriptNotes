function writeln(n)
{
    console.log(n)
}

function isArmstrong(val)
{
    let count = 0;
    let sum = 0;
    let d = val;
    let value = val
    while(d != 0){
        count++
        d = parseInt(d / 10)
    }
    while(val != 0){
        let a = parseInt(val % 10)
        sum += Math.pow(a, count)
        val = parseInt(val / 10)
    }

    if(value == sum){
        return sum
    }else {
        return false
    }
}

function main ()
{
    writeln(isArmstrong(153))
}

main()