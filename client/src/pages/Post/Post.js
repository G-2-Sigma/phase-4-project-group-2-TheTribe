import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Search from "../../components/Search/Search";

const Post = ({ post }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // search filter
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = post.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(post);
    }
  };
  return (
    <>
      <Search searchItems={searchItems} />

      <div className="row d-flex align-items-center justify-content-center">
        {searchInput.length > 1
          ? filteredResults.map(({ id, title, category, content }) => (
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
            ))
          : post.map(({ id, title, category, content }) => (
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
    </>
  );
};

export default Post;
