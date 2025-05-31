import { BiCalendar } from "react-icons/bi";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  content: React.ReactNode;
}
export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="rounded-lg w-full p-10 bg-gradient-to-r from-[#3d0037a2] to-[#000a35]">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <div className="border items-center flex p-2 gap-2 border-white rounded-full">
          <BiCalendar />
          <p>{props.date}</p>
        </div>
      </div>
      <p className="font-bold mb-5">{props.company}</p>
      {props.content}
    </div>
  );
};
