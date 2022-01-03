import { useState } from "react";
import { useRouter } from "next/router";
import { getFilteredFaces } from "../../dummy_data";
import FigureList from "../../components/Lasting_Figuers/Figure_List";
import { useEffect } from "react";
function FilteredFace(props) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState();
  const [filteredName, setFilteredName] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [filteredFaces , setFilteredFaces] = useState([]);



  useEffect(() => {
    if (router?.query?.slug) {
      setFilteredData(router.query.slug);
      setFilteredName(router.query.slug[0]);
      setFilteredCategory(router.query.slug[1]);
      setFilteredFaces(getFilteredFaces(router.query.slug[0] , router.query.slug[1]))
    }
  }, [router]);

  


  if (!filteredData) {
    return <p className="center">لطفا صبر کنید...</p>;
  }

  return (
    <div>
      <FigureList
        figures={filteredFaces}
        title={filteredName}
        face={filteredCategory}
       
      />
    </div>
  );
}
export default FilteredFace;
