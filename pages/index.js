import Content from "../components/header/content";
import { getAllFigures } from "../dummy_data";
import FigureList from "../components/Lasting_Figuers/Figure_List";
function HomePage() {
  const AllFaces = getAllFigures();

  return (
    <section>
      <Content />
      <FigureList figures={AllFaces} />
    </section>
  );
}
export default HomePage;
