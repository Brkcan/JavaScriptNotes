function writeln (n)
{
    console.log(n)
}

function randomBoolean ()
{
    return randomInt(0, 2) === 1 ? true : false
}

function randomInt (min, max)
{
    return parseInt(Math.random() * (max - min) + min)
}

function main ()
{
    let status = randomBoolean()
    writeln(status)
    let promise = new Promise((resolve, reject) => {
        if(status)
            resolve(`Sozumu tuttum.../`)

        reject("Sozumu tutamadim.../")
    })
    promise.then(message => writeln(message))
    promise.catch(message => writeln(message))
    writeln(``)
}

main ()
