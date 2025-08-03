import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <h1>Welcome {user?.firstName}!</h1>
      <p>Your email: {user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
}
