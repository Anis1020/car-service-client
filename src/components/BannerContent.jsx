const BannerContent = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        className="w-full"
      />
      <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
        <div className="text-white p-4 space-y-4">
          <h1 className="text-3xl">this is a car service point</h1>
          <p>now if you need to service your can then contact us</p>
          <button className="btn btn-accent">Contact Us</button>
          <button className="btn btn-outline ml-3">Contact Us</button>
        </div>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 gap-4 right-5 bottom-0">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerContent;
