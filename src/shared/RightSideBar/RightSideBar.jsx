import {Button, Typography} from "@material-tailwind/react";
import {FaFacebook, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import image1 from "../../assets/qZone1.png";
import image2 from "../../assets/qZone2.png";
import image3 from "../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-5">
        <Typography variant="h3">Login With</Typography>
        <Button
          variant="outlined"
          className="flex w-full items-center hover:bg-green-100"
        >
          <FaGoogle className="mr-3 text-red-300" />
          Google
        </Button>
        <Button
          variant="outlined"
          className="flex w-full items-center hover:bg-green-100"
        >
          <FaGithub className="mr-3 text-red-300" />
          Github
        </Button>
      </div>
      <div className="p-4 mb-5">
        <Typography variant="h3">Find Us On</Typography>
        <a
          className="p-4 flex items-center text-xl border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3" />
          Facebook
        </a>
        <a className="p-4 flex items-center text-xl border rounded-x" href="">
          <FaTwitter className="mr-3" />
          Twitter
        </a>
        <a
          className="p-4 flex items-center text-xl border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3" />
          Instagram
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 space-y-3 mb-5">
        <Typography variant="h3">Q Zone</Typography>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
