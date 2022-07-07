const counterText = document.querySelector('#counter') 
//console.log(counterText);

const minusBtn = document.querySelector('#minus-btn')
const plusBtn = document.querySelector('#plus-btn')
const resetBtn = document.querySelector('#reset-btn')
//console.log(plusBtn);
let count = 0;
const increase = () => {
    count++
    //console.log(count)
    counterText.textContent = count;
    
}
const decrease = () => {
    count--
    //console.log(count)
    counterText.textContent = count;
}
const reset = () => {
    count = 0;
  //  console.log(count)
    counterText.textContent = count;
}

minusBtn.addEventListener('click',decrease)
plusBtn.addEventListener('click',increase)
resetBtn.addEventListener('click',reset)
//console.log(plusBtn);
//console.log(plusBtn);


// theme Switcher/

const themeBtns = document.querySelectorAll('.theme-buttons')

const selectTheme = (evt) => {
    const theme =evt.target.textContent
    console.log(theme);
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    const buttons = document.querySelectorAll('button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
        
    }
}
for(let i=0; i<themeBtns.length ; i++)
{
    themeBtns[i].addEventListener('click', selectTheme)
}