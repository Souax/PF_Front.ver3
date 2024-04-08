import React from "react";
import Profile from "./Profile";
import { Session, getServerSession } from "next-auth";
import { NextPage } from "next";

const ProfilePage: NextPage = async () => {
  const session: Session | null = await getServerSession();
  return (
    <div>
      <Profile session={session} />
    </div>
  );
};

export default ProfilePage;
