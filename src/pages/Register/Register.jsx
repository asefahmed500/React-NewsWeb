import { Link } from "react-router-dom";

import { useContext } from "react";

import NavBar from "../../Shared/NavBar/NavBar";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log(name,photo,email,password)

        // create user 
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-3xl text-center" >Please Register  </h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleRegister}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            placeholder="text"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text"
                            name="photo"
                            placeholder="Photo url"
                            className="input input-bordered"
                            required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center ">Already  have a account ?  <Link className="text-blue-600 font-bold"
                    to="/login">login</Link></p>

            </div>
        </div>
    )
};

export default Register;