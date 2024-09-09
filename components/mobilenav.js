import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
export default async function Navbar() {
    const session = await getServerSession(authOption)
    const image = session?.user?.image
    return (
      <nav className="flex md:hidden text-black justify-between items-center p-4 bg-white shadow-sm fixed top-0 w-full z-10">
        <Link href={"/home"}>
          <h2 className='text-2xl'><span className="font-normal italic">Sprint</span><span className="font-bold">Earn</span></h2>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href={"/community"}>
            <button className="bg-cta text-white text-md font-semibold py-2 px-4 rounded-md ">
              Refer & Earn🎉
            </button>
          </Link>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Link href={"/settings"}>
              <Image src={image} width={20} height={20} alt='profile' className="w-full h-full object-cover" /> 
            </Link>
          </div>
        </div>
      </nav>
    );
  }