import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesArea = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2>services</h2>
        <h1 className="text-2xl">Our Services Area</h1>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div> */}
    </div>
  );
};

export default ServicesArea;
