// src/components/CleanSection.tsx
import React from "react";
import Image from "next/image";
import Log from "/public/icon/true.svg";
import { Container } from "../Container";
import { listItems } from "../../constant/listItems";

export function CleanSection() {
  return (
    <div className="w-full bg-[#f7f8fa]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-around gap-2.5 pt-[120px] pb-[45px] px-4 md:px-0">
          <div className="flex flex-col items-center md:items-start gap-2.5 w-full md:w-auto text-center md:text-left">
            <h2 className=" text-[40px] font-medium leading-[1.33] md:leading-[1.2] w-full md:w-[350px]">
              Clean and fragrant soy wax
            </h2>
            <p className="text-greenline">Made for your home and for your wellness</p>

            <div className="mt-10 w-full max-w-[500px] md:hidden px-4 sm:px-[30px]">
              <Image
                src="/image/cub.png"
                alt="weoijfw"
                className="w-full h-auto"
                width={440}
                height={320}
                priority
              />
            </div>

            <ul role="list" className=" list-none mt-[45px] px-4 sm:px-0 text-left">
              {listItems.map((item) => (
                <li key={item.id} className=" mb-[10px]">
                  <Log className="inline" />
                  <span className="inline font-bold ml-[10px]">{item.title}</span>
                  <p className="inline">{item.description}</p>
                </li>
              ))}
            </ul>

            <button className="mt-10 bg-greenline text-white font-medium text-[20px] py-[14px] px-[50px] rounded-md">
              Learn more
            </button>
          </div>

          <Image
            className="hidden md:block max-w-[450px]"
            src="/image/cub.png"
            alt="weoijfw"
            width={390}
            height={315}
            priority
          />
        </div>
      </Container>
    </div>
  );
}
