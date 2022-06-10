import React, { createContext } from "react";
import Kid from "./Kid";


//context is an alternative to composition
//it is useful when data is needed at different nesting levels, it allows to reduce unnecessary rendering of parent components by retrieving data by child components directly -> then props are not passed through all components until the target component
//reduces the serviceability of components


const text = {
  langs: {
    pl:
      "siema",
    eng:
      "hello"
  }
}


export const TextContext = createContext(text)

const Wrapper = () => {
  return <TextContext.Provider value={text}>
    <Kid />
  </TextContext.Provider>
}
export default Wrapper;