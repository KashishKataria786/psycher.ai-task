import { useAuth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/dist/types/server";



export async  function POST(){
    const {userId}  = useAuth();
    if(!userId){
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const { tier } = await req.json();
    const validTiers = ["free", "silver", "gold", "premium"];

    if (!validTiers.includes(tier)) {
    return new Response(JSON.stringify({ error: "Invalid tier" }), { status: 400 });
  }

  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      tier,
    },
  });

    return new Response(JSON.stringify({ message: `Tier set to ${tier}` }), { status: 200 });

}