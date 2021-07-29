// حساب السعرا الخرارية التى يحتاجها الجسم
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let age = document.querySelector('#age');

let out = document.querySelector('#out');
let calc = document.querySelector('#calc');
let factor = document.getElementsByName('factor');

calc.addEventListener('click',()=>{


   let g =  document.getElementById('gender');
   gender = g.options[g.selectedIndex].value;

   let lists =  document.getElementById('factor');
 factor = lists.options[lists.selectedIndex].value;

 let myweight = weight.value;
 let myheight  = height.value;
 let myage = age.value;




if(gender == 'female'){
 let res = (myweight * 10) + (myheight * 6.25 ) - (myage * 5 ) - 5;
  let fin = res * factor;
  out.innerHTML = (fin + 'كالوري فى اليوم');

}

if(gender == 'male'){
  let res = (myweight * 10) + (myheight * 6.25 ) - (myage * 5 ) - 161;
  let fin = res * factor;
  out.innerHTML = (fin + 'كالوري فى اليوم');

   
}






















   
    

});



