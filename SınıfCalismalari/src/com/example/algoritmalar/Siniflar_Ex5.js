function writeln (n)
{
    console.log(n)
}

class Employee {
    constructor(name, citizenId, address) {
        this._name = name;
        this._citizenId = citizenId;
        this._address = address;
    }
    get name (){return this._name}
    set name (value) {this._name = value}
    get citizenId () {return this._citizenId}
    set citizenId (value) {this._citizenId = value}
    get address () {return this._address}
    set address (value) {this._address = value}

    calculatePayment () { return 0}
}

class HumanResources {

    payInsurance (employee)
    {
        writeln(`name: ${employee.name}`)
        writeln(`citizenId: ${employee.citizenId}`)
        writeln(`address: ${employee.address}`)
        writeln(`payment: ${employee.calculatePayment()}`)
    }
}
class Worker extends Employee{
        constructor(name, citizenId, address, feePerHour, hourPerDay) {
            super(name, citizenId, address);
            this._feePerHour = feePerHour;
            this._hourPerDay = hourPerDay;
        }
        get feePerHour () {return this._feePerHour}
        set feePerHour (value) {this._feePerHour = value}
        get hourPerDay () {return this._hourPerDay}
        set hourPerDay (value) {this._hourPerDay = value}
        
        calculatePayment() {
            return this._feePerHour * this._hourPerDay;
        }
}

class ProjectWorker extends Worker {
    constructor(name, citizenId, address, feePerHour, hourPerDay, extra) {
        super(name, citizenId, address, feePerHour, hourPerDay);
        this._extra = extra;
    }

    get extra() {return this._extra}
    set extra(value) {this._extra = value}

    calculatePayment() {
        return super.calculatePayment() + this._extra;
    }
}

function main ()
{
    let hr = new HumanResources()
    hr.payInsurance(new Employee(`Burak Can`, 12, `Ankara`))
    hr.payInsurance(new ProjectWorker(`Can`, 2, `Ankara`, 3, 4, 6,))
}

main ()