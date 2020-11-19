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
    Sample.prototype.count = function () {
        return this._value === 0 ? 1 : parseInt(Math.log10(Math.abs(this._value)) + 1)
    }
    writeln(s.count())

    let k = new Sample(120)
    writeln(k.count())
}

main ()