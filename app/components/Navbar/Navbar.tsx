"use client";

import { useState } from "react";
import Link from "next/link";
import User from "/public/icon/user.svg";
import Shop from "/public/icon/shopping.svg";
import Spn from "/public/icon/menu.svg";
import Candleaf from "/public/icon/cand.svg";
import { Container } from "../Container";
import { navLinks, menuLinks } from "../../constant/navLinks"; 

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full h-20 bg-white z-50 max-sm:h-[4.375rem]">
      <Container>
        <div className="flex items-center justify-between flex-row gap-2 mx-auto h-20">
          <Link href="/">
            <Candleaf />
          </Link>
          <nav className={`flex justify-between flex-row gap-2 w-[400px] max-md:hidden ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <Link
                key={link.id}
                className="cursor-pointer no-underline outline-2 outline-transparent outline-offset-2 text-black"
                href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex justify-between flex-row gap-8">
            <Link href="/cart">
              <Shop />
            </Link>
            <Link href="/profile">
              <User />
            </Link>
            <div className="md:hidden">
              <button
                className="inline-flex appearance-none items-center outline-2 outline-transparent outline-offset-2 bg-transparent p-0"
                onClick={toggleMenu}
              >
                <Spn width={30} height={30} />
              </button>
              {isMenuOpen && (
                <div className="visible min-w-max origin-top-right absolute inset-0 right-0 bottom-auto left-auto top-0 transform -translate-x-4 translate-y-16 z-10">
                  <div className="outline-2 outline-transparent outline-offset-2 text-inherit min-w-[14rem] p-2 z-10 rounded-lg border border-solid border-gray-300 bg-white shadow-sm origin-top-right opacity-100 visible">
                    {menuLinks.map(link => (
                      <Link
                        key={link.id}
                        className="no-underline text-inherit select-none flex w-full items-center text-left flex-shrink-0 outline-2 outline-transparent outline-offset-2 py-1.5 px-3 bg-white"
                        href={link.href}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
