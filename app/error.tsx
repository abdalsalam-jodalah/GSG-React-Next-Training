"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold">Something went wrong!</h2>
            <p className="mt-2">An error occurred. Please try refreshing the page.</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Refresh
            </button>
            <div className="mt-4">
                <Link href="/" className="text-blue-500 underline hover:text-blue-700">
                    Back to Tasks
                </Link>
            </div>
        </div>
    );
}
