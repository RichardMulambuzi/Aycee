"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Container from "./Container";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { FiLogOut } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../type";
import { addUser, deleteUser } from "../redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";

const Navbar = () => {
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <nav
      className={`bg-bodyColor h-20 top-0 sticky z-50 ${
        isScrolled ? "fixed top-0 w-full bruh-bg" : ""
      }`}
    >
      <Container className="h-full flex items-center md:gap-x-5 justify-between space-between">
        <Link href="/">
          <div className="cursor-pointer duration-200">
            <Image
              src={logo}
              alt="Logo"
              width={74}
              height={100}
              className="h-120 w-120"
            />
          </div>
        </Link>
        <MobileMenu />
        <ul className="space-x-4 hidden md:flex sm:flex">
          <NavLinks />
        </ul>
        {!session && (
          <div
            onClick={() => signIn()}
            className="headerDiv cursor-pointer hidden md:flex sm:flex items-center justify-center"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        <Link href={"/cart"}>
          <div className="hidden md:flex sm:flex bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <IoMdCart className="text-2xl" />
            <p className="text-sm font-semibold">
              <FormattedPrice amount={totalAmt} />
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              {productData.length}
            </span>
          </div>
        </Link>
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full hidden md:flex sm:flex object-cover"
          />
        )}
        {orderData?.order?.length > 0 && session && (
          <Link
            href="/order"
            className="headerDiv px-2 gap-x-1 cursor-pointer hidden md:flex sm:flex"
          >
            <BsBookmarks className="text-2xl" />
            <p className="text-sm font-semibold">Orders</p>
          </Link>
        )}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer hidden md:flex sm:flex"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
