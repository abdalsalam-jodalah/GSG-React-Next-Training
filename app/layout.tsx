import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
    title: "Task Tracker",
    description: "A Next.js 15 Task Tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
