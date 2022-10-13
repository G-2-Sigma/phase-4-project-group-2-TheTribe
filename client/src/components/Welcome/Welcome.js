import React from "react";
import Post from "../../pages/Post/Post";
import gif from "../../assets/images/pilui-pokui.gif";
import Badge from "react-bootstrap/Badge";

const Welcome = ({ user }) => {
  return (
    <div>
      {user ? (
        <>
          <h1 className="fw-lighter text-center sulphurPoint mt-4">
            Welcome {user.username} to TheTribe Blog
          </h1>
          <Post />
        </>
      ) : (
        <>
          <div className="text-center">
            <h1 className="fw-lighter sulphurPoint mt-4">
              <Badge bg="info">Please Login to see our exclusive blogs</Badge>
            </h1>
            <img src={gif} className="mt-5" alt="Please SignIn gif" />
          </div>
        </>
      )}
    </div>
  );
};

export default Welcome;
