class TaskRenderer {
    render(task) {
        throw new Error("Render method must be implemented.");
    }
}

class TravailTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="containerTask"><button class="deleteBtn">X</button><div class="task travail">${task.description}</div></div>`;
    }
}

class MaisonTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="containerTask"><button class="deleteBtn">X</button><div class="task maison">${task.description}</div></div>`;
    }
}

class DiversTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="containerTask"><button class="deleteBtn">X</button><div class="task divers">${task.description}</div></div>`;
    }
}


function getRenderer(category) {
    switch (category) {
        case 'travail': return new TravailTaskRenderer();
        case 'maison': return new MaisonTaskRenderer();
        case 'divers': return new DiversTaskRenderer();
        default: throw new Error("Unknown category.");
    }
}

function updateDisplay(tasks) {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const renderer = getRenderer(task.category);
        const taskElement = document.createElement('div');
        taskElement.classList.add('taskItem');
        taskElement.innerHTML = renderer.render(task);
        const deleteBtn = taskElement.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            deleteTask(index);
        });
        tasksContainer.appendChild(taskElement);
    });
}

function deleteTask(index) {
    taskModel.tasks.splice(index, 1);
    updateDisplay(taskModel.getTasks());
}
