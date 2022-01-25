import { Routes, Route} from "react-router-dom";
import { routing } from "./routing";
import { RouteType } from "../types/routing";

const Routing = () => {
  return (
    <Routes>
      {routing?.map(({ path, Component }: RouteType, index: number) => {
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default Routing;
