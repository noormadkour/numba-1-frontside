import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Ships } from "./components/Ships/Ships";
import { Haulers } from "./components/Haulers/Haulers";
import { Docks } from "./components/Docks/Docks";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/haulers" element={<Haulers />} />
        <Route path="/docks" element={<Docks />} />
        {/* all other views go here so NavBar remains on top */}
      </Route>
    </Routes>
  );
}

export default App;
