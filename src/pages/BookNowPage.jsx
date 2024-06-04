import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const BookNowPage = () => {
  const { user } = useContext(AuthContext);
  const serviceData = useLoaderData();
  const navigate = useNavigate();

  const { _id, title, price, img } = serviceData;

  // another way to single data fetch
  // const params = useParams();
  // const [service, setServices] = useState();
  // useEffect(() => {
  //   fetch(`http://localhost:5000/services/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //       // console.log(data);
  //     });
  // }, [params.id]);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const orderInfo = {
      customerName: name,
      email,
      serviceName: title,
      date,
      price,
      _id,
      img,
    };

    fetch(`http://localhost:5000/booking/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/booked");
      });
  };

  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-center text-2xl">Book a service</h1>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Service name"
              name="name"
              className="input input-bordered"
              required
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered"
              required
              defaultValue={"$ " + price}
            />
          </div>
        </div>
        <div className="form-control text-center mt-6">
          <input
            className="btn btn-primary w-full "
            type="submit"
            value="Order Now"
          />
        </div>
      </form>
    </div>
  );
};

export default BookNowPage;
