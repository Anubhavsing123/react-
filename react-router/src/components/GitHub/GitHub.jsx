import React from 'react'
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github followers: {data.followers}</p>
      <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInloader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user data");
  }
  return response.json();
};