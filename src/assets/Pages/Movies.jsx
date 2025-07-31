import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../Card";

export const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const moviesdata = useLoaderData();

  const handleSelectChange = (e) => {
    navigate(`?q=${e.target.value}`);
  };

  const options = ["titanic", "avengers", "funny", "horror", "joker", "fight"];

  return (
    <>
      <div className="mb-8 flex justify-center items-center">
        <div className="relative">
          <select
            onChange={handleSelectChange}
            defaultValue={
              new URLSearchParams(location.search).get("q") || "titanic"
            }
            className="appearance-none w-60 px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            {options.map((title) => (
              <option key={title} value={title}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-[80%] flex content-center items-center m-auto">
        <ul className=" flex flex-wrap content-center items-center gap-6 mx-auto my-6">
          {moviesdata.Search.map((currMovie) => (
            <Card currMovie={currMovie} key={currMovie.imdbID} />
          ))}
        </ul>
      </div>
    </>
  );
};
