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
function confirmTransfer(){

    closeConfirm();

    document.getElementById("loader").style.display = "flex";

    let account = document.getElementById("account").value;
    let amount = Number(document.getElementById("amount").value);

    setTimeout(function(){

        currentBalance -= amount;

        localStorage.setItem("balance", currentBalance);

        let txId = "TX" + Math.floor(Math.random()*1000000000);

        let history = JSON.parse(localStorage.getItem("history")) || [];

        history.unshift({
            type:"Transfer",
            amount:amount,
            account:account,
            txId:txId,
            time:new Date().toLocaleString()
        });

        localStorage.setItem("history", JSON.stringify(history));

        document.getElementById("loader").style.display = "none";

        document.getElementById("message").innerHTML = `
        
        <div class="checkmark">✔</div>
        <h3>Transfer Successful</h3>
        <p>${txId}</p>
        
        `;

        updateRecentTransactions();

    },2500);
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
function generateTransferName(){

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

    let account =
    document.getElementById("account").value;

    if(account.length === 10){

        document.getElementById("name").value =
        names[Math.floor(Math.random()*names.length)];

    } else {

        document.getElementById("name").value = "";

    }
}
function generateBank(){

    let banks = [
        "Bank of America",
        "JPMorgan Chase",
        "Wells Fargo",
        "Citibank",
        "U.S. Bank",
        "Truist Bank",
        "PNC Bank",
        "Capital One",
        "TD Bank",
        "Citizens Bank",
        "Huntington Bank",
        "Regions Bank",
        "Fifth Third Bank",
        "KeyBank",
        "Ally Bank",
        "Discover Bank",
        "American Express Bank",
        "Morgan Stanley Bank",
        "Goldman Sachs Bank USA",
        "Charles Schwab Bank",
        "BMO Harris Bank",
        "First Citizens Bank",
        "Synchrony Bank",
        "HSBC Bank USA"
    ];

    let account =
    document.getElementById("account").value;

    if(account.length === 10){

        document.getElementById("bank").value =
        banks[Math.floor(Math.random() * banks.length)];

    } else {

        document.getElementById("bank").value = "";

    }
}
function openConfirm(){

    let account = document.getElementById("account").value;
    let amount = document.getElementById("amount").value;

    if(account === "" || amount === ""){
        alert("Fill all fields");
        return;
    }

    document.getElementById("confirmText").innerText =
    `Send $${amount} to account ${account}?`;

    document.getElementById("confirmBox").style.display = "flex";
}

function closeConfirm(){
    document.getElementById("confirmBox").style.display = "none";
}
function showBankLogo(){

    let bank = document.getElementById("bank").value;

    let logo = document.getElementById("bankLogo");

    let logos = {

        "Bank of America": "assets/banks/boa.png",
        "Chase Bank": "assets/banks/chase.png",
        "Wells Fargo": "assets/banks/wellsfargo.png",
        "Citibank": "assets/banks/citibank.png",
        "Capital One": "assets/banks/capitalone.png",
        "PNC Bank": "assets/banks/pnc.png",
        "Truist Bank": "assets/banks/truist.png",
        "U.S. Bank": "assets/banks/usbank.png",
        "TD Bank": "assets/banks/tdbank.png",
        "HSBC": "assets/banks/hsbc.png"

    };

    if(logos[bank]){
        logo.src = logos[bank];
        logo.style.display = "block";
    } else {
        logo.style.display = "none";
    }
}
