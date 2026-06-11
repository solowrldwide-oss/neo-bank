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
