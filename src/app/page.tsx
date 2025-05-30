import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TechnologiesCarousel } from "@/components/ui/TechnologiesCarousel";
import { Avatar, Card, Tag } from "antd";
import { BiCalendar } from "react-icons/bi";
export default function Home() {
  return (
    <div className="mt-36 flex items-center flex-col gap-[300px] mx-52">
      <RetroGrid className="absolute top-0 left-0 w-full h-full" />

      <div className="flex h-[60vh] justify-center flex-col gap-10 items-center">
        <p className="text-9xl font-bold">M. Eleoterio</p>
        <AuroraText className="text-6xl font-bold">
          FullStack Developer
        </AuroraText>
      </div>

      <TechnologiesCarousel />

      {/* ABOUT ME */}
      <section>
        <TextAnimate
          className="text-5xl text-center mb-20 font-bold"
          animation="fadeIn"
          delay={0.5}
        >
          About me
        </TextAnimate>
        <div className="mx-36 flex justify-between flex-wrap items-center gap-20">
          <img
            className="border border-4 border-blue-500 rounded-full"
            width={350}
            src="https://placehold.co/200"
          />
          <div className="flex-1 text-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nihil similique quam, facere enim doloremque quos, debitis quas
              minima blanditiis, tempore voluptatem harum quisquam optio
              distinctio necessitatibus autem dolores? Laboriosam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Expedita nihil
              similique quam, facere enim doloremque quos, debitis quas minima
              blanditiis, tempore voluptatem harum quisquam optio distinctio
              necessitatibus autem dolores? Laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nihil similique quam, facere enim doloremque quos, debitis quas
              minima blanditiis, tempore voluptatem harum quisquam optio
              distinctio necessitatibus autem dolores? Laboriosam.
            </p>
            <div className="flex mt-5 gap-2">
              <Tag className="rounded-full" color="darkgreen" bordered={false}>
                Node.js
              </Tag>
              <Tag className="rounded-full" color="black" bordered={false}>
                Next.js
              </Tag>
              <Tag className="rounded-full" color="purple" bordered={false}>
                React
              </Tag>
              <Tag className="rounded-full" color="darkblue" bordered={false}>
                TypeScript
              </Tag>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <TextAnimate
          className="text-5xl text-center mb-20 font-bold"
          animation="fadeIn"
          delay={0.5}
        >
          Experiences
        </TextAnimate>
        <div className="flex gap-5 w-full">
          {/* CARD */}
          <div className="rounded-lg w-full p-10 bg-gradient-to-r from-purple-900 to-blue-800">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">FullStack Developer</h1>
              <div className="border items-center flex p-2 gap-2 border-white rounded-full">
                <BiCalendar />
                <p>2024 - Current</p>
              </div>
            </div>
            <p>CreativeCode</p>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
}
