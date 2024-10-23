import Image from "next/image";
import { NavbarDemo } from "@/components/NavBar"

import Footer from "@/components/Footer";
import { FlipWordsDemo } from "@/components/Flip"
import { InfiniteMovingCardsDemo } from "@/components/Infinite"
import { LayoutGridDemo } from "@/components/Grid"
import { StickyScrollRevealDemo } from "@/components/Sticky"
import { BackgroundLinesDemo } from "@/components/Lines"


export default function Home() {
  return (
    <div className="flex flex-col pt-28">
      
      
      <BackgroundLinesDemo/>
      <FlipWordsDemo/>
      <LayoutGridDemo/>
     
     
      
    </div>
  );
}
