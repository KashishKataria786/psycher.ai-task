'use client';

import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const EventHomePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover & Book Amazing Events</h1>
          <p className="text-lg sm:text-xl mb-8">
            Browse through curated events near you and book your spot in seconds.
          </p>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <a href="/events">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Explore Events
              </button>
            </a>
          </SignedIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why EventFlow?</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center">
              <CalendarDays className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-xl font-medium">Easy Scheduling</h3>
              <p className="mt-2 text-sm text-gray-600">Quickly find and book events with a few clicks.</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-xl font-medium">Curated Locations</h3>
              <p className="mt-2 text-sm text-gray-600">Events happening at the best venues in your city.</p>
            </div>
            <div className="flex flex-col items-center">
              <Ticket className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-xl font-medium">Instant Booking</h3>
              <p className="mt-2 text-sm text-gray-600">Secure your seat instantly with our seamless system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-gray-500">
        © 2025 EventFlow. All rights reserved.
      </footer>
    </main>
  );
};

export default EventHomePage;
