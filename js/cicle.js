let calc = document.getElementById('calc');

calc.addEventListener('click',function(){

let out = document.getElementById('out');
let startdate = document.getElementById('start').value;
let g =  document.getElementById('numberofday');
numberofday = g.options[g.selectedIndex].value;

let c =  document.getElementById('number');
number = c.options[c.selectedIndex].value;



// custom function



Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

// Add 7 Days
const date = new Date(startdate);
fin  = numberofday + number ;
console.log(date.addDays(1));
// custom function end
// console.log(number);
// console.log(numberofday);
// console.log(startdate);
// finshed = numberofday + numberofday;
// fin = date.addDays(finshed);
 out.innerText = date.addDays(fin);
});