import React from "react";
import { useGetContinentsQuery } from "../gql/generated/schema";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useGetContinentsQuery();
  const continents = data?.continents;

  return (
    <div>
      <h1> Liste des Continents </h1>
      <div className="h-10">
        {continents?.map((continent) => (
          <Link to={`/continent/${continent.code}`}>
            <h3 key={continent.code} className="font-semibold">
              <div>{continent.name}</div>
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
