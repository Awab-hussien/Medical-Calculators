let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    
    table = [
        ['g','b','g','b','b','b','b','b','b','b','b','b'],
        ['b','g','b','g','g','b','b','b','b','b','g','g'],
        ['g','b','g','g','g','g','g','g','g','g','b','b'],
        ['b','g','g','b','b','b','b','b','b','b','b','b'],
        ['g','b','b','b','b','g','g','b','g','g','g','g'],
        ['b','b','g','g','b','g','b','g','b','b','b','g'],
        ['b','g','b','b','g','b','b','g','g','g','g','g'],
        ['g','b','b','g','g','b','g','b','b','b','b','b'],
        ['b','g','b','b','g','b','g','g','g','g','g','g'],
        ['g','b','g','g','g','g','b','b','b','b','g','b'],
        ['b','g','b','b','g','g','b','b','b','b','g','g'],
        ['g','b','g','g','b','b','b','b','b','g','g','g'],
        ['b','g','g','b','g','g','g','g','g','g','b','b'],
        ['b','g','b','g','g','g','g','g','g','g','g','b'],
        ['b','g','b','b','g','g','g','g','g','g','g','b'],
        ['g','b','g','g','g','g','g','b','g','g','g','b'],
        ['b','g','b','b','g','g','g','g','g','g','b','b'],    
        ['b','b','g','b','g','g','g','b','g','g','b','b'],
        ['g','b','b','g','b','g','g','g','b','b','b','b'],
        ['b','g','b','b','g','b','g','b','g','b','g','b'],
        ['g','b','g','g','b','g','b','g','b','g','b','g'],
        ['b','g','b','b','b','g','g','b','g','b','g','g'],
        ['g','b','g','b','g','b','b','g','b','g','b','g'],
        ['b','g','b','g','b','g','b','b','g','b','g','b'],
        ['g','b','g','b','g','b','g','b','b','g','b','g'],
        ['b','g','b','g','b','g','b','g','b','b','b','b'],
        ['b','b','g','b','b','b','g','b','g','b','g','g'],
        ['g','b','b','g','g','g','b','g','b','g','b','b']
    
    ];
    

   let myout = document.getElementById('out');
    let myage = document.getElementById('age');
    let mycicle = document.getElementById('month');
   let  age = myage.value;
  let   cicle = mycicle.value;
cicle = cicle - 1;
borngender = age -18;

// console.log(borngender);  
// console.log(cicle);
// console.log(table[borngender][cicle]);

gender = table[borngender][cicle];
if(gender  == 'g'){
myout.innerHTML = '<h3 style="color:pink">'+ 'المولود انثى'+'<h3>';
}
    
if(gender == 'b'){
    myout.innerHTML = '<h3 style="color:blue">'+ 'المولود ذكر'+'<h3>';
}
 

    // myout.innerText = 'awab hussien al-shareif mohammed' + age + cicle;
    
});
