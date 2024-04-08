import { Session, getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

interface DropdownButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DropdownButton: React.FC<DropdownButtonProps> = async ({
  children,
  onClick,
}) => {
  const session: Session | null = await getServerSession();
  return <button onClick={onClick} className="flex items-center"></button>;
};

export default DropdownButton;
