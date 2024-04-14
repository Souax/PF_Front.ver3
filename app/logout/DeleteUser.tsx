import { getServerSession } from "next-auth";
import authOptions from "../../src/api/auth/[...nextauth]";
import DeleteButton from "@/app/logout/DeleteButton";
import Link from "next/link";

type SessionType = {
  user: {
    email: string;
  };
};

const DeleteUser = async () => {
  const session = (await getServerSession(authOptions)) as SessionType | null;

  if (session && session.user && session.user.email) {
    return <DeleteButton email={session.user.email} />;
  }
  return (
    <Link
      href="/"
      className="px-6 py-2 bg-gray-700 text-white text-lg rounded-md shadow-lg transition hover:bg-gray-600"
    >
      ホームに戻る
    </Link>
  );
};

export default DeleteUser;
