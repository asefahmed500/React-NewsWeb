import { Link, useLocation, useNavigate } from "react-router-dom";

import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handlelogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)
        signIn(email, password)
       .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
       .catch(error => {
        console.error(error)
    })


    }




return (
    <div>
        <NavBar></NavBar>
        <h2 className="text-3xl text-center" >Please Login  </h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form onSubmit={handlelogin}
                className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                        required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center ">Dont have a account ?  <Link className="text-blue-600 font-bold"
                to="/register">Register</Link></p>

        </div>
    </div>
);
};

export default Login;