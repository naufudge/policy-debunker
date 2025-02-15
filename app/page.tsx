import { LineStats } from "@/components/home/LineStats";
import NumberStats from "@/components/home/NumberStats";
import PieStats from "@/components/home/PieStats";
import Recent from "@/components/home/Recent";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col gap-10">
      <div>
        <h1 className="font-bold text-[1.5rem] text-white">Hello, Axwa!</h1>
        <div className="text-sm text-stone-400 mt-1 italic">
          Welcome to your Analytics Dashboard.
        </div>
      </div>

      <div className="text-white grid grid-cols-11 gap-6 xl:gap-10 h-screen">
        <div className="col-span-8 grid grid-cols-8 gap-6 xl:gap-10 h-fit">
          <div className="bg-[#4a4a4a] rounded-xl h-full bg-opacity-50 col-span-5">
            <LineStats heading="Employment to Population" />
          </div>

          <div className="bg-[#3E4EA5] rounded-xl h-full opacity-75 col-span-3">
            <PieStats />
          </div>

          <div className="bg-[#4a4a4a] rounded-xl h-[250px] bg-opacity-50 col-span-3">
            <NumberStats
            heading="Working Population"
            number={"411,112"}
            percentage={"12.5%"}
            />
          </div>

          <div className="bg-[#4a4a4a] rounded-xl h-[250px] bg-opacity-50 col-span-5">

          </div>
        </div>

        <div className="col-span-3 h-full">
          <div className="bg-[#4a4a4a] rounded-xl h-[600px] bg-opacity-50 col-span-4">
            <Recent />
          </div>

        </div>
      </div>
    </div>
  );
}
