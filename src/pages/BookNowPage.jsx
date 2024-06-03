import { Link } from "react-router-dom";

const BookNowPage = () => {
  // const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const userInfo = { name, email, date };
    console.log(userInfo);
  };

  return (
    <div className="w-[70%] mx-auto">
      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
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
        <div className="form-control mt-6">
          <Link to={"/"}>
            <input
              className="btn btn-primary"
              type="submit"
              value="Book Services"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookNowPage;
