"use client";

import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function HomePage() {
  const { signOut, user } = useAuthenticator();

  return (
    <div>
      <h1>Welcome, {user?.username}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}