function writeln (n)
{
    console.log(n)
}

function randomBoolean ()
{
    return randomInt(0, 2) == 1
}

function randomInt (min, max)
{
    return parseInt(randomNumber(min, max))
}

function randomNumber (min, max)
{
    return Math.random() * (max - min) + min
}

function main ()
{
    let min = 10, max = 20
    writeln(randomNumber(min, max))
    writeln(randomInt(min, max))
    writeln(randomBoolean())
}

main()