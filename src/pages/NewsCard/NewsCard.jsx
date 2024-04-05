import {Link} from "react-router-dom";

const NewsCard = ({singleNews}) => {
  const {title, image_url, details, _id} = singleNews;
  return (
    <div className="relative flex flex-col mt-6 p-3 rounded-xl w-full">
      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
      <div className="mb-3">
        <img src={image_url} alt="card-image" />
      </div>
      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}{" "}
          <Link to={`/news/${_id}`} className="text-blue-500 font-semibold">
            Read More...
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
      <hr />
      <hr />
    </div>
  );
};

export default NewsCard;
