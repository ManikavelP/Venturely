import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

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
            width={100}  /* Adjusted size */
            height={40}  /* Adjusted size */
            className="logo" 
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="text-red-600 hover:underline">
                  Logout
                </button>
              </form>

              <Link href={`/user/${session.id}`}>
                <span>{session?.user?.name}</span>
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
