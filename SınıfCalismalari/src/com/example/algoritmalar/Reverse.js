function writeln(n)
{
    console.log(n)
}

function reverse (arr)
{
    let temp;
    for (let i = arr.length - 1; i >= 0; i--){
        temp = arr[i];
        console.log(`temp = ${temp}`)
    }
    return arr

}

function main ()
{
    let array = [1, 2, 3, 4, 5]
    writeln(reverse(array))
}

main ()