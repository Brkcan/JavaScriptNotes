function writeln (n)
{
    console.log(n)
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
    let interval = setInterval(() => writeln(`.`), 1000)

    let ms = randomInt(5998, 6000)

    writeln(`ms = ${ms}`)

    setTimeout(() => clearInterval(interval), ms)

    writeln("main bitti.../")
}

main ()
