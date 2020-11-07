 function writeln(n)
{
    console.log(n)
}
function main()
{
    let device = {}

    device.id = 1
    device.name = "test"
    device.port = 1234
    device.ip = "192.168.2.234"

    displayDevice(device)
}
function displayDevice(dev)
{
    writeln(`${dev.id}, ${dev.name}, ${dev.port}, ${dev.ip}`)
}

main ()