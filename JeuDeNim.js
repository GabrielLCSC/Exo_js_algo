// function test(){
//     let a = "jean"
//     let b = "paul"

//     return a==b;
// }

// console.log(test())





// let names = []
// names.push('Vincent', 'Paul', 'Arthur')

// names.forEach((e)=>{
//     console.log(e + ' va à la pêche.')
// })

// for(i = 0; i<names.length; i++){
//     console.log(names[i] + " va à la pêche")
// }


// taxi 1

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


// tueur




// tp3 nim

let game = document.querySelector(".game")
let tab = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
button = document.querySelector(".click")
let messageDeFin = document.querySelector(".message")


let batons
let stockage

function afficherTableau(){
    let txt=""
    for(let i=0; i<tab.length;i++){
        txt += "<div class='baton'></div>"


    }
    game.innerHTML = txt
    batons=document.querySelectorAll(".baton")


    stockage=0


    


    batons.forEach(item => {
        item.addEventListener("click", function(){
            stockage=stockage+1
    
            if (stockage > 3){
                stockage=3;
            }
            document.querySelector('.stick-owned').innerHTML = stockage
            console.log(stockage)

            
        })
    })
}

afficherTableau()
let player = document.querySelector(".player");
console.log(player)
player.innerHTML = " 1"

        button.addEventListener("click", function(){
            if (stockage > 0){
                tab.splice(0,stockage)
                stockage = 0
                document.querySelector('.stick-owned').innerHTML = stockage
                if (player.innerHTML == ' 2'){
                    player.innerHTML = ' 1'
                    
                }else{
                    player.innerHTML = ' 2'
                }
                afficherTableau()
                
        if(tab.length==1){
            messageDeFin.innerHTML = "Le joueur "  + player.innerHTML + " est sur le point de perdre !"
        }
        if(tab.length==0){
            messageDeFin.innerHTML = "Le joueur "  + player.innerHTML + " a gagné !"
        }
                
            
            
            
            
    }
})


