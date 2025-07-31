import { useLoaderData } from "react-router-dom";
import { Card } from "./Card";

export const SingleMoviesDetail = () => {
  const moviesdata = useLoaderData();
  console.log(moviesdata);

  const { Actors, Country, Director, Released, Writer, Genre, Plot } =
    moviesdata;

  const spanClass = "font-bold text-gray-700 ";
  const divClass = "text-lg flex gap-5";
  return (
    <div className="w-[90%] h-fit flex flex-row flex-wrap m-auto items-center justify-center gap-8">
      <ul>
        <Card currMovie={moviesdata} key={moviesdata.imdbID} back={"true"} />
      </ul>
      <div className="bg-white shadow rounded-xl p-6 space-y-4 w-[70%]">
        <div className={divClass}>
          <span className={spanClass}>Actors:</span> {Actors}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Country:</span> {Country}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Director:</span> {Director}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Detail:</span> {Plot}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Released:</span> {Released}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Writer:</span> {Writer}
        </div>
        <div className={divClass}>
          <span className={spanClass}>Genre:</span> {Genre}
        </div>
      </div>
    </div>
  );
};
