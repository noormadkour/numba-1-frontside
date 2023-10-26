import { Docks } from "../Docks/Docks";
import { Haulers } from "../Haulers/Haulers";
import { Ships } from "../Ships/Ships";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className=" mt-3 text-2xl bg-gray-600 w-[auto] self-center rounded-[10px] p-[10px] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
          All Ships, Haulers, and Docks
        </h1>
        <div className="table-container flex justify-around pt-10">
          <Ships />
          <Haulers />
          <Docks />
        </div>
      </div>
    </>
  );
};
