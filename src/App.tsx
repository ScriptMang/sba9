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
}

 // copy of the tasklist prior to filtering 
  const preFilteredTaskList = tasks as Task[];

  // filters tasks based on status or priority changes for each of their drop downs 
  const filterTaskHandler = (filter: { status?: TaskStatus
    priority?: 'low' | 'medium' | 'high';}) =>{
      if (filter?.status !== undefined){
         setTasks(prevTasks => (prevTasks as Task[]).filter(task => task.status === filter.status));
      } else if (filter?.priority !== undefined) {
         setTasks(prevTasks => (prevTasks as Task[]).filter(task => task.priority === filter.priority));
      } else {
        setTasks(preFilteredTaskList);
        console.log("Both the task status and the task priority passed are undefined")
        console.log("Resetting the TaskList.")
      }
  }

  return (
    <>
    <TaskForm  task={tempTask} onFormSubmit={addTaskHandler}/>
    <TaskFilter onFilterChange={filterTaskHandler}/>
    <TaskList tasks={tasks} onStatusChange={taskStatusHandler} onDelete={deleteTaskHandler}/>
    </>
  )
}

export default App
