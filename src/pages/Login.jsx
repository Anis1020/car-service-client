import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    loginUser(email, password)
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
      <form onSubmit={handleLogin} className="card-body">
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
          <input className="btn btn-primary" type="submit" value="Login Now" />
        </div>
      </form>
      <div className="text-center mx-10">
        <button className="btn btn-accent btn-block">Google Login</button>
        <h2>
          Already Have an account?
          <Link to={"/register"} className="btn btn-link">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
