function writeln(n){
    console.log(n)
}

function getDigitCount(val) {
    let count = 0;
    do {
        ++count
        val = parseInt(val / 10)
    }while (val !== 0)

    return count;
}

function main (){
    writeln(getDigitCount(345))
}

main()