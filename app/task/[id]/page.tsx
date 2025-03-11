"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
}

export default function TaskDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                if (!res.ok) {
                    router.replace("/not-found");
                    return;
                }
                const data = await res.json();
                if (!data.id) {
                    router.replace("/not-found");
                    return;
                }
                const priority =
                    data.id % 3 === 0
                        ? "High"
                        : data.id % 3 === 1
                            ? "Medium"
                            : "Low";

                setTask({ ...data, priority });
            } catch (error) {
                console.error(error);
                router.replace("/not-found");
            } finally {
                setLoading(false);
            }
        };
        fetchTask();
    }, [id, router]);

    if (loading) {
        return <p className="p-4">Loading Task Details...</p>;
    }

    if (!task) {
        return (
            <div className="p-4">
                <p>Task not found.</p>
                <Link href="/" className="text-blue-500 underline">
                    Back to Tasks
                </Link>
            </div>
        );
    }

    const iconSrc = task.completed ? "/check.png" : "/clock.png";

    const handleCopyTitle = () => {
        navigator.clipboard.writeText(task.title).then(() => {
            alert("Task title copied to clipboard!");
        });
    };

    return (
        <div className="bg-white rounded shadow p-6">
            <div className="flex items-center mb-4">
                <Image
                    src={iconSrc}
                    alt={task.completed ? "Completed" : "Pending"}
                    width={32}
                    height={32}
                    className="mr-2"
                />
                <h1 className="text-2xl font-bold">{task.title}</h1>
            </div>
            <p className="mb-2">
                Status:{" "}
                <span className={task.completed ? "text-green-600" : "text-red-600"}>
          {task.completed ? "Completed" : "Pending"}
        </span>{" "}
                — Priority: <span className="font-semibold">{task.priority}</span>
            </p>
            <button
                onClick={handleCopyTitle}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Copy Title
            </button>
            <div className="mt-4">
                <Link href="/" className="text-blue-500 underline hover:text-blue-700">
                    Back to Tasks
                </Link>
            </div>
        </div>
    );
}
