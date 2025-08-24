const validPin = 1234

// Add money option

document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const addedAmount = parseInt(document.getElementById("added-amount").value)
    const accoutnNumber = document.getElementById("account-number").value
    const pinNumber = parseInt(document.getElementById("add-pin-number").value)
    const balance = parseInt(document.getElementById("balance").innerText)

    if (bank === "Select Bank") {
        alert("Please select a bank!")
        return;
    }

    if (accoutnNumber.length != 11) {
        alert("Please provide a valid number!")
        return;
    }

    if (pinNumber !== validPin) {
        alert("Your pin is incorrect!")
        return;
    }

    if (isNaN(addedAmount) || addedAmount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    const newBalance = addedAmount + balance

    document.getElementById("balance").innerText = newBalance   


})

// Cash out option

document.getElementById("cash-out-btn").addEventListener('click', function(e){
    e.preventDefault()

    const withdrawnAmount = parseInt(document.getElementById("withdrawn-amount").value)
    const agentNumber = document.getElementById("agent-number").value
    const pinNumber = parseInt(document.getElementById("cash-pin-number").value)
    const balance = parseInt(document.getElementById("balance").innerText)

    if(agentNumber.length != 11){
        alert("Please provide a valid number!")
        return;
    }

    if(pinNumber !== validPin){
        alert("Your pin is incorrect!")
        return;
    }

    if(isNaN(withdrawnAmount) || withdrawnAmount <= 0){
        alert("Please enter a valid amount!");
        return;
    }

    if(withdrawnAmount>balance){
        alert("Insufficient balance!")
        return;
    }

    const availableBalance = balance - withdrawnAmount

    document.getElementById("balance").innerText = availableBalance


})

// Transfer money page

document.getElementById("transfer-btn").addEventListener('click', function(e){
    e.preventDefault

    const transferAmount = parseInt(document.getElementById("transfer-amount").value)
    const userNumber = document.getElementById("user-number").value
    const pinNumber = parseInt(document.getElementById("transfer-pin-number").value)
    const balance = parseInt(document.getElementById("balance").innerText)

    if(userNumber.length != 11){
        alert("Please provide a valid number!")
        return;
    }

    if(pinNumber!==validPin){
        alert("Your pin is incorrect!")
        return;
    }

    if(isNaN(transferAmount) || transferAmount <= 0){
        alert("Please enter a valid amount!");
        return;
    }

    if(transferAmount > balance){
        alert("Insufficient balance!")
        return;
    }

    const availableBalance = balance - transferAmount

    document.getElementById("balance").innerText = availableBalance
})

// Function for toggle

function handleToggle (id){
    const forms = document.getElementsByClassName("form")

    for (const form of forms){
        form.style.display= "none"
    }

    document.getElementById(id).style.display= "block"
}

// Toggle Feature

document.getElementById("add-money-option").addEventListener('click', function(){
    handleToggle("add-money-page")
})

document.getElementById("cash-out-option").addEventListener('click', function(){
    handleToggle("cash-out-page")
})

document.getElementById("transfer-money-option").addEventListener('click', function(){
    handleToggle("transfer-money-page")
})