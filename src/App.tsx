import { useState } from 'react'
import type {TaskStatus} from './types/index.ts' 
import type {Task} from './types/index.ts'
import TaskList from './components/TaskList/TaskList'

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

  return (
    <>
    <TaskList tasks={tasks} onStatusChange={taskStatusHandler} onDelete={deleteTaskHandler}/>
    </>
  )
}

export default App
