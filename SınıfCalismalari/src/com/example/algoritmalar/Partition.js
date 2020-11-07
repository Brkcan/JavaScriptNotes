
function writeln (n) {
    console.log(n)
}

function gswap (a, i ,k){
    let temp = a[i]

    a[i] = a[k]
    a[k] = temp
}
// productsNotInStock.forEach(p => writeln(p.name))
function partition (val, pred) {
    let b;

        // let index = 0
         //b = val.findIndex((val, index) =>  val % 2 !== 0)
        for(let i = 1; i < val.length; i++){
        if(pred(val[i])) {
            gswap(val, i, i + 1)
            !pred
        }
    }
    return val
}

function main () {
     a = [10, 2, 5, -6, 9, 10, 12];
     writeln(partition(a, value => value % 2 === 0))
}

main ()