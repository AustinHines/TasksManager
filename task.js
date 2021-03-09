let userInput = prompt(`TASK MANAGER \n \n What would you like to do(Please enter one of the options below):\n "TASKS" - Displays all TASKS\n "NEW" - Add a new task \n "REMOVE" - Remove a task \n "CLOSE" - Close the task manager \n`).toUpperCase();
let New = prompt(`Please enter a new task`);

let newTask = New

while(userInput !== "TASKS" || "NEW" || "REMOVE" || "CLOSE"){
    prompt(`TASK MANAGER \n \n What would you like to do(Please enter one of the options below):\n "TASKS" - Displays all TASKS\n "NEW" - Add a new task \n "REMOVE" - Remove a task \n "CLOSE" - Close the task manager \n`).toUpperCase();
    break;
};



if (userInput == "CLOSE"){
    alert(`Thanks for using task manager`)
};

if (userInput == "TASKS"){
    alert("Charge MacBook" + "\n" + "Master JavaScript")
};

if (userInput == "NEW"){
    New;
}

if (userInput == "TASkS") {
    alert("Charge MacBook" + "\n" + "Master JavaScript" + "\n" + newTask)
}

