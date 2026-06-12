let currentBalance =
Number(localStorage.getItem("balance")) || 87641072.33;

/* LOGIN */
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(
        email === "thanerivers@gmail.com" &&
        password === "Incredibleman"
    ){

        localStorage.setItem("neoUser", email);

        window.location.href = "dashboard.html";

    }else{

        error.innerText = "Invalid credentials";

    }

}


/* CHECK AUTH */
function checkAuth(){

    let user = localStorage.getItem("neoUser");

    if(!user){

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

    const balance = document.getElementById("balance");

    if(balance.innerText.includes("*")){

        balance.innerText =
        "$" + currentBalance.toLocaleString();

    } else {

        balance.innerText = "**************";

    }

}

/* NOTIFICATION */
function notify(){

    alert("New transaction received!");

}


/* GENERATE RECIPIENT NAME */
function generateName(){

    let names = [
        "Michael Brown",
        "Sophia Williams",
        "James Anderson",
        "Olivia Johnson",
        "Daniel Smith",
        "Emma Davis",
        "Benjamin Wilson",
        "Ava Martinez",
        "Noah Thomas",
        "Charlotte Taylor"
    ];

    let account = document.getElementById("account").value;

    if(account.length >= 10){

        let randomName =
        names[Math.floor(Math.random() * names.length)];

        document.getElementById("name").value = randomName;

    }else{

        document.getElementById("name").value = "";

    }

}


/* WITHDRAW FUNCTION */
function submitWithdraw(){

    let account = document.getElementById("account").value;
    let amount = Number(document.getElementById("amount").value);

    let availableBalance = 87641072.33;

    if(account === "" || amount === 0){

        alert("Please fill all fields");

        return;

    }

    if(amount > availableBalance){

        alert("Insufficient Funds");

        return;

    }

    // SHOW LOADER
    document.getElementById("loader").style.display = "flex";

    setTimeout(function(){

        // HIDE LOADER
        document.getElementById("loader").style.display = "none";

        // SUCCESS MESSAGE
        document.getElementById("message").innerHTML =
        "✅ Withdrawal Successful";

    },3000);

}
function generateBank(){

    let banks = [

        "Bank of America",
        "Chase Bank",
        "Wells Fargo",
        "Citibank",
        "Capital One",
        "PNC Bank",
        "Truist Bank"

    ];

    let randomBank =
    banks[Math.floor(Math.random()*banks.length)];

    document.getElementById("bank").value =
    randomBank;

}
/* DEPOSIT FUNCTION */
function submitDeposit(){

    let account =
    document.getElementById("account").value;

    let amount =
    Number(document.getElementById("amount").value);

    if(account === "" || amount === 0){

        alert("Please fill all fields");
        return;

    }

    document.getElementById("loader").style.display =
    "flex";

    setTimeout(function(){

        currentBalance += amount;

        localStorage.setItem(
            "balance",
            currentBalance
        );

        let txId =
        "TX" + Math.floor(
            Math.random()*1000000000
        );

        let history =
        JSON.parse(
            localStorage.getItem("history")
        ) || [];

        history.unshift({

            type:"Deposit",

            amount:amount,

            txId:txId,

            time:new Date().toLocaleString()

        });

        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );

        document.getElementById("loader").style.display =
        "none";

        document.getElementById("message").innerHTML =

        "✅ Deposit Successful<br><br>" +

        "Transaction ID:<br>" +

        txId;

    },3000);

}
function submitTransfer(){

    let account =
    document.getElementById("account").value;

    let amount =
    Number(document.getElementById("amount").value);

    if(account === "" || amount === 0){

        alert("Please fill all fields");
        return;

    }

    if(amount > currentBalance){

        alert("Insufficient Funds");
        return;

    }

    document.getElementById("loader").style.display =
    "flex";

    setTimeout(function(){

        currentBalance -= amount;

        localStorage.setItem(
            "balance",
            currentBalance
        );

        let txId =
        "TX" + Math.floor(
            Math.random()*1000000000
        );

        let history =
        JSON.parse(
            localStorage.getItem("history")
        ) || [];

        history.unshift({

            type:"Transfer",

            amount:amount,

            txId:txId,

            time:new Date().toLocaleString()

        });

        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );

        document.getElementById("loader").style.display =
        "none";

        document.getElementById("message").innerHTML =

        "✅ Transfer Successful<br><br>" +

        "Transaction ID:<br>" +

        txId;

    },3000);

}
function searchHistory(){

    let input =
    document.getElementById("search")
    .value
    .toLowerCase();

    let tx =
    document.querySelectorAll(".tx");

    tx.forEach(function(item){

        if(item.innerText
        .toLowerCase()
        .includes(input)){

            item.style.display = "";

        } else {

            item.style.display = "none";

        }

    });

}
