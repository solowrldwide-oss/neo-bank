/* LOGIN */
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(email === "thanerivers@gmail.com" &&
       password === "Incredibleman"){

        localStorage.setItem("neoUser", email);
        window.location.href = "dashboard.html";

    } else {

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

    if(balance.innerText === "$250,000,000.00"){

        balance.innerText = "**************";

    } else {

        balance.innerText = "$250,000,000.00";

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

    } else {

        document.getElementById("name").value = "";

    }

}


/* WITHDRAW FUNCTION */
function submitWithdraw(){

    let account = document.getElementById("account").value;
    let amount = document.getElementById("amount").value;

    if(account === "" || amount === ""){

        alert("Please fill all fields");

    } else {

        document.getElementById("message").innerHTML =
        "✅ Withdrawal Successful";

    }

}
