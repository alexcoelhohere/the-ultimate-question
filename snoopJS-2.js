// name function
    // let Fname = document.getElementById('name_input').value;
    // function getName(){
    // document.getElementById('welcome_text').innerHTML='Welcome,'+Fname;
    // }
// var who = prompt('who let the dogs out?');
// function dogs(who) {
//     var arrest=('Arrest'+' '+who);
//     console.log(arrest);
// }
// dogs(who);

// function rightAnswer(){
//  document.getElementById('snooparrest').style.visibility="visible";
//  document.getElementById('snooparrest');
// }


//Craig's Code below

const form = document.querySelector('form');
// const name = form.name.value;
const welcome = document.querySelector('h1');

const changePage = () => {
    welcome.innerHTML = `Welcome ${form.name.value}`;
    console.log(form.name.value);
};

form.addEventListener('submit', e => {
    e.preventDefault();
    changePage();
});


