import { createContext, useState } from "react";
const MyRealContext = createContext("MainContext");
const MyContext = ({ children }) => {
  let [User, SetUser] = useState(-1);

  return (
    <>
      <MyRealContext.Provider value={{ User, SetUser }}>
        {children}
      </MyRealContext.Provider>
    </>
  );
};
export default MyContext;
export { MyRealContext };
