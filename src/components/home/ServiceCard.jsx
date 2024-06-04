import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, description, img } = service;
  // console.log(service);
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
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
