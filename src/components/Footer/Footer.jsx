import image from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="lg:container lg:mx-auto w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
        <img src={image} alt="" className="w-60" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <span className="block my-8 border-t border-blue-gray-50" />
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
        © 2024 The Dragon News
      </p>
    </footer>
  );
};

export default Footer;
