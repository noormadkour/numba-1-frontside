import { useEffect, useState } from "react";
import { getAllDocks } from "../../services/dockServices"; 

export const Docks = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((docksArray) => setDocks(docksArray));
  }, []);

  return (
    <div className="docks-container flex flex-col">
      <div className="dock-list flex flex-col self-center">
        <h2 className="dock-header text-2xl font-bold justify-center self-center">Docks</h2>
        {docks.map((dock) => {
          return (
            <div className="dock self-center justify-center box-border p-[10px]" key={dock.id}>
              {dock.location}
            </div>
          );
        })}
      </div>
    </div>
  );
};
