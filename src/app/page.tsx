import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TechnologiesCarousel } from "@/components/ui/TechnologiesCarousel";
import { Avatar, Card, Tag } from "antd";
import { BiCalendar } from "react-icons/bi";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
export default function Home() {
  return (
    <div className="mt-36 pb-20 flex items-center flex-col gap-[300px] mx-52">
      <RetroGrid className="absolute top-0 left-0 w-full h-[90vh]" />

      <div className="flex h-[50vh] justify-center flex-col gap-10 items-center">
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
        <div className="flex flex-col gap-10 w-full">
          <ExperienceCard
            title="FullStack Developer"
            company="CreativeCode"
            date="2024 - Current"
            content={
              <p>
                During my time at Creative Code, I had the opportunity to learn
                and apply various technologies and methodologies used in
                professional environments. I deepened my understanding of SOLID
                principles and explored new tools and languages, such as
                TypeScript integrated with Next.js on the front end, building
                responsive, component-based websites aligned with the team's
                design system. <br /> On the back end, I advanced my skills with
                Node.js and Express by working with more robust project
                structures and implementing automated tests using Jest. I was
                also involved in configuring and managing CI/CD pipelines with
                Jenkins, which gave me a broader view of the continuous delivery
                process. Additionally, I improved my ability to model complex
                relational databases using PostgreSQL. <br />{" "}
                <span className="font-bold">Skills:</span> TypeScript, Next.js,
                Node.js, Express, PostgreSQL, NestJS, Ant Design, Tailwind CSS,
                Git, Agile Methodologies, Version Control
              </p>
            }
          />
          <ExperienceCard
            title="WorldSkills Competitor"
            company="SENAI"
            date="2023 - Current"
            content={
              <p>
                During my participation in WorldSkills, I had the opportunity to
                apply my skills in front-end development with React and back-end
                development with Laravel 11 through a series of high-level
                technical challenges. The state-level competition took place in
                Curitiba, bringing together participants from various regions of
                Paraná – Brazil. <br /> After months of intensive preparation, I
                was awarded the gold medal in the Web Design category, securing
                first place, and also received the Gabriel D’spindola Award,
                granted to the competitor with the highest overall score across
                all categories. <br /> Throughout the competition week, I
                tackled practical challenges such as UI/UX prototyping in Figma,
                building modern interfaces with React, and implementing complex
                backend features using Laravel 11. <br /> As a result of this
                performance, I am now qualified to represent the state of Paraná
                in the national stage of WorldSkills, where I will compete
                against the top Web Design competitors from across Brazil.{" "}
                <br />
                <span>Skills:</span> React, Laravel 11, JavaScript, PHP, Figma,
                UI/UX Design, HTML, CSS, Git, MySQL, Responsive Design, Web
                Standards, Version Control, Agile Methodologies
              </p>
            }
          />
        </div>
      </section>
    </div>
  );
}
