function login(){
    window.location.href = "dashboard.html";
}

function toggleBalance(){
    const balance = document.getElementById("balance");

    if(balance.innerText === "$250,000,000.00"){
        balance.innerText = "**************";
    } else {
        balance.innerText = "$250,000,000.00";
    }
}
