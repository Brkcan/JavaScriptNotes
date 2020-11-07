function writeln (n)
{
    console.log(n)
}

function isPrime(val)
{
    let sq = parseInt(Math.sqrt(val))

    for(let i = 2; i <= sq; i++){
        if(val % i === 0){
            return false
        }
    }
    return true
}

function getPrime (n)
{
    let count = 0;
    let i = 2;
    for(; count < n; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return i - 1

}

function main ()
{
    writeln(getPrime(4))
}

main ()