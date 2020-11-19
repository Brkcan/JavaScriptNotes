function writeln (n)
{
    console.log(n)
}

class Sample {
    constructor(value) {
        this._value = value
    }
    get value () { return this._value}
}

function main ()
{
    let s = new Sample(10000)
    s.count = function () {
        return this._value === 0 ? 1 : parseInt(Math.log10(Math.abs(this._value)) + 1)
    }
    writeln(s)
    writeln(s.count())
    writeln(s.value)

    let s1 = new Sample(102)
    writeln(s1.count()) // s1 count artik is not a function 
}
main ()