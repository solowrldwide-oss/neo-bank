let currentBalance =
Number(localStorage.getItem("balance")) || 87641072.33;

/* LOGIN */
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(email === "thanerivers@gmail.com" && password === "Incredibleman"){
        localStorage.setItem("neoUser", email);
        window.location.href = "dashboard.html";
    } else {
        error.innerText = "Invalid credentials";
    }
}

/* AUTH */
function checkAuth(){
    if(!localStorage.getItem("neoUser")){
        window.location.href = "index.html";
    }
}

/* LOGOUT */
function logout(){
    localStorage.removeItem("neoUser");
    window.location.href = "index.html";
}

/* BALANCE TOGGLE */
function toggleBalance(){

    let balance = document.getElementById("balance");
    let eye = document.querySelector(".eye-btn i");

    if(balance.innerText.includes("*")){
        balance.innerText = "$" + currentBalance.toLocaleString();
        eye.className = "fa-solid fa-eye";
    } else {
        balance.innerText = "************";
        eye.className = "fa-solid fa-eye-slash";
    }
}

/* NOTIFY */
function notify(){
    alert("New transaction received!");
}


/* =========================
   TRANSACTIONS ENGINE
========================= */

function updateRecentTransactions(){

    let container = document.getElementById("recentTransactions");
    if(!container) return;

    container.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("history")) || [];

    // Fallback sample if empty
    if(history.length === 0){

        history = [
            {type:"Deposit", amount:50000000, time:"Today • 09:12 AM"},
            {type:"Withdrawal", amount:500, time:"Today • 10:35 AM"},
            {type:"Transfer", amount:2500, time:"Today • 02:45 PM"}
        ];
    }

    history.slice(0,10).forEach(tx => {

        let sign = (tx.type === "Withdrawal" || tx.type === "Transfer") ? "-" : "+";

        let div = document.createElement("div");
        div.className = "tx";

        div.innerHTML = `
            <div>
                <strong>${tx.type}</strong><br>
                <small>${tx.time}</small>
            </div>

            <b>${sign}$${Number(tx.amount).toLocaleString()}</b>
        `;

        container.appendChild(div);
    });
}

/* DEPOSIT */
function submitDeposit(){

    let amount = Number(document.getElementById("amount").value);

    if(amount <= 0) return;

    currentBalance += amount;
    localStorage.setItem("balance", currentBalance);

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({
        type:"Deposit",
        amount:amount,
        time:new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));

    updateRecentTransactions();
}

/* TRANSFER */
function confirmTransfer(){

    let amount = Number(document.getElementById("amount").value);
    let account = document.getElementById("account").value;

    currentBalance -= amount;
    localStorage.setItem("balance", currentBalance);

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({
        type:"Transfer",
        amount:amount,
        account:account,
        time:new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));

    updateRecentTransactions();
}


/* LOAD ON START */
window.onload = function(){
    checkAuth();
    updateRecentTransactions();
};
