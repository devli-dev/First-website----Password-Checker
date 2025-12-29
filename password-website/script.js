function checkPassword(){
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");
    const tips = document.getElementById("tips");

    tips.innerHTML = ""; // delete old tips

    let score = 0;
    
    if (password.length >= 8) score++;
    else addTip("At least 8 letters!");

    if (/[0-9]/.test(password)) score++;
    else addTip("At least 1 number!");

    if (/[A-Z]/.test(password)) score++;
    else addTip("At least one capital letter!");

    if (/[!@#%><&*+-]/.test(password)) score++;
    else addTip("Add special characters!");

    //Show result
    if (score <= 1) result.textContent = "very weak";
    else if (score === 2) result.textContent = "weak";
    else if (score === 3) result.textContent = "good";
    else result.textContent = "strong";

    //Show tips
    function addTip(text) {
        const li =
        document.createElement("li");
        li.textContent = text;
        tips.appendChild(li);
    }
}

console.log("JS geht");