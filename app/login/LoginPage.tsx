import { NextPage } from "next";
import { Session, getServerSession } from "next-auth";
import React from "react";
import AuthClientButton from "../../src/pages/api/auth/AuthClientButton";

const LoginPages: NextPage = async () => {
  const session: Session | null = await getServerSession();
  return (
    <div>
      <AuthClientButton session={session} />
    </div>
  );
};

export default LoginPages;
