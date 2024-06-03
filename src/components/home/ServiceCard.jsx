const ServiceCard = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-64 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 200 ? description.slice(0, 159) : description}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;