import {Typography} from "@material-tailwind/react";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import LeftSideBar from "../../shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../../shared/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <BreakingNews></BreakingNews>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 border">
          <Typography variant="h2">News Coming Soon...</Typography>
        </div>
        <div className="border">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
