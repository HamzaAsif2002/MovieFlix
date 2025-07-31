import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-gray-700 h-screen flex flex-row flex-wrap justify-center items-center ">
      <div className=" w-[80%] flex flex-row flex-wrap justify-center items-center">
        <div className="w-full md:w-[50%] space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            EXPLORE THE LATEST IN MOVIE INDUSTRIES
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-300">
            Unlimited Movies, TV Shows & More.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Discover the top best movies and dramas with a catchy subtitle like{" "}
            <br />
            <span className="italic">
              "Your Ultimate Guide to Must-Watch Content."
            </span>
          </p>
          <NavLink to="/movies">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-800 transition rounded-full text-lg font-medium shadow-lg">
              Explore Now
            </button>
          </NavLink>
        </div>

        <div className="w-[50%] h-[500px] ">
          <img
            src="./movies.png"
            alt="movie.img"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};
