let count =  0;
let numRight = 0 ;
let correctOne;
let numQuestions = 4 ;
let results = " ";


let direction = document.createElement("p");


let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");


/* try and making a for lop instead of an if statement for the check function */
/*for(let StartOnGame = " ");*/





let StartOnGame = function () {



    let p = document.getElementById("question");

    p.innerText = " Which is spelled correctly?";

    btn1.innerText = " I have to go to wok?";
    btn2.innerText = "Work? I don't have to go to work today.";
    btn3.innerText = " What are you doing for wokr today!!  ";
    btn4.innerText = "work? are you serious about his, I just got done today ! ";


    btn2.onclick = function () { Check(this)};

    let Check = function (){
        if(btn2 === " correctBox "){
            results = " nice one ";
            btn2.onclick = StartOnGame2;



        }


    };

    let StartOnGame2};


let p = document.getElementById("question");

p.innerText = " How many times do you go down in a 200 ? (scy) ";

btn1.innerText = " 4 ";
btn2.innerText = " 6 ";
btn3.innerText = " 8 ";
btn4.innerText = " 10 ";


btn3.onclick = function () {Check2 (this)};

let Check2 = function (){
    if(btn3 === results ){

        btn3.onclick = StartOnGame3;



    }


};
/* Dont continue because the buttons don't change into the new question figure out how to get the game to create a new question and answers before moving on */