import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2 className="text-red-500">Something Went Wrong</h2>
      <h2 className="text-red-500">{error.statusText || error.message}</h2>
      <h3 className="text-3xl ">
        Please <button onClick={handleLogOut}>Sign Out</button> and Log back in.
      </h3>
    </div>
  );
};

export default DisplayError;
