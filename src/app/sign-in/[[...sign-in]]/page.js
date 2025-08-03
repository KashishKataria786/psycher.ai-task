import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
  <div className="flex min-h-screen items-center justify-center bg-white-50 px-4">
      <SignIn path="/sign-in" routing="/events" />
 </div>
 )
}
