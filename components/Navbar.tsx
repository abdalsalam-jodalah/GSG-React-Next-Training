import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{ backgroundColor: "oklch(0.588 0.158 241.966)" }}
            className="text-white"
        >
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
