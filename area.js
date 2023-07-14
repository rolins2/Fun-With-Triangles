const base = document.querySelector("#base");
const height = document.querySelector("#height");
const subbtn = document.querySelector("#submit-btn");
const output = document.querySelector("#outp");

subbtn.addEventListener("click",function eventHandler(){
    console.log("button clicked");
     

    checkArea();
})

function checkArea(){
    var area = 0.5* base.value * height.value ;

    

    output.innerText = "The area is  " +area +"cm²"
}