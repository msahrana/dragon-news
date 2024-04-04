import {Button} from "@material-tailwind/react";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Button size="sm" color="red">
          Breaking News
        </Button>
      </div>
      <div>
        <Marquee pauseOnHover={true} speed={200}>
          <div>
            <Link className="mr-16" to="/">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
          </div>
          <div>
            <Link className="mr-16" to="/">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
          </div>
          <div>
            <Link className="mr-16" to="/">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
