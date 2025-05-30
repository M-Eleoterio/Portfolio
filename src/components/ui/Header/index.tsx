import { AuroraText } from "@/components/magicui/aurora-text";
export const Header = () => {
  return (
    <header className="fixed left-0 mx-20 top-10">
      <p>
        <AuroraText className="font-bold text-3xl">M.</AuroraText> <br />{" "}
        <span className="font-thin text-xl">Eleotério</span>
      </p>
    </header>
  );
};
