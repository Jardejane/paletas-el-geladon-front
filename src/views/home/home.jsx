import "./home.css";
import PaletaLista from "../../components/paleta-lista/paletaList";
import { NavBar } from "../../components/nav-bar/navBar";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}
export default Home;
