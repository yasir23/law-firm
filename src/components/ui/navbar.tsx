"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";

import React, { useState } from "react";
import HamburgerIcon from "../HamburgerIcon";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};




const handleSignIn = () => {
  console.log("Sign In clicked");
  // Add sign-in logic here
};

const handleSignUp = () => {
  console.log("Sign Up clicked");
  // Add sign-up logic here
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu open state
  };

  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="bg-white/30 backdrop-blur-lg shadow-lg border-b top-0 border-white/10 relative border border-transparent dark:bg-black dark:border-white/[0.2] bg-gray shadow-input flex items-center justify-between px-8 py-6">
      {/* Hamburger Icon for mobile view */}
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo on the left */}
        <div className="flex flex-shrink-0 items-center space-x-4">
          <Image src="/WhatsApp_Image_2024-10-05_at_6.53.18_PM-removebg-preview.png" width={50} height={50} alt="logo" />
          <h1 className="font-bold text-xl sm:text-lg lg:text-3xl"><a href="/">Awaz Association of Justice®</a></h1>
        </div>

        <div className="hidden md:flex space-x-4 items-center"> 

          {children}



{/* <div className="space-x-4">
  <Button label="Sign In" onClick={handleSignIn} variant="primary" />
  <Button label="Sign Up" onClick={handleSignUp} variant="secondary" />
</div> */}
 </div>       
         
</div>
        
  
          <div className="md:hidden">
<Sheet>
        <SheetTrigger>
            <HamburgerIcon onClick={toggleMenu} />
          
          </SheetTrigger>

 <SheetContent>
  <SheetHeader>
            <SheetTitle>AI Sport</SheetTitle>
            <SheetDescription>
          <div> 

          {children}

</div>

{/* <div className="space-x-4">
  <Button label="Sign In" onClick={handleSignIn} variant="primary" />
  <Button label="Sign Up" onClick={handleSignUp} variant="secondary" />
</div> */}


 </SheetDescription>
          </SheetHeader>
          </SheetContent>



</Sheet>

</div>
          

    
         


    </nav>
  );
};


export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
