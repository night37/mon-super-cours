

class CompteBancaire {
    constructor(name) {
        this.name = name
        this.balance = 0
        
    }
    
    crediter (value) {
        this.balance += value
        this.display("credit",value)
        
    }
    retirer(value) {
        this.balance -= value
        

        if(this.balance < 0) {
            console.error(`${this.name}, retrait de: ${value} refusé avec solde ${this.balance}`)
        }

        this.display("retrait",value, this.name)
    }

    virer(toName, value) {
        this.display("virer",value, toName)


    }

    info() {
        return {name : this.name, balance: this.balance}
        
    }

    display (operation, value, toName){
        if(operation === "credit") {
            console.log(`Ajout de: ${value} pour: ${this.name}`)
        }else if (operation === "retrait") {
            console.log(`Retrait de: ${value} pour: ${this.name}`)
 
        } else if (operation === "virer") {
            console.log(`Virement de: ${value} de: ${this.name} pour: ${toName}`)
 
        } 
    }

}
// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
Alex: new CompteBancaire("Alex"),
Clovis: new CompteBancaire("Clovis"),
Marco: new CompteBancaire("Marco"),
};
const infoContainer = document.querySelector('#info-container')

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) lesComptes[key].crediter(1000);
// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100)

// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer("Clovis", 300)

// un petit retrait incorrect (doit déclencher erreur custom) : 

// bilan : faire une description de tous les comptes en console (ou DOM ?)
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200)

for (let key in lesComptes){

    let {name, balance} = lesComptes[key].info()
    infoContainer.innerHTML += `${name} a un solde de ${balance} </br>`
}
