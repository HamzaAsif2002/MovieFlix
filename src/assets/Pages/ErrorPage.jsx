import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const handleGoBack = () => {
    return navigate(-1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={handleGoBack}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
      >
        ← Go Back
      </button>{" "}
    </div>
  );
};
