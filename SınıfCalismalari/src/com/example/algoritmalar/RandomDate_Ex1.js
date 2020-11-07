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

let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]

let isLeapYear = function (year) {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
        return year
}

function randomDate (minYear, maxYear)
{
    let year = randomInt(minYear, maxYear + 1)
    let month = randomInt(0, 12)
    let days = month === 1 && isLeapYear(year) ? 29 : daysOfMonth[month]
    let day = randomInt(1, days + 1)

    return new Date(year, month, day)
}

function main ()
{
    for (let i = 2000; i < 2105; i++)
        if(isLeapYear(i))
            writeln(i)

    writeln(`**********************`)

    writeln(randomDate(2000, 2100))
}

main ()