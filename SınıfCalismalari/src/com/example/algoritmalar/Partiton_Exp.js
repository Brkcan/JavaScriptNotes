function writeln (n)
{
    console.log(n)
}

function partition (arr, pred)
{
    for(let i = 0; i < arr.length; i++){
        if(pred(arr[i]) === false){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            ++i
        }
    }
    return arr
}

function main ()
{
    arr = [10, 2, 5, -6, 9, 10, 12];
    writeln(partition(arr, val => val % 2 === 0))
}

main ()