import {Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-4">
      <Typography variant="h3">All Categories: </Typography>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block ml-4 text-xl hover:bg-green-100"
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideBar;
