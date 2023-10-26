import { useEffect, useState } from "react";
import { getAllShips } from "../../services/shipServices";

export const Ships = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => setShips(shipsArray));
  }, []);

  return (
    <div className="ships-container flex flex-col">
      <div className="ship-list flex flex-col self-center">
        <h2 className="ship-header text-2xl font-bold justify-center self-center">Ships</h2>
        {ships.map((ship) => {
          return (
            <div className="ship self-center justify-center box-border p-[10px]" key={ship.id}>
              {ship.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
