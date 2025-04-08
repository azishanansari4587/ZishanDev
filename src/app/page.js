import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import { BackgroundLinesDemo } from "@/components/BackgroundLine";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { NavbarDemo } from "@/components/Navbar";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";
import { CompareDemo } from "@/components/CompareDemo";
import { GlowingEffectDemoSecond } from "@/components/GlowingEffectDemo";
import { Skills } from "@/components/Skills";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
export default function Home() {
  return (
    <>
      <BackgroundLinesDemo className="relative inset-0"/>
      <InfiniteMovingCardsDemo/>
      <CompareDemo/>
      <HeroParallaxDemo/>
      <Skills/>
      {/* <AppleCardsCarouselDemo/> */}
      <ThreeDMarqueeDemo/>
      <BackgroundBeamsDemo/>
      <Footer/>
    </>
  );
}
