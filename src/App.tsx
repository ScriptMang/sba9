import { useState } from 'react'
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

  return (
    <>
    <TaskList tasks={tasks} onStatusChange={()=>{}} onDelete={()=>{}}/>
    </>
  )
}

export default App
