import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "../components/auth/[...nextauth]";
import LoginButton from "@/app/login/LoginButton";

const Login = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="py-[4rem]">
      <LoginButton />
    </div>
  );
};

export default Login;
