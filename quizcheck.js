const quizForm = document.querySelector(".quizform");

const submitbtn = document.querySelector("#submitbtn");

submitbtn.addEventListener("click",function clickHandler(){
    console.log("button clicked ")

    checkScore();
})

const output = document.querySelector("#output");

const rightAnswers = ["90","Rightangled"];

function checkScore(){
    var score = 0;
    var i = 0;
    
    const formResults = new FormData(quizForm);

    
    for(let val of formResults.values())
    {
        if(val === rightAnswers[i]){
            score = score +1;
       

        }
      
        i = i+1;
    }

    printScore(score);
   
    

}

function printScore(s)
{
    if (s===2){
        output.innerText = "Your score is " +s + " you got everything right";
    }
    else if(s===1){
        output.innerText = "Your score is " +s+ " you got one question right";

    }else{
        output.innerText = "Your score is " +s + " you got both the questions wrong";

    }
}