let button = document.querySelector("#buttonSubmit")
let nameIN = document.querySelector("#inputName")
let scoreIN = document.querySelector("#inputScore")

button.addEventListener("click", () => {
    let nameInput = nameIN.value.trim();
    let scoreInput = scoreIN.value.trim();
    if (!nameInput || !scoreInput) 
    {
        alert("INVALID INPUT");
        return;
    }
    let storedData = JSON.parse(localStorage.getItem("scores")) || [];
    storedData.push({ name: nameInput, score: scoreInput });
    localStorage.setItem("scores", JSON.stringify(storedData));
    window.location.reload();
});
