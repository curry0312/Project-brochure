import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Intro from "./Intro/Intro";
import News from "./News/News";

function Home() {
  return (
    <div>
      <Banner />
      <Intro />
      <AboutUs />
      <Features />
      <News />
    </div>
  );
}

export default Home;
