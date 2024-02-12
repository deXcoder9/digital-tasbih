const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahInBtn = document.getElementById('subhanAllahInBtn')
const subhanAllahDeBtn = document.getElementById('subhanAllahDeBtn')

const alhamdulillahDisplay = document.getElementById('AlhamdulillahDisplay')
const alhamdulillahInBtn = document.getElementById('AlhamdulillahInBtn')
const alhamdulillahDeBtn = document.getElementById('AlhamdulillahDeBtn')

const allahuakberDisplay = document.getElementById('AllahuakberDisplay')
const allahuakberInBtn = document.getElementById('AllahuakberInBtn')
const allahuakberDeBtn = document.getElementById('AllahuakberDeBtn')

let subhanAllahValue = 0;
let alhamdulillahValue = 0;
let allahuakberValue = 0;

// subhahAllah
subhanAllahInBtn.addEventListener('click', 
function(){
    if(subhanAllahValue === 33 && subhanAllahValue < 34  ){
        return alert('Allahumma barik; Please move on to next        ')
    }
    subhanAllahValue += 1;
    subhanAllahDisplay.innerText = subhanAllahValue
})
subhanAllahDeBtn.addEventListener('click', 
function(){
    if(subhanAllahValue === 0   ){
        return alert('You cant add negative value :)')
    }
    subhanAllahValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahValue
})

// Alhamdulillah
alhamdulillahInBtn.addEventListener('click', 
function(){
    if(alhamdulillahValue === 33 && alhamdulillahValue <34  ){
        return alert('Allahumma barik; Please move on to next        ')
    }
    alhamdulillahValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue
})
alhamdulillahDeBtn.addEventListener('click', 
function(){
    if(alhamdulillahValue === 0  || alhamdulillahValue <0 ){
        return alert('You cant add negative value :)')
    }
    alhamdulillahValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue
})

// Allahuakber
allahuakberInBtn.addEventListener('click', 
function(){
    if(allahuakberValue === 33 && allahuakberValue <34  ){
        return alert('Allahumma barik; Please move on to next        ')
    }
    allahuakberValue += 1;
    allahuakberDisplay.innerText = allahuakberValue
})
allahuakberDeBtn.addEventListener('click', 
function(){
    if(allahuakberValue === 0 || allahuakberValue < 0  ){
        return alert('You cant add negative value :)')
    }
    allahuakberValue -= 1;
    allahuakberDisplay.innerText = allahuakberValue
})



const resetButton = document.getElementById('reset_button');
resetButton.addEventListener('click', 
function(){
    subhanAllahValue = 0;
    subhanAllahDisplay.innerText = subhanAllahValue;

    allahuakberValue = 0;
    AllahuakberDisplay.innerText = allahuakberValue;

    alhamdulillahValue = 0;
    alhamdulillahDisplay.innerText = alhamdulillahValue;


})