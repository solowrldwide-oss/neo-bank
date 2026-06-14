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




function openReview(){

let account = document.getElementById("account").value;
let name = document.getElementById("name").value;
let bank = document.getElementById("bank").value;
let amount = document.getElementById("amount").value;

if(!account || !name || !bank || !amount){
alert("Fill all fields");
return;
}

document.getElementById("reviewDetails").innerHTML =
`
<strong>Recipient:</strong> ${name}<br>
<strong>Bank:</strong> ${bank}<br>
<strong>Account:</strong> ${account}<br>
<strong>Amount:</strong> $${amount}
`;

document.getElementById("reviewPopup").style.display = "flex";

}

function closeReview(){
document.getElementById("reviewPopup").style.display = "none";
}

function startProcessing(){

closeReview();

document.getElementById("statusPopup").style.display = "flex";

// fake processing delay
setTimeout(() => {

document.getElementById("statusTitle").innerText =
"❌ Transfer Declined";

document.getElementById("statusText").innerText =
"Security system blocked this transaction";

saveDeclinedTransaction();

setTimeout(() => {
window.location.href = "dashboard.html";
}, 1500);

}, 2500);

}

function saveDeclinedTransaction(){

let account = document.getElementById("account").value;
let name = document.getElementById("name").value;
let bank = document.getElementById("bank").value;
let amount = document.getElementById("amount").value;

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

}
