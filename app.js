const screen = document.getElementById("result");
const historyList = document.querySelector(".history");

function addValueToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        const result = eval(screen.value);
        sendDataToHistory(screen.value, result);
        screen.value = result;
        updateHistoryUI();
    } catch (error) {
        screen.value = "Error";
    }
}

function sendDataToHistory(calculation, value) {
    const data = {
        calc: calculation,
        value: value,
    };

    let historyData = localStorage.getItem("calculation");
    historyData = historyData ? JSON.parse(historyData) : [];
    historyData.push(data);
    localStorage.setItem("calculation", JSON.stringify(historyData));
}

function updateHistoryUI() {
    let historyData = JSON.parse(localStorage.getItem("calculation"));
    historyList.innerHTML = "";
    historyData?.forEach((item, i) => {
        historyList.innerHTML += `<li>${i + 1}. ${item.calc} => ${item.value.toFixed(2)}</li>`;
    });
}

updateHistoryUI();
