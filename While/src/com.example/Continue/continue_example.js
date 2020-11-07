function writeln(n) {
    console.log(n)
}



function main () {
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0){
            continue
        }
        sum = sum + i
    }
    writeln(sum)
}

main ()