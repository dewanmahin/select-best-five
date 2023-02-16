function cardBtn(txt){
    const name = txt;
    const playerNames = document.querySelectorAll('li');

    if(playerNames.length < 5){
        const li = document.createElement('li');
        li.innerText = name;
        const ol = document.getElementById('name-list');
        ol.appendChild(li);
    }else{
        alert('You Have Already Selected Five Players')
    }
}

// Calculate Button Handler
document.getElementById('calculateBtn').addEventListener('click', function(){
    const playerNames = document.querySelectorAll('li');

    const perPlayerTxt = document.getElementById('perPlayerCost');
    const perPlayerCost = parseFloat(perPlayerTxt.value);

    const playerExpenses = document.getElementById('playerExpenses');
    playerExpenses.innerText = playerNames.length * perPlayerCost;
})

// Calculate Total Button Handler
document.getElementById('calculateTotalBtn').addEventListener('click', function(){
    const playerExpensesTxt = document.getElementById('playerExpenses');
    const playerExpenses = parseFloat(playerExpensesTxt.innerText);

    const managerTxt = document.getElementById('managerCost');
    const managerCost = parseFloat(managerTxt.value);

    const coachTxt = document.getElementById('coachCost');
    const coachCost = parseFloat(coachTxt.value);

    const total = document.getElementById('total');
    total.innerText = playerExpenses + managerCost + coachCost;
})