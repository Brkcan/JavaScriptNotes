function writeln (n) {
    console.log(n)
}

function getDigitCount(val) {
    return val === 0 ? 1 : parseInt(Math.log10(Math.abs(val))) + 1
}

function main(){
    writeln(getDigitCount(3456))
}

main ()