function writeln (n)
{
    console.log(n)
}

function main ()
{
    let add = (a, b) => {
        return a + b
    }
    writeln(add(10, 20))

    let convertToLength = a => a.length

    let a = [1, 2, 3, 4]

    writeln(convertToLength(a))
}

main ()