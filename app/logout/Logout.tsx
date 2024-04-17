import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "../components/api/auth/[...nextauth]";
import LogoutButton from "@/app/logout/LogoutButton";

const Logout = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <LogoutButton />
    </div>
  );
};

export default Logout;
