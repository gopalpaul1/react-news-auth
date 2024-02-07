import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                if(result.user) {
                    alert('SignIn successfully')
                    //navigate after login
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.log(error)
            })


    }
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-4xl font-bold mt-8">Login page</h1>

      <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        <p className="mt-4">Don't have an Account Please? <span className="text-purple-700 font-bold"><Link to='/register'>Register</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
