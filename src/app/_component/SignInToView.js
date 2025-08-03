import { SignInButton } from "@clerk/clerk-react";
import { LockKeyhole } from "lucide-react";

const SignInToView = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <LockKeyhole className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In Required</h2>
      <p className="text-gray-600 mb-6">
        You must be signed in to view this page or access this feature.
      </p>
      <SignInButton mode="modal">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition">
          Sign In
        </button>
      </SignInButton>
    </div>
  );
};

export default SignInToView;
