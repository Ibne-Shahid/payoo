document.getElementById("loginButton").addEventListener('click', function(e){
    e.preventDefault()

    const number = "01320793841"
    const mobileNumber = parseInt(number)
    const pinNumber = 4321

    const numberInput = parseInt(document.getElementById("mobile-number").value)
    const pinInput = parseInt(document.getElementById("pin-number").value)

    if (numberInput === mobileNumber && pinInput === pinNumber){
        window.location.href="./home.html"
    }else{
        alert("Invalid Information!")
    }

})