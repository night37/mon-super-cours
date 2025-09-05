class Imc   {

    constructor(name, weight, height) {
          this.name = name
          this.height = height
          this.weight = weight
          
    }

    calcul ()  {

        return  this.weight/ this.height
    }

    display () {

        if(typeof(this.weight) != "number"){
            return console.error (`${this.weight} doit etre un nombre`)   
        }else if (typeof(this.height) != "number"){
            return console.error (`${this.height} doit etre un nombre`)   
        }
        return console.log(`${this.name} (${this.weight} kg, ${this.size} M) a un IMC de: ${this.calcul().toFixed(2)}`)
    }

}


let list = [
 new Imc("Sébastien Chabal", 135, 1.7),
 new Imc("Escaladeuse", 45, 1.68),
 new Imc("JOJO ", 300, 2),
 new Imc("Gontrand ", 90, 1.75),
 new Imc("Colonel Clock ", 200, 1.75),
 new Imc("JOsiane de la Vega", 99, 1.55),
];


list.forEach(el => {
    el.display()
});