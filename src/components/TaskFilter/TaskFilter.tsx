import type {TaskFilterProps} from '../../types/index.ts'


function TaskFilter({onFilterChange}:TaskFilterProps ){
    return (
        <div id="taskFilterContainer">
        <label htmlFor="statusFilter">Status</label>
        <select id="statusFilter" defaultValue="All Statuses" onChange={(e) => onFilterChange({status: e.target.value as TaskStatus})}>
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
            <option value="All Statuses">All Statues</option>
        </select>

        <label htmlFor="priorityFilter">Priority</label>
         <select  id="priorityFilter" defaultValue="All Priorities" onChange={(e) => onFilterChange({priority: (e.target.value as 'low'|'medium'|'high')})}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="All Priorities">All Priorities</option>
        </select>
        </div>
    )
}

export default TaskFilter