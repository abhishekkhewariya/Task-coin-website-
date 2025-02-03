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
const apiUrl = "https://script.google.com/macros/s/AKfycbzsbc2ONFXizP6BQuJVnZ7rPHzqJN2C2jnTouuTkixMp8a1zN4FuSlA7wOfLLdmc_RV/exec"; // आपका API URL

async function fetchTasks() {
  try {
    let response = await fetch(apiUrl);
    let tasks = await response.json();
    
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // पहले का डेटा हटाएं

    tasks.forEach(task => {
      let taskItem = document.createElement("li");
      taskItem.innerHTML = `<a href="${task.link}" target="_blank">${task.title}</a> - ${task.coins} Coins`;
      taskList.appendChild(taskItem);
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

window.onload = fetchTasks;
