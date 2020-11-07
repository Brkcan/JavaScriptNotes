function writeln (n)
{
    console.log(n)
}

function transform(a, b, cb)
{
    let length = a.length

    for(let i = 0; i < length; i++){
        b[i] = cb(a[i])
        for(let j = i; j < i + 1; j++){
            writeln(b[i])
        }
    }
}
function main ()
{
    let a = [1, 2, 3, 4]
    let b = []
    transform(a,b, function (val) {return val * val})
}

main ()