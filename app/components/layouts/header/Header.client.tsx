import { Session, getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropdownMenu from "../../DropDown/DropDown";

const HeaderClient = async () => {
  const session: Session | null = await getServerSession();
  return (
    <>
      {session ? (
        // ログインしている場合、プロフィール画像を表示
        <div className="pt-[1.8rem]">
          <DropdownMenu>
            <Image
              width={40}
              height={40}
              src={
                session?.user && session.user.image ? session.user.image : ""
              }
              alt="profile"
              className="rounded-full cursor-pointer"
            />
          </DropdownMenu>
        </div>
      ) : (
        // ログインしていない場合、ログインテキストを表示
        <Link
          href="/login"
          className="ml-5 pt-[1.6rem] cursor-pointer hover:text-gray-700 text-lg"
        >
          ログイン
        </Link>
      )}
    </>
  );
};

export default HeaderClient;
