function writeln (n)
{
    console.log(n)
}
class MathError {
    constructor(message, errorCode)
    {
        this._message = message
        this._errorCode = errorCode;
    }
    get getMessage ()
    {
        return `Message: ${this._message}, Error Code: ${this._errorCode}`
    }
    get errorCode ()
    {
        return this._errorCode
    }

}
class MathUtil {
    static log(value)
    {
        if (value < 0)
            throw new MathError(`Belirliz`, 401)
        if(value === 0)
            throw new MathError(`Tanimsiz`, 101)

        return Math.log(value)
    }
}

function main ()
{
    try {
        writeln(MathUtil.log(-5))
    } catch (e) {
        writeln(e.getMessage)
    }
}

main ()
