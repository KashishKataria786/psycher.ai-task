'use client';

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { CalendarDays } from "lucide-react";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md flex items-center justify-between">
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 text-white font-semibold text-lg">
        <CalendarDays className="w-6 h-6" />
        <span>EventFlow</span>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-100 transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;

