import Content from "../components/header/content";
import { getAllFigures } from "../dummy_data";
import FigureList from "../components/Lasting_Figuers/Figure_List";
import { readDataFromLocalStorage } from "../dummy_data";
import { useEffect, useState } from "react";
function HomePage() {
 
  const [dummy_data ,  setDUMMY_DATA] = useState([]);
useEffect(() => {
  readDataFromLocalStorage(setDUMMY_DATA);
},[])
  return (
    <section>
      <Content />
      <FigureList figures={dummy_data} />
    </section>
  );
}
export default HomePage;
