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

function randomBoolean ()
{
    return randomInt(0 ,2) == 1 ? 'Yazi' : 'Tura'
}

function main ()
{
    let sum = 0
    for (let i = 0; i < 10000; i++) {
        writeln(`  ${i} `)
        if (randomBoolean() === 'Yazi') {
            sum = sum + 1
            writeln(` ${i} sum= ${sum}`)
        }
    }
    writeln(`sum = ${sum / 10000}` )
}

main ()