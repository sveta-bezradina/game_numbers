const user = prompt("Ваше ім'я", '');

const nameUser = document.getElementById('name');
const number1 = document.getElementById('numb1');
const number2 = document.getElementById('numb2');
const point1 = document.getElementById('pointsUser');
const point2 = document.getElementById('pointsComp');

nameUser.innerHTML = user;

let count1=0;
let count2=0;
const btn = document.querySelector('#btn');
btn.onclick = function(){
    const n1 = innerHTML = Math.floor(Math.random()*10);
    number1.innerHTML = n1;   
    const n2 = innerHTML = Math.floor(Math.random()*10);
    number2.innerHTML = n2;   
    if(n1>n2){
        ++count1;
        point1.innerHTML = count1;
    }else if(n1===n2){
    }else{
        ++count2;
        point2.innerHTML = count2;
    }

    Winner();
};

function Winner(){
    if(count1==3 && count2==3){
        alert("Нічия");
        Resert();
    }else if(count1==3){
        alert("Ти виграв");
        Resert();
    }else if(count2==3){
        alert("Ти програв");
        Resert();
    }
}
function Resert(){
    number1.innerHTML = '';
    number2.innerHTML = '';
    point1.innerHTML = '';
    point2.innerHTML = '';
    count1='';        
    count2='';
}
