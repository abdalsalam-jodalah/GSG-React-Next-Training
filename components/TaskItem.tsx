import Image from "next/image";
import React from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
}

interface TaskItemProps {
    task: Task;
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "High":
            return "border-red-500";
        case "Medium":
            return "border-yellow-500";
        case "Low":
            return "border-green-500";
        default:
            return "border-gray-500";
    }
};

export default function TaskItem({ task }: TaskItemProps) {
    const iconSrc = task.completed ? "/check.png" : "/clock.png";

    return (
        <div
            className={`flex items-center p-4 border-l-4 ${getPriorityColor(
                task.priority
            )} bg-white rounded shadow hover:shadow-md transition-shadow duration-300`}
        >
            <Image
                src={iconSrc}
                alt={task.completed ? "Completed" : "Pending"}
                width={24}
                height={24}
                className="mr-4"
            />
            <div>
                <h2 className="text-xl font-semibold mb-1">{task.title}</h2>
                <p className="text-sm text-gray-600">
                    {task.completed ? "Completed" : "Pending"} — Priority: {task.priority}
                </p>
            </div>
        </div>
    );
}
