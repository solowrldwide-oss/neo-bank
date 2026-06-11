let user = {
    email: null,
    balance: 250000000,
    loggedIn: false
};

/* LOGIN SYSTEM */
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    // ✅ your allowed credentials
    const validEmail = "thanerivers@gmail.com";
    const validPassword = "Incredibleman";

    // check empty fields
    if(!email || !password){
        error.innerText = "Please fill all fields";
        return;
    }

    // check credentials
    if(email === validEmail && password === validPassword){

        localStorage.setItem("neoUser", email);

        document.getElementById("loader").style.display = "block";

        setTimeout(()=>{
            window.location.href = "dashboard.html";
        },1500);

    } else {
        error.innerText = "Invalid credentials";
    }
}

    // SAVE SESSION
    localStorage.setItem("neoUser", email);

    document.getElementById("loader").style.display = "block";

    setTimeout(()=>{
        window.location.href = "dashboard.html";
    },1500);
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
        balance.innerText = "$250,000,000.00";
    } else {
        balance.innerText = "**************";
    }
}

/* NOTIFICATION */
function notify(){
    alert("New transaction received!");
}
function deposit(amount){
    let balance = document.getElementById("balance");

    let current = 250000000;
    current += amount;

    balance.innerText = "$" + current.toLocaleString();
}
