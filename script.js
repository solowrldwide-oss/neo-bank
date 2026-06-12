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

    if(balance.innerText === "$87,641,072.33"){

        balance.innerText = "**************";

    } else {

        balance.innerText = "$87,641,072.33;

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


function submitWithdraw(){

    let account = document.getElementById("account").value;
    let amount = Number(document.getElementById("amount").value);

    let availableBalance = $87,641,072.33;

    if(account === "" || amount === ""){

        alert("Please fill all fields");
        return;

    }

    if(amount > availableBalance){

        alert("Insufficient Funds");
        return;

    }

    // show loading
    document.getElementById("loader").style.display = "flex";

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

        document.getElementById("message").innerHTML =
        "✅ Withdrawal Successful";

    },3000);

}

