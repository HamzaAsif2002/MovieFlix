import { NavLink, useNavigate } from "react-router-dom";

export const Card = ({ currMovie, back = "false" }) => {
  const { Poster, Title, imdbID } = currMovie;
  const navigate = useNavigate();

  const goBack = () => {
    return (
      <button className=" text-white p-2 w-[250px]" onClick={handleBack}>
        Go Back
      </button>
    );
  };
  const handleBack = () => {
    navigate(-1);
  };

  const watchNow = () => {
    return (
      <NavLink to={`/movies/${imdbID}`}>
        <button className=" text-white p-2 w-[250px] ">Watch Now</button>
      </NavLink>
    );
  };
  return (
    <li className="list-none w-[250px] h-[350px]  bg-gray-300 flex flex-col justify-between items-center drop-shadow-2xl my-15 mx-auto relative">
      <img
        src={Poster}
        alt={Title}
        className="w-[200px] h-[300px] hover:w-[250px] hover:h-[350px] transition-all duration-300 ease-in-out object-cover drop-shadow-2xl absolute z-100 bottom-[22%] "
      />

      <div className="text-center absolute bottom-0 ">
        <h4 className="font-semibold text-lg truncate w-[250px]">{Title}</h4>
        <div className="bg-gray-600  hover:bg-gray-700 transition ">
          {back === "false" ? watchNow() : goBack()}
        </div>
      </div>
    </li>
  );
};
