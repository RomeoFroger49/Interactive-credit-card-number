


document.getElementById('name-e').addEventListener("input", function replace(e){
    document.getElementById('name').textContent = e.target.value;
});

const chiffre_t = document.getElementById('chiffre');

document.getElementById('chiffre-e').addEventListener("input", replaceChiffre);
document.getElementById('chiffre-e').myPara = document.getElementById('chiffre');
document.getElementById('chiffre-e').myNumber = 16;
document.getElementById('chiffre-e').myP = document.getElementById("chiffre-alert");


(document.getElementById('year-e')).addEventListener("input", replaceChiffre);
(document.getElementById('year-e')).myPara = document.getElementById('year');
(document.getElementById('year-e')).myNumber = 2;
document.getElementById('year-e').myP = document.getElementById("year-alert");

(document.getElementById('month-e')).addEventListener("input", replaceChiffre);
(document.getElementById('month-e')).myPara = document.getElementById('month');
(document.getElementById('month-e')).myNumber = 2;
document.getElementById('month-e').myP = document.getElementById("year-alert");

(document.getElementById('cvc-e')).addEventListener("input", replaceChiffre);
(document.getElementById('cvc-e')).myPara = document.getElementById('cvc');
(document.getElementById('cvc-e')).myNumber = 3;
document.getElementById('cvc-e').myP = document.getElementById("year-alert");



function replaceChiffre(e){
    const pattern =/[a-zA-Z]/g;
    if(pattern.test(e.target.value) || e.target.value.length > e.target.myNumber){
        e.target.style.border = "solid red";
        e.target.style.color = "red";
        e.target.myP.style.display = "block";
        e.target.myPara.textContent = e.target.value;
        
    }else{
        e.target.myP.style.display = "none";
        e.target.style = "";
        e.target.myPara.textContent = e.target.value;
    }
    
}