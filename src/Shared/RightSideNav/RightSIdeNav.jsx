import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const RightSIdeNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Login With  </h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle /> login with google


                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub /> login with Gihub


                </button>

            </div>

            <div className="p-4  mb-6 ">
                <h2 className="text-3xl"> find us on  </h2>
                <a href="" className="flex p-4 items-center border rounded-t-lg ">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook </span>

                </a>
                <a href="" className="flex p-4 items-center border rounded-t-lg ">
                    <FaSquareXTwitter  className="mr-3"/>
                    <span>X </span>

                </a>
                <a href="" className="flex p-4 items-center border rounded-t-lg ">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram </span>

                </a>

            </div>

            {/* Q Zone */}

            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Q Zone  </h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
                
            </div>

        </div>






    );
};

export default RightSIdeNav;