import { Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import DetailsGlobal from "./components/details/DetailsGlobal";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
        <Route path="/view/" element={<DetailsGlobal />} />
      </Routes>
    </>
  );
};

export default Routing;
