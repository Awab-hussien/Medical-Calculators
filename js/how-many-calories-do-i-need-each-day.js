let out  = document.getElementById('out');
let myheight = document.getElementById('height');
let myweight =  document.getElementById('weight');
let mygender  =  document.getElementById('gender');
let myact = document.getElementById('act');
let myage = document.getElementById('age');
let btn  = document.getElementById('calc');



btn.addEventListener('click',function(){
    // get gender 
 age = myage.value;
 weight = myheight.value;
 height = myheight.value;
 gender = mygender.value;
 act = myact.value;

//  out.innerHTML = '<p>some text</p>';
  if(gender == 'male'){
   fin =  (66.47 + (13.75 * weight) + (5.003 * height ) - (6.755 * age ))* act;
   out.innerHTML ="كلورى "+ fin + " السعرات التى تحرقها فى اليوم  ";
 
  }

  if(gender == 'female'){
 fin =  (655.1 + (9.563 * weight ) + (1.850 * height ) - (4.676 * age)) * act;
   out.innerHTML ="كلورى"+ fin + "السعرات الحرارية التى تحرقها فى اليوم";
  

}
  





});