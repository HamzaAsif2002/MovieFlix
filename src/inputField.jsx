import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputField = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearchData = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
  };
  return (
    <div className="m-5 flex justify-center items-center gap-2 ">
      <form onSubmit={handleSearchData}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Movies..."
            onChange={(e) => setSearchText(e.target.value)}
            className="w-72 md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </form>
    </div>
  );
};
