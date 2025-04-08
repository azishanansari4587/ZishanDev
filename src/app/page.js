import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import { BackgroundLinesDemo } from "@/components/BackgroundLine";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { NavbarDemo } from "@/components/Navbar";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/footer";
import { CompareDemo } from "@/components/CompareDemo";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <BackgroundLinesDemo />
      <InfiniteMovingCardsDemo/>
      <CompareDemo/>
      <HeroParallaxDemo/>
      <BackgroundBeamsDemo/>
      <Footer/>
    </>
  );
}
