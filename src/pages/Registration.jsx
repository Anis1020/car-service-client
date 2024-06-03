import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Register Now"
          />
        </div>
      </form>
      <div className="text-center mx-10">
        <button className="btn btn-accent btn-block">Google Login</button>
        <h2>
          Already Have an account?
          <Link to={"/login"} className="btn btn-link">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Registration;
