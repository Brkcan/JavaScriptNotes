function writeln (n)
{
    console.log(n)
}

let IntVal = function (val) {
    this.val = val

    this.plus = function (val){
        this.val += val
    }
    this.times = function (val){
        this.val *= val
    }

    this.minus = function (val){
        this.plus(-val)
    }
}
function main ()
{
    let intVal = new IntVal(10)
    intVal.plus(20)
    intVal.times(2)
    intVal.minus(7)

    writeln(intVal.val)
}

main ()