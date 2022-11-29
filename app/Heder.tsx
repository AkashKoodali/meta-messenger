import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { unstable_getServerSession } from 'next-auth/next';

async function Heder() {
  const session =  await unstable_getServerSession();

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <img
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            alt=""
            src={session.user?.image!}
          />
        </div>
        <div>
        <p className="text-blue-400">Logged in as:</p>
        <p className="font-bold text-lg">{session.user?.name}</p>
        </div>
       <LogOutButton/>
      </header>
    );


  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            alt="logo"
            height={10}
            width={50}
          />
          <p className="text-blue-400">Welcome to messenger</p>
        </div>

        <Link
          href={"/auth/signin"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
      
    </header>
  );
}

export default Heder;
