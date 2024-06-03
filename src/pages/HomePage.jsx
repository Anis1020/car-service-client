import AboutSection from "../components/home/AboutSection";
import Banner from "../components/home/Banner";
import ServicesArea from "../components/home/ServicesArea";

const HomePage = () => {
  return (
    <div>
      {" "}
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesArea></ServicesArea>
    </div>
  );
};

export default HomePage;
