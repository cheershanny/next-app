"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loading from "./loading";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="bg-gray-800 px-5 py-5 text-white">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mx-5">
        Users
      </Link>
      <Link href="/products" className="mx-5">
        Products
      </Link>
      <Link href="/upload" className="mx-5">
        Upload
      </Link>
      <Link href="/register" className="mx-5">
        Register
      </Link>
      {status === "loading" && <Loading />}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mx-5">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div>
          {session.user!.name}{" "}
          <Link href="/api/auth/signout" className="ml-5">
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
