import BannerContent from "../BannerContent";

const Banner = () => {
  return (
    <div className="carousel w-full min-h-screen">
      <BannerContent></BannerContent>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
          <div className=" text-white p-4 space-y-3">
            <h1>this is a car service point</h1>
            <p>now if you need to service your can then contact us</p>
            <button className="btn btn-accent">Contact Us</button>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-4 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
          <div className=" text-white p-4 space-y-3">
            <h1>this is a car service point</h1>
            <p>now if you need to service your can then contact us</p>
            <button className="btn btn-accent">Contact Us</button>
          </div>
        </div>

        <div className="absolute flex  transform -translate-y-1/2 gap-4 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
