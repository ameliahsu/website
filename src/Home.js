import "./Styles.css";
import Socials from "./components/Socials.js";
import PageButton from "./components/PageButton";

function Home() {
  return (
    <div className="home">
      <header className="name font">
        <h1>mia hsu</h1>
      </header>
      <Socials />
      <PageButton image={"/img/cutedog.jfif"} offset={180} />
    </div>
  );
}

export default Home;
