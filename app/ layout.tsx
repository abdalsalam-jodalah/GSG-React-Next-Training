import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Task Tracker",
    description: "A Next.js 15 Task Tracker",
};

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold hover:opacity-90">
                    Task Tracker
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-8 py-8 mt-4 bg-white rounded shadow">
            {children}
        </main>
        </body>
        </html>
    );
}
