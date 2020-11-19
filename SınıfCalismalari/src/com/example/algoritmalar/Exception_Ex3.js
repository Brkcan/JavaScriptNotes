function writeln (n)
{
    console.log(n)
}

class MathUtil {
    static log(value)
    {
        if (value < 0)
            throw new Error(`Belirliz`)
        if(value === 0)
            throw new Error(`Tanimsiz`)

        return Math.log(value)
    }
}

function main ()
{
    try {
        writeln(MathUtil.log(-5))
    } catch (e) {
        writeln(e.toString())
    }
}

main ()
