let btn = document.createElement("button");
btn.innerText ="click me!";

btn.style.color = "white";
btn.style.backgroundColor = "red";
btn.style.fontSize = "30px";
btn.style.borderRadius = "9px";

document.querySelector("body").prepend(btn) ;

btn.addEventListener(
    'click' , ()=>{
      return  alert("moye moye")
    }
)