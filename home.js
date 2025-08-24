document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault()

    const pin = 4321

    const bank = document.getElementById("bank").value
    const addedAmount = parseInt(document.getElementById("added-amount").value)
    const accoutnNumber = document.getElementById("account-number").value
    const pinNumber = parseInt(document.getElementById("pin-number").value)

    if(bank==="Select Bank"){
        alert("Please select a bank!")
        return;
    }

    if(accoutnNumber.length != 11){
        alert("Please provide a valid number!")
        return;
    }

    if(pinNumber!==pin){
        alert("Your pin is incorrect!")
        return;
    }

    if(addedAmount <= 0){
        alert("Please enter a valid amount!");
        return;
    }

    const balance = parseInt(document.getElementById("balance").innerText)

    const newBalance = addedAmount + balance

    document.getElementById("balance").innerText = newBalance
    
    
})