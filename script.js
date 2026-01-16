function addTask() {
    alert("Add button clicked!");

    const task = document.getElementById("taskInput").value;
    const date = document.getElementById("dateInput").value;

    const li = document.createElement("li");
    li.textContent = task + " - " + date;

    document.getElementById("taskList").appendChild(li);
}
