import React from "react";
import { useParams } from "react-router-dom";

import { useGetCountryByIdQuery } from "../gql/generated/schema";
import Loader from "../components/Loader";

const Country = () => {
  const { id = "" } = useParams();

  const { data } = useGetCountryByIdQuery({
    variables: { code: id },
    skip: typeof id === "undefined",
  });
  const country = data?.country;

  if (!country || !id) return <Loader />;

  const { name, capital, emoji } = country;

  return (
    <div>
      <div> Details Pays </div>
      {country && (
        <>
          <div>{name}</div>
          <ul>
            <li key={country.code} className="font-semibold">
              <div>Capital :{capital}</div>
              <div>{emoji}</div>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Country;
