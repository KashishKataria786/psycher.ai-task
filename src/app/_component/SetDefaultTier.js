'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function SetDefaultTier() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;

    const userTier = user?.publicMetadata?.tier;

    if (!userTier) {
      fetch('/api/set-tier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tier: 'silver' }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Tier set:", data.message);
        })
        .catch((err) => {
          console.error("Error setting tier:", err);
        });
    }
  }, [user, isSignedIn]);

  return null; 
}
