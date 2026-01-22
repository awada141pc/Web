import About from "../components/about/about";
import HomeSynopsis from "../components/homesynp/homesynopsis";
import LatestPost from "../components/latest/LatestPost";
import Slider from "../components/slider/slider";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div>
      <div className="Bookshelf ">
        <h1 className="uppercase text-3xl font-bold tracking-widest underline decoration-[#BDB76B] decoration-7 underline-offset-[1em]">
          Novels
        </h1>
        <div className="p-5">
          <Slider />
        </div>
      </div>

      <LatestPost />
      <HomeSynopsis />
      <About />
    </div>
  );
};
export default Homepage;
