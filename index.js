var SCORE = 0;
var STRING_RESULT = "IT's A TIE"

const elementinput =(userElement)=>{

    let content = document.querySelector(".content");
    content.style.display = "none";

    let result = document.getElementById("results");
    result.style.display = "flex";


    comElement = pickElement();
    
    document.getElementById("computerPickedImage").src =icons[comElement];
    document.getElementById("userPickedImage").src =icons[userElement];


    if (dominance_chart[userElement]["add"].includes(comElement)){
        SCORE+=1;
        STRING_RESULT = "You Win!";
    }
    if(dominance_chart[userElement]["subtract"].includes(comElement)){
        SCORE-=1;
        STRING_RESULT = "You Lose!";
    }

    let scoreCount = document.getElementById("scoreCount");
    if (SCORE < 0) {
        scoreCount.style.color ="red";
        scoreCount.innerHTML = SCORE;
    }else if(SCORE>0){
        scoreCount.style.color ="green";
        scoreCount.innerHTML = SCORE;
    }else{
        scoreCount.innerHTML = SCORE;
        scoreCount.style.color ="black";
    }
    document.getElementById("result-description").innerHTML = STRING_RESULT;
    console.log(SCORE, STRING_RESULT);

}

const dominance_chart={
    "fire":{
        "add":["wind","lightning", "fire"],
        "subtract":["water", "plant"]
    },
    "lightning":{
        "add":["water","fire","lightning"],
        "subtract":["wind","plant"]
    },
    "water":{
        "add":["lightning","plant","water"],
        "subtract":["fire","wind"]
    },
    "plant":{
        "add":["water","wind","plant"],
        "subtract":["fire","lightning"]
    },
    "wind":{
        "add":["plant","fire","wind"],
        "subtract":["water","lightning"]
    }
}
const icons={
    "fire": "Images/Fire.png",
    "lightning": "Images/Lightning.png",
    "water": "Images/Water.png",
    "plant": "Images/Plant.png",
    "wind": "Images/Wind.png"
}

const pickElement=()=>{
    let elementarray=["fire", "lightning", "water", "plant", "wind"]
    let index = Math.floor(Math.random() * elementarray.length);
    return elementarray[index];
    console.log("Choosed Element")
}


let playAgain = document.getElementById("playAgainButton");
playAgain.addEventListener("click", ()=>{
    let content = document.querySelector(".content");
    content.style.display = "flex";

    let result = document.getElementById("results");
    result.style.display = "none";
})


let gamePlayOpen = document.getElementById("game-play-open");
gamePlayOpen.addEventListener("click", ()=>{
    document.querySelector(".gameplay").style.display = "flex";
})

let gamePlayClose = document.querySelector(".close");
gamePlayClose.addEventListener("click", ()=>{
    document.querySelector(".gameplay").style.display = "none";
})