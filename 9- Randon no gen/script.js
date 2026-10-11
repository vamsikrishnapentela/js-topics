const btn=document.getElementById("btn");

const labelcount=document.getElementById("labelcount");

let randomnum;
btn.onclick=function(){
    randomnum= Math.floor(Math.random()*7);
    labelcount.textContent=randomnum;
}