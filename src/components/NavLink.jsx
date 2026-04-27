"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName == href;

  return (
    <div>
      <Link
        className={`${isActive&& "border-b-2 border-red-600" }}`}
        href={href}
      >
        { children}
      </Link>
    </div>
  );
};

export default NavLink;
