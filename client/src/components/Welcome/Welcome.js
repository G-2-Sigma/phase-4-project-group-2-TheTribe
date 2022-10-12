import React from "react";

const Welcome = ({ user }) => {
  return (
    <div>
      {user ? (
        <h1 className="fw-lighter text-center sulphurPoint mt-4">
          Welcome {user.username} to TheTribe Blog
        </h1>
      ) : (
        <h1 className="fw-lighter text-center sulphurPoint mt-4">
          Please Login to see our exclusive blogs
        </h1>
      )}

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Welcome;
