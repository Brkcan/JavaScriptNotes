function writeln (n)
{
    console.log(n)
}

function displayStatus (a)
{
    let isEven = function ()
    {
        return a % 2 === 0
    }
    writeln(isEven() ? `Cift`: `Tek`)
}
function main ()
{
    displayStatus(10)
    displayStatus(11)
}

main ()