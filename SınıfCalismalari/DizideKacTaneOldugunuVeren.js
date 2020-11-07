function writeln (n)
{
    console.log(n)
}

function getCount (arr, val)
{
    let count = 0
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === val)
            count++

    return count
}

function main ()
{
    let arr = [1, 3, 4, 5, 3, 5, 5, 5]
    writeln(getCount(arr, 5))
}
main ()