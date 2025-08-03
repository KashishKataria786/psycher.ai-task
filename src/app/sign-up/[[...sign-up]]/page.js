import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white-50 px-4">
          <SignUp path="/sign-in" routing="/sign-in" />
     </div>
  )
}
