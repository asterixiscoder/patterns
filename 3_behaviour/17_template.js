class Employeee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities(){}
    work() {
        return `${this.name} working in home ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} have ${this.salary} per month`
    }
}

class Developer extends Employeee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'makking apps'
    }
}


class Tester extends Employeee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'testing apps'
    }
}

const dev = new Developer('Andrey', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tst = new Tester('Max', 50000)
console.log(tst.getPaid())
console.log(tst.work())