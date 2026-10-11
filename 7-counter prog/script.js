const incbtn=document.getElementById("incbtn");
const resbtn=document.getElementById("resbtn");
const decbtn=document.getElementById("decbtn");
const labelcount=document.getElementById("labelcount");
let count=0;

incbtn.onclick=function(){
    count++;
    labelcount.textContent=count;
}

decbtn.onclick=function(){
    count--;
    labelcount.textContent=count;
}

resbtn.onclick=function(){
    count=0;
    labelcount.textContent=count;
}