import React, { useState } from "react";
import { ITask } from "../../types.ts";
import "./form.css";

interface IProps {
    onSubmit: (task: ITask) => void;
}

const Form = (props: IProps) => {
    const [taskName, setTaskName] = useState("");
    const [isUrgent, setIsUrgent] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task: ITask = {
            taskName,
            isUrgent,
        };
        props.onSubmit(task);
        setTaskName("");
        setIsUrgent(false);
    };

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                placeholder="Enter task name..."
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <div>
                <label htmlFor="urgent">Urgent</label>
                <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                />
            </div>
            <input type="submit" value="Add Task" />
        </form>
    );
};

export default Form;
