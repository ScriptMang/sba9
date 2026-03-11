import type {TaskListProps} from '../../types/index'
import TaskItem from '../TaskList/TaskItem'
// export interface TaskListProps {
//     tasks: Task[];
//     onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//     onDelete: (taskId: string) => void;
// }

function TaskList({tasks, onStatusChange, onDelete}:TaskListProps) {
    
    const taskElems = tasks.map((task) => (<li key={task.id}>
      <TaskItem task= {task} onStatusChange={onStatusChange} onDelete={onDelete} />
     </li>));

    return (
        <>
        {taskElems}
        </>
    );
} 
export default TaskList