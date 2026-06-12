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
   TRANSACTIONS FIXED SYSTEM
========================= */

function updateRecentTransactions(){

    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    let container =
    document.getElementById("recentTransactions");

    if(!container) return;

    // CLEAR OLD CONTENT (VERY IMPORTANT FIX)
    container.innerHTML = "";

    history.slice(0, 6).forEach(tx => {

        let typeClass =
        tx.type.toLowerCase();

        let sign =
        (tx.type === "Withdrawal" || tx.type === "Transfer")
        ? "-" : "+";

        container.innerHTML += `
            <div class="tx ${typeClass}">
                <div>
                    <strong>${tx.type}</strong><br>
                    <small>${tx.time}</small>
                </div>
                <b>${sign}$${Number(tx.amount).toLocaleString()}</b>
            </div>
        `;
    });
}

/* RUN ON LOAD */
window.onload = function(){
    checkAuth();
    updateRecentTransactions();
};
