function writeln (n)
{
    console.log(n)
}
class Point {
    constructor(x, y)
    {
        this._x = x;
        this._y = y;
    }

    get x ()
    {
        return this._x;
    }
    set x (value)
    {
        this._x = value
    }
    get y ()
    {
        return this._y
    }
    set y(value)
    {
        this._y = value
    }
    toStr ()
    {
        return `(${this._x}, ${this._y})`
    }
}

function main ()
{
    let p = new Point(100,100)
    writeln(`x = ${p._x}, y = ${p._y}`)

    writeln(`x = ${p.x}, y = ${p.y}`)

    p.x = 200

    writeln(`x = ${p.x}, y = ${p.y}`)
}

main ()