let num1= document.getElementById( "num1");
let num2= document.getElementById( "num2");
let operation= document.getElementById( "operation");
let result= document.getElementById("result");

document.getElementById("add").onclick=function (){ 

    let a = Number(num1.value);
    let b = Number(num2.value);
 result.textContent=":نتیجه" + (a+b);
}

document.getElementById("subtract").onclick=function (){
let a = Number(num1.value);
let b = Number(num2.value);
result.textContent="نتیجه:" + (a - b); 
}

document.getElementById("multiplay").onclick=function (){
let a =  Number(num1.value);
let b = Number(num2.value);
result.textContent=" :نتیجه: " + (a*b);
}


document.getElementById("calculate").onclick = function () {
let a = Number(num1.value);
let b = Number(num2.value);

if( operation.value === "/") {
   if( b !==0 ) {
   result.textContent = " نتیجه:" + (a/b); 
   }
   else {
      result.textContent = "خطا : تقسیم بر صفر امکان پذیر نیست";
   }
}

else if (operation.value === "%") {
result.textContent = " نتیجه:" + (a%b);
}
else if ( operation.value === "**") {
   result.textContent = " نتیجه:" +  (a**b)
}
   else{
       result.textContent = "یک عملیات انتخاب کنید";
   }
};

