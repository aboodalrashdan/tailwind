// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Home from "/public/icon/hoe.svg";
import { Container } from "../Container";
import { linkSections } from "../../constant/linkSections"; 

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="pt-8 pb-20 bg-gray-800 w-full">
        <Container>
          <hr className="border-t border-gray-200 opacity-60" />
          <div className="flex flex-col gap-2  md:flex-row md:justify-between">
            <div className="flex flex-col items-start gap-2">
              <Home />
              <p className="text-white md:w-72">
                Your natural candle made for your home and for your wellness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 mt-14 md:gap-x-12 md:grid-cols-3">
              {linkSections.map((section) => (
                <div className="flex flex-col gap-2" key={section.id}>
                  <p className="mb-6 text-greenline">{section.title}</p>
                  {section.links.map((link) => (
                    <Link href={link.href} key={link.id}>
                      <p className="text-white cursor-pointer">{link.name}</p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full p-6 bg-gray-300">
        <p className="text-gray-600 text-center">©Candleaf All Rights Reserved.</p>
      </div>
    </footer>
  );
};
