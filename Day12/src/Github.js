import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
  const { name } = useParams();
  const [Profile, setProfile] = useState(null);

  async function fetchuser() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchuser();
  }, [name]);

  return (
    <>
      <h1>My Github Profile</h1>
      {Profile ? (
        <div>
          <img src={Profile.avatar_url} alt="profile" width="150" />
          <h2>{Profile.login}</h2>
          <p>{Profile.bio}</p>
          <p>Followers: {Profile.followers}</p>
          <p>Public Repos: {Profile.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
