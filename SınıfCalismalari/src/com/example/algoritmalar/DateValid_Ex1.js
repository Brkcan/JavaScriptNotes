function writeln (n)
{
    console.log(n)
}

function isValidTime (hour)
{
    if(0 < hour  && hour <24)
        return hour
}

function isValidDate (day, month, year)
{
    if ((day > 0) && (day < 31) && (0 < month) && (month < 11) && (1111 < year) &&(year < 9999))
        return year, month, day

}

function main ()
{
    let day = 22
    let month = 4
    let year = 2010
    let hour = 21
    if(isValidDate(day, month, year) && isValidTime(hour)){
        let date = new Date()
        date.setDate(day)
        date.setMonth(month)
        date.setFullYear(year)
        date.setHours(hour)
        writeln(date.toString())

    }else
        writeln(`Gecersiz zaman dilimi`)
}

main ()