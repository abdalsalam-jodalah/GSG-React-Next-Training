import Task from "../task/task.tsx";
import './tasks-container.css';
import { ITask } from "../../types.ts";

interface IProps {
    tasks: ITask[];
    onToggleUrgency: (index: number) => void;
    onRemoveTask: (index: number) => void;
}

const TasksContainer = ({ tasks, onToggleUrgency, onRemoveTask }: IProps) => {
    return (
        <div className="container">
            {
                tasks.map((task, index) => (
                    <Task
                        key={`task-${index}`}
                        taskData={task}
                        onMarkImportant={() => onToggleUrgency(index)}
                        onRemoveTask={() => onRemoveTask(index)}
                    />
                ))
            }
        </div>
    );
};

export default TasksContainer;
