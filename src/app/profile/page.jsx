"use client";
import { UpdateProfile } from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center gap-4 py-10 mt-5">
        <Avatar className="h-20 w-20 rounded-full mx-auto">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted-foreground">{user?.email}</p>
        <UpdateProfile />
      </Card>
    </div>
  );
};

export default ProfilePage;
