let btn = document.querySelector('button');
btn.addEventListener('click', inputMsg);

function inputMsg(){
    let name =  prompt('Enter your name');
    btn.textContent = 'Roll no.1:' + name;
}