import { useRouter } from "next/router";
import { getFilteredFaces } from "../../dummy_data";
import FigureList from "../../components/Lasting_Figuers/Figure_List";
function FilteredFace(props) {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredName = filteredData[0];
  const filteredCategory = filteredData[1];
  const filteredFaces = getFilteredFaces();
  return <div>
      <FigureList figures={filteredFaces}/>
  </div>;
}
export default FilteredFace;
