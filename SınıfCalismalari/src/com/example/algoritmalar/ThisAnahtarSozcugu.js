function writeln (n)
{
    console.log(n)
}

let Device = function (name, host, port){
    this.name = name
    this.host = host
    this.port = port
    this.toStr = function () {
        return `${name} ${host} ${port}`
    }
}

function main ()
{
    let dev = new Device(`Test`, `192.168.1.23`, 8081)

    writeln(dev.toStr())
}

main ()