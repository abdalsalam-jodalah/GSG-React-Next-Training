import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold">Task Not Found</h2>
            <p className="mt-2">The task you are looking for does not exist.</p>
            <div className="mt-4">
                <Link href="/" className="text-blue-500 underline hover:text-blue-700">
                    Back to Tasks
                </Link>
            </div>
        </div>
    );
}
