const apiUrl = "YOUR_DEPLOYED_URL"; // यहाँ अपना Apps Script API URL डालें

fetch(apiUrl)
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById("task-list");

        tasks.forEach(task => {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.innerHTML = `
                <h3>${task.title}</h3>
                <a href="${task.link}" target="_blank">Complete Task</a>
                <p>Coins: ${task.coins}</p>
            `;
            taskDiv.onclick = () => addCoins(task.id, task.coins);
            taskList.appendChild(taskDiv);
        });
    });

function addCoins(taskId, coins) {
    alert(`You earned ${coins} coins!`);
}
