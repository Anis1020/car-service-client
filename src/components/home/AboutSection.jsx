import person from "../../assets/images/about_us/person.jpg";
import parse from "../../assets/images/about_us/parts.jpg";

const AboutSection = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="w-3/4 h-96 object-cover  rounded-lg shadow-2xl "
          />
          <img
            src={parse}
            className="w-2/3 h-726 absolute top-52 right-0 border-8 object-cover  rounded-lg shadow-2xl "
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">Box Office!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
