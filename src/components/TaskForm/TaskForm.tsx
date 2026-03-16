import type {TaskFormProps} from '../../types/index.ts'
import type {TaskStatus} from '../../types/index.ts'

function TaskForm({task, onFormSubmit}:TaskFormProps){

    return (
    <div id="taskForm">
     <h1>Task Form</h1>
     
     <label htmlFor="idInput">id: </label>
     <input id="idInput" type="text" onChange={(e)=>{ task.id = e.target.value; }}/>

     <label htmlFor="titleInput">title: </label>
     <input id="titleInput" type="text" onChange={(e)=>{ task.title =e.target.value; }}/>
     
     <label htmlFor="descriptionInput">description: </label>
     <input id="descriptionInput" type="text" onChange={(e)=>{ task.description =e.target.value; }}/>

     <label htmlFor="statusInput">status: </label>
     <input id="statusInput" type="text" onChange={(e)=>{ task.status = e.target.value as TaskStatus; }}/>
     
     <label htmlFor="priorityInput">priority: </label>
     <input id="priorityInput" type="text" onChange={(e)=>{ task.priority =e.target.value as 'low'|'medium'|'high'; }}/>

     <label htmlFor="dueDateInput">dueDate: </label>
     <input id="dueDateInput" type="text" onChange={(e)=>{ task.dueDate =e.target.value; }}/>

     <button onClick={()=>{
        console.log("The new task object is: ", task);
        onFormSubmit(task.id, task)
        }}>submit</button>
    </div>
)
}

export default TaskForm