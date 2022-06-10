import { useContext } from "react";
import { TextContext } from "./Wrapper";

//context used directly here allow to rerender only this component, not the parent component

const KidLangs = () => {
  const textContext = useContext(TextContext);
  return <p>{textContext.langs.eng}</p>
}


export default KidLangs;