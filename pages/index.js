import { getAllFigures } from "../dummy_data";
import FigureList from "../components/Lasting_Figuers/Figure_List";
import Content from "../components/header/content";
function HomePage() {
  const AllFaces = getAllFigures();
  return (
    <section>
      <Content/>
      <FigureList figures={AllFaces}/>
      
    </section>
  );
}
export default HomePage;
