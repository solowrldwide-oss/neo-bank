function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(email === "" || password === ""){
        error.innerText = "Please fill all fields";
        return;
    }

    if(!email.includes("@")){
        error.innerText = "Enter a valid email";
        return;
    }

    // SHOW LOADER
    document.getElementById("loader").style.display = "block";

    setTimeout(()=>{
        window.location.href = "dashboard.html";
    },2000);
}

/* BALANCE */
function toggleBalance(){
    const balance = document.getElementById("balance");

    if(balance.innerText.includes("250")){
        balance.innerText = "**************";
    } else {
        balance.innerText = "$250,000,000.00";
    }
}

/* SIDEBAR */
function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("hide");
}

/* DARK MODE */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* NOTIFICATION */
function notify(){
    let popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(()=>{
        popup.style.display = "none";
    },2000);
}
