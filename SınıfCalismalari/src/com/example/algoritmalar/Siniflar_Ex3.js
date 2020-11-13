function writeln (n)
{
    console.log(n)
}

class A {
    constructor()
    {
        writeln(`A constructor`)
    }
    foo()
    {
        writeln(`A foo`)
    }
}
class B extends A{
    constructor() {
        super();
        writeln(`B constructor`)
    }
    foo() {
        writeln(`B foo`)
    }
}
function main ()
{
    let b = new B()
}

main ()