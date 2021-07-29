let mybtn = document.getElementById('btn');

mybtn.addEventListener('click',function(){
let mydate = document.getElementById('date').value;
let myout  = document.getElementById('out');

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

// Add 7 Days
const date = new Date(mydate);

console.log(date.addDays(7));

myout.innerText = date.addDays(280);

});