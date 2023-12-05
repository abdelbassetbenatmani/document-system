"use client";
import { navigation } from "@/constant";
import Link from "next/link";
import { useState, useRef, useEffect, ElementRef } from "react";
import NavLink from "./NavLink";
import NavHeader from "./NavHeader";
import { ModeToggle } from "@/components/toggleMode";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef<ElementRef<"button">>();

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as Node;
      if (menuBtnEl.current && !menuBtnEl.current.contains(target))
        setState(false);
    };
  }, []);

  return (
    <header className="relative space-y-2 text-gray-900 ">
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />

      </div>
      <nav
        className={`pb-5 md:text-sm md:static md:block ${
          state
            ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900"
            : "hidden"
        }`}>
        <div className="custom-screen items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          
          <div
            className={`flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}>
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="toggleColor h-6 hvr-underline-from-center">
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <ModeToggle className="hidden md:block"/>
              <Link href="/sign-in" className="block toggleColor ">
                Sign in
              </Link>
              <NavLink
                href="/pricing"
                className="toggleColor flex items-center justify-center gap-x-1 text-sm font-medium group border border-gray-500 active:bg-gray-900 md:inline-flex pb-3">
                Start now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
