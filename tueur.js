let tueur = 100;

class caracteristiques{
    constructor(nom, PbM, PbD, PbMD){
        this.nom = nom;
        this.PbM = PbM;
        this.PbD = PbD;
        this.PbMD = PbMD;
    }
}

class survivants{
    constructor(nom,stat){
        this.nom= nom;
        this.stat = stat
    }
}

let Gabriel = new survivants("Gabriel", new caracteristiques("le Sportif",0.4,0.3,0.3))
let Alban = new survivants("Alban", new caracteristiques("le Séducteur",0.1,0.7,0.2))
let Ambre = new survivants("Ambre", new caracteristiques("la Blonde",0.4,0.3,0.3))
let Céline = new survivants("Céline", new caracteristiques("l'Asiatique",0.2,0.3,0.5))
let Pierrick = new survivants("Pierrick", new caracteristiques("le Pirate",0.3,0.4,0.3))

let noms = [Gabriel,Alban,Ambre,Céline,Pierrick]

while(tueur>0 && noms.length !=0){

    let rand = Math.floor(Math.random()*noms.length);
    let rValue = noms[rand];
    let randNumber = (Math.random());

    if (randNumber < rValue.stat.PbM){
        console.log(rValue.nom + ' ' + rValue.stat.nom + ' a été tué par Jason !')
        noms.splice(noms.indexOf(rValue));

    } else{
    if (randNumber > rValue.stat.PbM && randNumber<rValue.stat.PbM + rValue.stat.PbD){

        tueur = tueur -10

        console.log("Bravo ! " + rValue.nom + ' ' + rValue.stat.nom + " a infligé 10 points de dégats à Jason et s'en sort indemne")
        console.log("Jason a " + tueur + " points de vie")

    }else{
        console.log(rValue.nom + ' ' + rValue.stat.nom + ' a été tué par Jason, mais avant de mourir ' + rValue.nom + ' lui a infligé 15 points de dégats.')
        tueur = tueur - 15;
        console.log("Jason a " + tueur + " points de vie")
    }
    }

    if (tueur<=0){
    console.log("Victoire ! Jason est mort. Les survivants sont : ")
    noms.forEach(element => {
        console.log('- ' + element.nom + ' ' + element.stat.nom) 
    })

    break
    }
    
    if(noms.length==0){
    console.log("Game Over : Jason a étripé tout le monde !")
    }
}