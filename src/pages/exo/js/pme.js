class Employee {
    constructor (name, surname, age, salary){
        this.name = name
        this.surname = surname
        this.age = age
        this.salary = salary


    }

    displayInformations () {
        return {name, surname, age, salary}
    }

}

class Pme {
    constructor(name, team, income, fixedFee, purchaseCosts, charge, month) {
        this.name = name
        this.team = team
        this.income = income
        this.fixedFee = fixedFee
        this.purchaseCosts = purchaseCosts
        this.charge = charge
        this.month = month
    }

    cost () {
        return this.fixedFee + this.purchaseCosts
    }

    salaryCost () {
        let total = 0
        this.team.forEach(Employee => {
            let salaryWithCharge = (Employee.salary * this.charge)/100 
            total += (Employee.salary + salaryWithCharge ) * this.month
        });
        return total
    }

    balance () {
        return this.income -(this.cost() + this.salaryCost() )
    }

    displayInformations () {
        console.group(`--- ${this.name}---`);
            console.log(`${this.name} - Cout Initial   : ${this.cost()}`);
            console.log(`${this.name} - Cout Total Equipe : ${this.salaryCost ()}`);
            console.log(`${this.name} - VENTES         : ${this.income}`);
            console.log(`${this.name} - BILAN          : ${this.balance ()}`);
        console.groupEnd();
    }
}


let team = [
    new Employee( "Aurore","Polaire", 23, 2000),
    new Employee( "Geoffroy", "Denledo", 33, 3000),
    new Employee( "Paul","Ution", 36, 4000)
]

let entreprise = new Pme ("ma petite entreprise",team, 300000, 20000, 50000, 90, 12)
    entreprise.displayInformations();