import React from "react";
import ProfileEdit from "./ProfileEdit";
import { Session, getServerSession } from "next-auth";

const EditPage = async () => {
  const session: Session | null = await getServerSession();
  return (
    <div>
      <div className="flex justify-center pt-[4rem] pr-[13rem] text-[1.4rem] text-white">
        プロフィール編集
      </div>
      <ProfileEdit session={session} />
    </div>
  );
};

export default EditPage;
