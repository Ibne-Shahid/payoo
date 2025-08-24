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

// Get bonus page

document.getElementById("bonus-btn").addEventListener('click', function(e){
    e.preventDefault()

    const luckyNumbers = ['N3LKY10K', 'N2LKY20K', 'N1LKY30K']

    const couponNumber = document.getElementById("coupon-number").value
    const balance = parseInt(document.getElementById("balance").innerText)
    let newBalance = balance;

    if(couponNumber===luckyNumbers[0]){
        newBalance = balance + 10000
    } else if (couponNumber===luckyNumbers[1]){
        newBalance = balance + 20000
    } else if (couponNumber===luckyNumbers[2]){
        newBalance = balance + 30000
    } else {
        alert("Your coupon is invalid!")
    }

    document.getElementById("balance").innerText = newBalance
    
    
})

// Pay bill page

document.getElementById("pay-now-btn").addEventListener('click', function(e){
    e.preventDefault()

    const bank = document.getElementById("bill-bank").value
    const accoutnNumber = document.getElementById("biller-account-number").value
    const payingAmount = parseInt(document.getElementById("paying-amount").value)
    const pinNumber = parseInt(document.getElementById("paying-pin-number").value)
    const balance = parseInt(document.getElementById("balance").innerText)

    if(bank === "Select Bank"){
        alert("Please select a bank!")
        return;
    }

    if(accoutnNumber.length != 8){
        alert("Please provide a valid account number!")
        return;
    }

    if(isNaN(payingAmount) || payingAmount <= 0){
        alert("Please enter a valid amount!");
        return;
    }

    if(pinNumber !== validPin){
        alert("Your pin is incorrect!")
        return;
    }

    if(payingAmount > balance){
        alert("Insufficient balance!")
        return;
    }

    const availableBalance = balance - payingAmount

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

function handleBg (id){
    const formbtns = document.getElementsByClassName("toggle-bg")
    for(const btn of formbtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
}

// Toggle Feature

document.getElementById("add-money-option").addEventListener('click', function(){
    handleToggle("add-money-page")
    handleBg("add-money-option")
})

document.getElementById("cash-out-option").addEventListener('click', function(){
    handleToggle("cash-out-page")
    handleBg("cash-out-option")
})

document.getElementById("transfer-money-option").addEventListener('click', function(){
    handleToggle("transfer-money-page")
    handleBg("transfer-money-option")
})

document.getElementById("get-bonus-option").addEventListener('click', function(){
    handleToggle("get-bonus-page")
    handleBg("get-bonus-option")
})

document.getElementById("pay-bill-option").addEventListener('click', function(){
    handleToggle("pay-bill-page")
    handleBg("pay-bill-option")
})

// Logout Button

document.getElementById("logout-btn").addEventListener('click', function(){
    let userConfirmed = confirm("Are you sure?")

    if(userConfirmed){
        window.location.href= "./index.html"
    } else {
        alert("You clicked NO, stay logged in.")
    }
})