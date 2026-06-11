function login(){
    window.location.href = "dashboard.html";
}

/* BALANCE TOGGLE */
function toggleBalance(){
    const balance = document.getElementById("balance");

    if(balance.innerText.includes("250")){
        balance.innerText = "**************";
    } else {
        balance.innerText = "$250,000,000.00";
    }
}

/* SIDEBAR TOGGLE */
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
