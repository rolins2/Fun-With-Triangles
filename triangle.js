const angles = document.querySelectorAll(".getang");
const submitbtn = document.querySelector("#submitbutton");
const output = document.querySelector("#output");

function claculatesum(ang1,ang2,ang3)
{
  var sum = ang1+ang2+ang3;
 

  checkifTriangle(sum);
}

function checkifTriangle(s){
    if(s === 180){
        output.innerText = "The entered angles form a triangle";
    }else{
        output.innerText = "The entered angles do not form a triangle";
    }
}

submitbtn.addEventListener("click", function clickHandler(){
  
    claculatesum(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
    
})