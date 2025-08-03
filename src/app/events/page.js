"use client"

import { useAuth } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import SignInToView from "../_component/SignInToView";
import LoadingSpinner from "../_component/LoadingSpinner";
// import { useRouter } from "";

const events = () => {
    const router = useRouter();
  const { isLoaded, isSignedIn, userId, sessionId } = useAuth()
  if (!isLoaded) {
    return <LoadingSpinner/>
  }

  if (!isSignedIn) {
    return <SignInToView/>
  }
  return (
     <div>
      <h1>Event Listing</h1>
      <p>Only visible to authenticated users.</p>
    </div>
  )
}

export default events
