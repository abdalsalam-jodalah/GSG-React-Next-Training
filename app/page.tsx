import TaskItem from "../components/TaskItem";
import Link from "next/link";

async function getTasks() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        next: { revalidate: 60 },
    });
    const tasks = await res.json();
    return tasks.map((task: any) => ({
        ...task,
        priority:
            task.id % 3 === 0
                ? "High"
                : task.id % 3 === 1
                    ? "Medium"
                    : "Low",
    }));
}

export default async function HomePage() {
    const tasks = await getTasks();
    const completedCount = tasks.filter((task: any) => task.completed).length;
    const pendingCount = tasks.filter((task: any) => !task.completed).length;
    const inProgressCount = 0;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Tasks:</h1>
            <div className="mb-8 p-4 bg-gray-50 rounded shadow-sm flex space-x-8">
                <div>
                    <h2 className="font-semibold text-gray-600">Completed</h2>
                    <p className="text-xl text-green-600">{completedCount}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-gray-600">Pending</h2>
                    <p className="text-xl text-red-600">{pendingCount}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-gray-600">In Progress</h2>
                    <p className="text-xl text-yellow-600">{inProgressCount}</p>
                </div>
            </div>

            <ul className="space-y-4">
                {tasks.map((task: any) => (
                    <li key={task.id}>
                        <Link
                            href={`/task/${task.id}`}
                            className="block hover:opacity-90 transition-opacity"
                        >
                            <TaskItem task={task} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
