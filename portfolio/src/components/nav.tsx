import Image from "next/image";
import Rooster from "../../public/rooster";
import SrirachaBottle from "../../public/SrirachaBottle";

export default function Nav() {
  return (
    <div className="flex flex-row items-center justify-between bg-white p-5">
      <div className="flex flex-row gap-3 items-center">
        <Rooster />
        <span className="text-xl text-redSriracha">David Botos</span>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <div className="flex px-3 py-1 border-2 border-graySriracha">
          <span className="text-graySriracha">Let&apos;s Build</span>
        </div>
        <SrirachaBottle />
      </div>
    </div>
  );
}
