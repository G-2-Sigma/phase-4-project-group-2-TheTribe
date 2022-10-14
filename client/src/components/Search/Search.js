import React from "react";

const Search = ({ searchItems }) => {
  return (
    <div className="d-flex justify-content-end align-itemms-center">
      <div></div>
      <div className="col-md-4">
        <form action="">
          <div className="blog__search">
            <input
              type="search"
              className="header-search-input"
              placeholder="Search blog post"
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
