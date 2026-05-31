let result = document.getElementById("Result")
let Zylinder = document.getElementById("Zylinder")
let Kegel = document.getElementById("Kegel")
let Kugel = document.getElementById("Kugel")
let submit = document.getElementById("send")




submit.onclick = calculate


function calculate(){
    let r = Number(document.getElementById("R").value)
    let h = Number(document.getElementById("Height").value)

    if(Zylinder.checked){
        let Vzylinder = r*r *  Math.PI * h
        result.textContent = Vzylinder.toFixed(3) + "cm³"
    }
    else if(Kegel.checked){
        let Vkegel = r*r * Math.PI * h / 3
         result.textContent = Vkegel.toFixed(3) + "cm³" 
    }
    else if(Kugel.checked){
        let Vkugel = r*r*r * 4 * Math.PI / 3   
          result.textContent = Vkugel.toFixed(3) + "cm³"
    }
    else{
        result.textContent = "please select atleast one option of the following above"
    }
}