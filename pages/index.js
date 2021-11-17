import Content from "../components/header/content";
import { getAllFigures } from "../dummy_data";
import FigureList from "../components/Lasting_Figuers/Figure_List";
import { useRouter } from "next/router";
function HomePage() {
  const AllFaces = getAllFigures();
  const router = useRouter();
  

  return (
    <section>
      <Content />
      <FigureList figures={AllFaces} />
    </section>
  );
}
export default HomePage;
