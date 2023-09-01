import { useContext } from "react";
import { MyRealContext } from "../Helpers/MainContext";
function useMainContext() {
  return useContext(MyRealContext);
}

export default useMainContext;
