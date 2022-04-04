window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task');
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if(!task) {
            alert('Please fill task before adding');
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add('content');
        
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);
        
        task_el.appendChild(task_content_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const button_edit = document.createElement("button");
        button_edit.classList.add("edit");
        button_edit.innerHTML = "EDIT";
        const button_delete = document.createElement("button");
        button_delete.classList.add("delete");
        button_delete.innerHTML = "DELETE";

        task_action_el.appendChild(button_edit);
        task_action_el.appendChild(button_delete);
        task_el.appendChild(task_action_el);
        list_el.appendChild(task_el);

        input.value = "";

        button_edit.addEventListener("click",() => {
            if(button_edit.innerText.toLowerCase() == "edit"){        
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                button_edit.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                button_edit.innerText = "Edit";
            }
        });

        button_delete.addEventListener("click", () => {
            if(confirm("Are you sure you want to delete")){
                list_el.removeChild(task_el)
            }
        });
    });
});