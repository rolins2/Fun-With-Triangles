const inp1 = document.querySelector("#inp1s");
const inp2 = document.querySelector("#inp2s");
const out = document.querySelector("#output");

const submitbtn = document.querySelector("#submitbtn");

submitbtn.addEventListener("click",function clcikHandler(){
    
    calculateHypotenuse();
    
    
})

function calculateHypotenuse(){
    var hypo = Math.sqrt(inp1.value**2 + inp2.value**2);
    
    out.innerText = "The hypotenuse is " +hypo;
  
}