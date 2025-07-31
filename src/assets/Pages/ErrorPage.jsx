import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>{error.data}</h1>
      {/* <NavLink to="/">
        <button>Back To Home Page</button>
      </NavLink> */}
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  );
};
