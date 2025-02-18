import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaUserCircle } from "react-icons/fa";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-10 bg-white shadow-sm font-sans">
      <nav className="flex justify-between items-center h-25">
        {/* Logo */}
        <Link href="/" className="logo-container">
          <Image
            src="/logo1.png"
            alt="logo"
            width={150} /* Adjusted size */
            height={60} /* Adjusted size based on original aspect ratio */
            className="logo"
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="text-red-600 hover:underline">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    className=""
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>
                    <FaUserCircle size={24} />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-blue-600 hover:underline">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
