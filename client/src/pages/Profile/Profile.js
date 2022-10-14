import React, { useEffect, useState } from "react";
import avatar from "../../assets/images/avatar.png";

const api = "/me";
const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(api).then((r) => {
      if (r.ok) {
        r.json().then((user) => setProfile(user));
      }
    });
  }, []);

  const { username, email, bio } = profile;

  // const profil = profile.map(({item}) => <div>{item.username}</div>);
  console.log(profile);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="user text-center">
            <div className="profile">
              <img
                src={avatar}
                className="rounded-circle"
                width="80"
                alt="profile__pic"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h4 className="mb-0">{username}</h4>
            <span className="text-muted d-block mb-2">{email}</span>

            <span >{bio}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
