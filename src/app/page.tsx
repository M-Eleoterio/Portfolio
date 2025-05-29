import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TechnologiesCarousel } from "@/components/TechnologiesCarousel";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AiOutlineAlert } from "react-icons/ai";
import { RiNodejsLine } from "react-icons/ri";
export default function Home() {
  return (
    <div className="mt-36 flex items-center flex-col gap-[400px] mx-52">
      <RetroGrid className="absolute top-0 left-0 w-full h-full" />

      <div className="flex h-[60vh] justify-center flex-col gap-10 items-center">
        <p className="text-5xl font-bold">M. Eleoterio.</p>
        <AuroraText className="text-6xl font-bold">
          FullStack Developer
        </AuroraText>
      </div>

      <TechnologiesCarousel />

      <TextAnimate
        className="text-5xl font-bold"
        animation="fadeIn"
        delay={0.5}
      >
        Experiences
      </TextAnimate>
    </div>
  );
}
