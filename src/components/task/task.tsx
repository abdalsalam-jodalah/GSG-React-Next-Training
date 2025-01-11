import './task.css';
import { ITask } from '../../types.ts';

interface IProps {
    taskData: ITask;
    onMarkImportant: () => void;
    onRemoveTask: () => void;
}

const Task = ({ taskData, onMarkImportant, onRemoveTask }: IProps) => {
    return (
        <div className={`task-wrapper ${taskData.isUrgent ? 'important' : ''}`}>
            <div className="task-info">
                <span className="task-title">{taskData.taskName}</span>
                <button className="mark-important" onClick={onMarkImportant}>
                    {taskData.isUrgent ? 'Mark as Normal' : 'Mark as Important'}
                </button>
            </div>
            <button className="remove-task" onClick={onRemoveTask}>
                Delete
            </button>
        </div>
    );
};

export default Task;
