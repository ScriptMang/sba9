import type {TaskItemProps} from '../../types/index'
import type{TaskStatus} from '../../types/index'

function TaskItem({task, onStatusChange, onDelete}:TaskItemProps){
    
    
    return (
     <>
     <div id="taskContainer">
          <div id="taskTitleInfo1">
            <div id="taskTitle">
              <h3>{task.title}</h3>
            </div>
            <div id="taskItemOptions">
              <select
                defaultValue={task.status}
                onChange={(e) => {
                  onStatusChange(task.id, e.target.value as TaskStatus);
                }}
                style={ 
                        task.status === 'in-progress' ? { backgroundColor: "yellow", color: 'brown'} : 
                        task.status === 'pending' ? {color: "blue"}: 
                        task.status === 'completed' ? {color: "green"} : {color: "black"}
                      }
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </div>
          <p id="taskDescription">{task.description}</p>
          <div id="taskInfo2">
            
       {
         task.priority ==='low' ? <span style={{color: "green"}}>Priority: {task.priority}</span> : 
         task.priority ==='medium' ? <span style={{color: "orange"}}>Priority: {task.priority}</span> :
         task.priority ==='high' ? <span style={{color: "red"}}>Priority: {task.priority}</span> : null
       }
            <span>Due: {task.dueDate}</span>
          </div>
        </div>
     </>
    )
}

export default TaskItem