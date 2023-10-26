import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulerServices";

export const Haulers = () => {
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulersArray) => setHaulers(haulersArray));
  }, []);

  return (
    <div className="haulers-container flex flex-col">
      <div className="hauler-list flex flex-col self-center">
        <h2 className="hauler-header text-2xl font-bold justify-center self-center">Haulers</h2>
        {haulers.map((hauler) => {
          return (
            <div className="dock self-center justify-center box-border p-[10px]" key={hauler.id}>
              {hauler.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
