let button = document.querySelector("#buttonClear")

window.addEventListener("DOMContentLoaded", () => {
    let storedData = JSON.parse(localStorage.getItem("scores")) || [];

    const tbody = document.querySelector("#scoreTable tbody");
    tbody.innerHTML = "";

    if (storedData.length === 0) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.colSpan = 2;
        td.textContent = "No scores stored.";
        td.style.textAlign = "center";
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
    }

    storedData.forEach(entry => {
        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = entry.name;
        tr.appendChild(tdName);

        let tdScore = document.createElement("td");
        tdScore.textContent = entry.score;
        tr.appendChild(tdScore);

        tbody.appendChild(tr);
    });
});

button.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});