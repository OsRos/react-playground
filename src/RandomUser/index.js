import React, { useCallback, useEffect, useState } from "react";
import { getUserData } from "./service";
import UserCard from "./UserCard";
import ErrorBoundary from "../ErrorBoundary";

const RANDOMUSER_DATA_URL = "https://randomuser.me/api/";

/**
 *
 * @param {*} param0
 * Simple Axios implementation with below features
 * 1.)Fetch data from the random user api
 * 2.)Display the user data in an MUI card component
 * 3.)Transform the response to log the response data
 */
export default function RandomUser({ dataURL = RANDOMUSER_DATA_URL }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData(dataURL).then(
      (data) => {
        // console.log(data)
        setData(data);
      },
      (error) => console.log(`Handled in client ${error}`)
    );
  }, []);

  const getUserProps = useCallback(() => {
    const { results } = data;
    const user = results.find((r) => true);
    const { title, first, last } = user.name;
    const name = `${title} ${first} ${last}`;
    const { large } = user.picture;
    const gender = user.gender;
    return { name, gender, thumbnail: large };
  }, [data]);

  return (
    data && (
      <ErrorBoundary>
        <UserCard {...getUserProps(data)}></UserCard>
      </ErrorBoundary>
    )
  );
}
