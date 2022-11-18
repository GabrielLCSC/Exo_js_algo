class Personnage{
    constructor(name, santéMentale){
        this.name = name;
        this.santéMentale = santéMentale;
    }
}

let musique = ['Wejdene - Anissa', 'Damso - Solitaire', 'SCH - Mayday', 'Kerchak - Tarzan', 'Pierrick - Javascript'];
let feux = 30;
changements = 0;

John = new Personnage('John', 10)

while(feux > 0 && John.santéMentale>0){
    let rand = Math.floor(Math.random()*musique.length);
    var rValue = musique[rand];
    console.log(rValue);

    if(rValue == 'Wejdene - Anissa'){
        console.log("c'est Anissa de Wejdene")
        John.santéMentale--;
        changements++;
        
    } else{
        console.log("Une autre musique")
    }

    if (John.santéMentale ==0){
        console.log("John est mort");
        break
    }

    feux--;
    console.log(changements);
    console.log(feux);
    console.log(John.santéMentale);

    if (feux ==0 && John.santéMentale >0){
        console.log("John n'est pas mort !")
        break
    }
}