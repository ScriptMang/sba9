import type {TaskFormProps} from '../../types/index.ts'

function TaskForm({onSubmit}:TaskFormProps){

    return (
    <>
     <label htmlFor="idInput">id: </label>
     <input id="idInput" type="text" onChange={(count, e)=>{ task.id = e.target.value + String(count+1); }}/>

     <label htmlFor="titleInput">title: </label>
     <input id="titleinput" type="text" onChange={()=>{}}/>
     
     <label htmlFor="descriptionInput">description: </label>
     <input id="descriptionInput" type="text" onChange={()=>{}}/>

     <label htmlFor="statusInput">status: </label>
     <input id="statusInput" type="text" onChange={()=>{}}/>
     
     <label htmlFor="priorityInput">priority: </label>
     <input id="priorityInput" type="text" onChange={()=>{}}/>

     <label htmlFor="dueDateInput">dueDate: </label>
     <input id="dueDateInput" type="text" onChange={()=>{}}/>

     <button onSubmit={()=>{}}>submit</button>
    </>
)
}

export default TaskForm