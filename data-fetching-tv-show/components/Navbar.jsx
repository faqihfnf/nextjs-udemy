import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-950  text-white w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          TV Show Central
        </Link>
        <ul className="flex items-center space-x-4">
          <li className="hover:text-cyan-500 text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-cyan-500 text-lg">
            <Link href="/shows">Shows</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
