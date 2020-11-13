function writeln (n)
{
    console.log(n)
}

class A {
    constructor(val) {
        this._val = val
    }
    get val()
    {
        return this._val
    }
    set val(value)
    {
        this._val = Math.abs(value)
    }
    multiply (a)
    {
        return a * this._val
    }
}
class B extends A {
    constructor(val)
    {
        super(val);
    }
    multiply(a) {
        return super.multiply(a) - a;
    }
}

function main ()
{
    let a = new A(10)
    writeln(a.multiply(20))

    let b = new B(10)
    writeln(b.multiply(10))
}
main()