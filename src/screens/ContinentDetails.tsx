import React from "react";
import { Link, useParams } from "react-router-dom";

import { useGetContinentByIdQuery } from "../gql/generated/schema";
import Loader from "../components/Loader";

const ContinentsDetails = () => {
  const { id = "" } = useParams();

  const { data } = useGetContinentByIdQuery({
    variables: { code: id },
    skip: typeof id === "undefined",
  });
  const continent = data?.continent;

  if (!continent || !id) return <Loader />;

  const { name, countries } = continent;

  return (
    <div>
      <div> Details Continent </div>
      {continent && (
        <>
          <div>{name}</div>
          <ul>
            {countries.map((country) => (
              <Link to={`/country/${country.code}`}>
                <li key={country.code} className="font-semibold">
                  <div>{country.name}</div>
                  <div>{country.emoji}</div>
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ContinentsDetails;
