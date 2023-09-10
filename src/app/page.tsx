import React from "react";
import Link from "next/link";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 text-rose-300">
            <h1 className="text-3xl mb-8">Coming Soon</h1>
            <Link className="font-bold underline" href="/dev/">Playground View</Link>
        </main>
    );
};
