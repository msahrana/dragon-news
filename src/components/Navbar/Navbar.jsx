import {Button} from "@material-tailwind/react";
import {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="text-center flex items-center justify-center">
      <div className="space-x-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/signUp">SignUp</NavLink>
      </div>
      <div className="ml-6 lg:ml-48 flex">
        {user ? (
          <div className="flex">
            <p className="w-10">
              <img className="rounded-full" src={user?.photoURL} />
            </p>
            <p className="mx-2 p-2 rounded">{user?.displayName}</p>
            <p className="mx-2 p-2 rounded">{user?.email}</p>
            <Button onClick={handleLogOut} color="amber" size="sm">
              LogOut
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button color="amber" size="sm">
              Login
            </Button>
          </Link>
        )}
        {/* <Link to="/signUp">
          <Button color="amber" size="sm" className="ml-4">
            SignUp
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
