import Content from "../components/header/content";
import axios from "axios";
import FigureList from "../components/Lasting_Figuers/Figure_List";
import { readDataFromLocalStorage } from "../dummy_data";
import { useEffect, useState } from "react";
function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  async function getData() {
    setLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:4000/celebrities",
      });
      setData(res.data);
      console.log(res.data)
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    getData();
  },[])
  
  return (
    <section>
      <Content />
   <FigureList figures={data}/> 
    </section>
  );
}
export default HomePage;


// const [dummy_data, setDUMMY_DATA] = useState([]);
// useEffect(() => {
//   readDataFromLocalStorage(setDUMMY_DATA);
// }, []);
