import AuthClientButton from "@/app/components/api/auth/AuthClientButton";
import { NextPage } from "next";
import { Session, getServerSession } from "next-auth";
import React from "react";

const LoginPages: NextPage = async () => {
  const session: Session | null = await getServerSession();
  return (
    <div>
      <AuthClientButton session={session} />
    </div>
  );
};

export default LoginPages;
