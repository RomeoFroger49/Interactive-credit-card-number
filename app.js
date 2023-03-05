
const name_t = document.getElementById('name');

document.getElementById('name-e').addEventListener("input", function replace(e){
    name_t.textContent = e.target.value;
});

const chiffre_t = document.getElementById('chiffre');

document.getElementById('chiffre-e').addEventListener("input", replaceChiffre);

function replaceChiffre(e){
    const pattern =/[a-zA-Z]/g;
    if(pattern.test(e.target.value) || e.target.value.length > 16){
        e.target.style.border = "solid red";
        e.target.style.color = "red";
        document.getElementById("alert-message").style.display = "block";
        chiffre_t.textContent = e.target.value;
        
    }else{
        document.getElementById("alert-message").style.display = "none";
        e.target.style = "";
        chiffre_t.textContent = e.target.value;
    }
    
}