import { getAllFigures } from "../dummy_data";
import FigureList from "../components/Lasting_Figuers/Figure_List";
function HomePage() {
  const AllFaces = getAllFigures();
  return (
    <section>
      <FigureList figures={AllFaces}/>
    </section>
  );
}
export default HomePage;
