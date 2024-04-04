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
          <h1 className="text-3xl font-poppins">News Coming Soon...</h1>
        </div>
        <div className="border">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
