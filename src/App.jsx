import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import AboutCard from "./components/AboutUsCard";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <AboutCard />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
