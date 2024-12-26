import Image from "next/image";
import dmbLogo from "../../public/assets/dmbLogo.png";
import chevron from "../../public/assets/chevron.svg";

export const Footer = () => {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-6">
        <div className="w-15 h-15">
          <Image
            src={dmbLogo}
            alt="my logo"
            style={{ margin: "auto" }}
            width={60}
            height={74}
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">TLDR:</p>
          <p className="text-xs">I am David B.</p>
          <p className="text-xs">I do good work and cook food</p>
          <p className="text-xs">I love Sriracha</p>
        </div>
      </div>
      <a href="#nav" className="flex gap-1">
        <p className="text-xs">Back to Top</p>
        {/* TODO: add functionality to this */}
        <Image
          src={chevron}
          alt="return to top button"
          style={{ rotate: "180deg" }}
        />
      </a>
    </div>
  );
};
