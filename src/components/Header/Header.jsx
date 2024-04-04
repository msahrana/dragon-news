import img from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-2 mt-5">
      <img className="mx-auto" src={img} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
