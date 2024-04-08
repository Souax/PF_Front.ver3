import React from "react";
import Logout from "@/app/logout/Logout";
import Login from "@/app/login/Login";
import { Session } from "next-auth";

const AuthClientButton = ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <div>
          <p>ようこそ、 {session.user && session.user.name}さん</p>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
};

export default AuthClientButton;
