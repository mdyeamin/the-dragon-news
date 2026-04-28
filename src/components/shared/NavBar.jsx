"use client";

import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import NavLink from "../NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { ClockLoader } from "react-spinners";
import Image from "next/image";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex items-center justify-between px-8 py-4 container mx-auto">
      <div className="flex-1"></div>

      <ul className="flex items-center gap-6 text-gray-600 font-medium">
        <li className="hover:text-black transition-colors">
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className="hover:text-black transition-colors">
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li className="hover:text-black transition-colors">
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      <div className="flex-1 flex items-center justify-end gap-3">
        {isPending ? (
         
          <div className="flex items-center justify-center h-10 w-10">
            
            <ClockLoader size={20}/>
          </div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#403F3F]">Hi, {user.name}</span>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
              <Image
              width={20}
              height={20}
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={async () => await authClient.signOut()}
              className="bg-[#404040] text-white px-8 py-2 font-semibold rounded-sm hover:bg-black transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <HiOutlineUserCircle className="text-4xl text-black" />
            <Link href="/login">
              <button className="bg-[#404040] text-white px-8 py-2 font-semibold rounded-sm hover:bg-black transition-all">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
