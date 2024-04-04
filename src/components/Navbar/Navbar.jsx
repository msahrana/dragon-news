import {Button} from "@material-tailwind/react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-center flex items-center justify-center">
      <div className="space-x-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="ml-6 lg:ml-48 flex">
        <Link to="/login">
          <Button color="amber" size="sm">
            Login
          </Button>
        </Link>
        <Link to="/signUp">
          <Button color="amber" size="sm" className="ml-4">
            SignUp
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
