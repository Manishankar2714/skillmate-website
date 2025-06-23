import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  const userName = session?.user?.name;

  return (
    <>
      <Head>
        <title>Welcome to Skillmate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white p-6">
        
        {/* ✅ Skillmate logo above the heading */}
        <div className="mb-4">
          <Image
            src="/skillmate image.jpg"
            alt="Skillmate Logo"
            width={64}
            height={64}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          Welcome to <span className="text-black">Skillmate</span>
        </h1>

        <p className="text-center text-gray-600 max-w-xl mb-8">
          Skillmate connects mentors, creators, and professionals with aspiring learners and businesses to foster meaningful growth. Be your own brand — share knowledge, earn, and grow.
        </p>

        {status === "loading" ? (
          <p className="text-gray-500">Loading...</p>
        ) : session ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-green-800">
              Hi, {userName} 👋
            </p>
            <Link
              href="/dashboard"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </>
  );
}
