/*json*/
 var answers ={
        /*Hoelaat begint bitacademy */
        "answer1": "Bit academy begint om 9:30",
        /*Wanneer zijn de pauzes */
        "answer2": "De pauzes beginnen om 11:00, 12:30 en 14:30",
        /*Hoelaat zijn wij uit */
        "answer3": "Je bent om 16:00 uit",
    };
/*button response*/
var questA = document.getElementById("aQuestion").onclick = function() {answeringA()};
var questB = document.getElementById("bQuestion").onclick = function() {answeringB()};
var questC = document.getElementById("cQuestion").onclick = function() {answeringC()};
/*responding on input*/
function answeringA(){
    document.getElementById("answer").innerHTML= answers.answer1
};
function answeringB(){
    document.getElementById("answer").innerHTML= answers.answer2
};
function answeringC(){
    document.getElementById("answer").innerHTML= answers.answer3
};
