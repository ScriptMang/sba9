import { useState } from 'react'
import type {TaskStatus} from './types/index.ts' 
import type {Task} from './types/index.ts'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskForm from './components/TaskForm/TaskForm'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([{
        id: "001",
        title: "Task 1",
        description: "lorem ipsum 1.",
        status: "pending",
        priority: "low",
        dueDate: "12/31/2023"
  }])


 // copy of the tasklist prior to filtering 
   const [sortedTasks, setSortedTasks] = useState<Task[]>(tasks);

let tempTask: Task = {
        id: "000",
        title: "",
        description: "",
        status: "pending",
        priority: "low",
        dueDate: "12/31/2023"
}


const addTaskHandler= (taskId: string, newTask: Task) => {
  console.log("Adding the new task: ", newTask, `Has the task id of ${taskId}`);
  setTasks([...tasks, newTask])
  setSortedTasks([...tasks, newTask])
}

  const taskStatusHandler = (taskId: string, newStatus: TaskStatus) => {
  const targetTaskId = Number(taskId)
  console.log("Inside the task handler the str_id to num_id is: ", targetTaskId);
  if (tasks !== null) {
    setTasks(prevTasks =>
      (prevTasks as Task[]).map(task =>
        Number(task.id) === targetTaskId ? {...task, status: newStatus} : task
      )
    );
    console.log(`whats the value of targetTaskId: ${targetTaskId}`);
    console.log(`changed task status style to ${tasks[targetTaskId-1].status}`);
  } else {
    console.log("couldn't change the task's status style, its value is null.")
  }
}



const deleteTaskHandler =  (taskId: string) => {
    const targetId = Number(taskId);
    console.log(`Remove a task with id: ${taskId}`);
    setTasks(prevTasks => (prevTasks as Task[]).filter(task => Number(task.id) !== targetId));
    setSortedTasks(prevTasks => (prevTasks as Task[]).filter(task => Number(task.id) !== targetId))

}



 
  // filters tasks based on status or priority changes for each of their drop downs 
  const filterTaskHandler = (filter: { status?: TaskStatus
    priority?: 'low' | 'medium' | 'high';}) =>{
      // console.log("Prior to filter checks...")
      // console.log(`TaskStatus  for the filter is: ${filter.status}`);
      // console.log(`Task priority  for the filter is: ${filter.priority}`);

      if (filter?.status as string === "All Statuses" || filter?.priority as string === "All Priorities" ) {
         setTasks(sortedTasks);
        console.log("Resetting the TaskList.")
      } else if (filter?.status !== undefined){
          setTasks(sortedTasks.filter(task => task.status === filter.status));
      } else if (filter?.priority !== undefined) {
         setTasks(sortedTasks.filter(task => task.priority === filter.priority));
      } else {
        console.error("Both the task status and the task priority passed are undefined")
      }
  }

  return (
    <div id= "taskDashboard">
     <TaskForm  task={tempTask} onFormSubmit={addTaskHandler}/>
     <div id="taskListContainer">
      <h1>Task List</h1>
       <TaskFilter onFilterChange={filterTaskHandler}/>
       <TaskList tasks={tasks} onStatusChange={taskStatusHandler} onDelete={deleteTaskHandler}/>
     </div>
    </div>
  )
}

export default App
