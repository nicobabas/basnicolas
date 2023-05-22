import React from "react";
import { useGetContinentsQuery } from "../gql/generated/schema";

const Home = () => {
  const { data } = useGetContinentsQuery();
  const continents = data?.continents;

  return (
    <div>
      <h1> Liste des Continents </h1>
      <div className="h-10">
        {continents?.map((continent) => (
          <div key={continent.code}>{continent.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Home;
