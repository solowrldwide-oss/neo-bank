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

    if(document.getElementById("recentTransactions")){

        checkAuth();
        updateRecentTransactions();

    }

};
function openConfirm(){

let name =
document.getElementById("name").value;

let amount =
document.getElementById("amount").value;

let bank =
document.getElementById("bank").value;


if(!name || !amount){

document.getElementById("message").innerHTML =
"Please fill transfer details";

return;

}



document.getElementById("confirmText").innerHTML =

`Send $${Number(amount).toLocaleString()} to 
<br>
<strong>${name}</strong>
<br>
${bank}?`;



document.getElementById("confirmBox").style.display="flex";

}



function closeConfirm(){

document.getElementById("confirmBox").style.display="none";

}




function makeTransfer(){

let account = document.getElementById("account").value;
let name = document.getElementById("name").value;
let bank = document.getElementById("bank").value;
let amount = Number(document.getElementById("amount").value);
let pin = document.getElementById("pin").value;

let message = document.getElementById("message");

if(!account || !name || !bank || !amount || !pin){
message.innerHTML = "Fill all fields";
return;
}

if(pin !== "1234"){
message.innerHTML = "Wrong PIN";
return;
}

// show loader
document.getElementById("loader").style.display = "flex";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

// save FAILED transaction ONLY
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactions.unshift({
type: "Transfer",
name: name,
bank: bank,
account: account,
amount: amount,
status: "Declined",
date: new Date().toLocaleString()
});

localStorage.setItem("transactions", JSON.stringify(transactions));

message.style.color = "red";
message.innerHTML = "Transfer Declined ❌";

setTimeout(() => {
window.location.href = "dashboard.html";
}, 1500);

}, 2000);

}
