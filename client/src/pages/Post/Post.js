import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Post = () => {
  const [post, setPost] = useState([]);

  const api = "/posts";

  useEffect(() => {
    fetch(api).then((r) => {
      if (r.ok) {
        r.json().then((post) => setPost(post));
      }
    });
  }, []);

  return (
    <div className="row d-flex align-items-center justify-content-center">
      {post.map(({ id, title, category, content }) => (
        <div className="col-sm-4 col-md-3 m-3" key={id}>
          <Card style={{ width: "19rem" }} className="post__card">
            <Card.Body>
              <Card.Title className="post__title">{title}</Card.Title>
              <Card.Subtitle className="my-2">
                <span className="post__category">{category}</span>
              </Card.Subtitle>
              <Card.Text className="post__content">{content}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Post;
