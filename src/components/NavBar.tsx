"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar";
import { cn } from "@/lib/utils"; // Assuming this is a utility for conditional class names
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/criminal">Criminal Services</HoveredLink>
            <HoveredLink href="/civil">Civil services</HoveredLink>
            <HoveredLink href="/cyber">Cyber services</HoveredLink>
            <HoveredLink href="/corporate">Corporate services</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact us</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
