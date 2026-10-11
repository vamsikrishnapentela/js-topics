

const mycheckbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const paypalbtn=document.getElementById("paypalbtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const mysubit=document.getElementById("mysubit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");


mysubit.onclick=function(){


    if(mycheckbox.checked){
        subresult.textContent="you subscribed";
    }

    else{
        subresult.textContent="you are NOT   subscribed";
    }


    if(visabtn.checked){
        paymentresult.textContent=" paying through visa !."
    }

    else if(paypalbtn.checked)
    {
        paymentresult.textContent=" paying through paypal !."
    }

    else if(mastercardbtn.checked)
    {
        paymentresult.textContent=" paying through mastercard !."
    }

    else
    {
        paymentresult.textContent="you are NOT   selected payment method";
    }
}