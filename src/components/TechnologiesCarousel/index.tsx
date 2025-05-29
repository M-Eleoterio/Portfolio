import { AiOutlineAntDesign } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaJenkins } from "react-icons/fa";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiNodejsLine,
  RiTailwindCssLine,
  RiBootstrapLine,
  RiHtml5Line,
  RiCss3Line,
} from "react-icons/ri";
import { SiExpress, SiJest } from "react-icons/si";
import {
  TbBrandDocker,
  TbBrandMysql,
  TbBrandTypescript,
  TbBrandJavascript,
} from "react-icons/tb";
import { Marquee } from "../magicui/marquee";

export const TechnologiesCarousel = () => {
  return (
    <Marquee className="w-1/2">
      <RiReactjsLine size={40} color="#61DAFB" />
      <RiNextjsLine size={40} />
      <SiExpress size={40} />
      <RiNodejsLine size={40} color="#339933" />
      <TbBrandDocker size={40} color="#2496ED" />
      <RiTailwindCssLine size={40} color="#38B2AC" />
      <RiBootstrapLine size={40} color="#7952B3" />
      <TbBrandMysql size={40} color="#4479A1" />
      <FaGitAlt size={40} color="#F05032" />
      <BiLogoPostgresql size={40} color="#336791" />
      <TbBrandTypescript size={40} color="#007ACC" />
      <TbBrandJavascript size={40} color="#F7DF1E" />
      <RiHtml5Line size={40} color="#E34F26" />
      <RiCss3Line size={40} color="#1572B6" />
      <AiOutlineAntDesign size={40} color="#1890ff" />
      <FaJenkins size={40} color="#D24939" />
      <SiJest size={40} color="#C21325" />
    </Marquee>
  );
};
