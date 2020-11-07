function writeln (n)
{
    console.log(n)
}

function countString (word, findWord)
{
    let count = 0
    for (let i = 0; i < word.length; i++)
        if(word.charAt(i) === 'h' && word.charAt(i + 1) === 'a'
            && word.charAt(i + 2) === 'v' && word.charAt(i + 3) === 'a')
            ++count
    return count
}

function main ()
{
    let word = "Bugun hava cok hava"
    let findWord = "hava"
    let sumWord = countString(word, findWord)
    writeln(sumWord)
}

main ()