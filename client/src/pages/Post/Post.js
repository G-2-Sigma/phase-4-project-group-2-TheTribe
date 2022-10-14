import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Search from "../../components/Search/Search";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

const api = "/posts";

// default state
const initialState = {
  title: "",
  category: "",
  content: "",
};

const Post = ({ post }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [userId, setUserId] = useState(null);
  const [show, setShow] = useState(false);
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // object destructuring
  const { title, category, content } = state;

  // enable us to input data on the input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  // handle the form submission
  function handleSubmit(e) {
    e.preventDefault();

    axios.patch(`${api}/${userId}`, state);

    // restore the form input to default with no data
    setState({ title: "", category: "", content: "" });
    // close modal after sucessfull submission
    handleClose();
    setUserId(null);
  }

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

  const handleUpdate = (id) => {
    const singleUser = post.find((item) => item.id === id);
    setState({ ...singleUser });
    setUserId(id);
    setEditMode(true);
    handleShow();
  };

  // handle the delete operation
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this post?")) {
      axios.delete(`${api}/${id}`);
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
                  <div className="post__edit" onClick={() => handleUpdate(id)}>
                    <BsFillPencilFill />
                  </div>
                  <div
                    className="post__delete"
                    onClick={() => handleDelete(id)}
                  >
                    <BsFillTrashFill />
                  </div>
                  <Card.Body>
                    <Card.Title className="post__title">{title}</Card.Title>
                    <Card.Subtitle className="my-2">
                      <span className="post__category">{category}</span>
                    </Card.Subtitle>
                    <Card.Text className="post__content">{content}</Card.Text>
                  </Card.Body>
                  <button type="button" className="btn btn-success">
                    Reviews
                  </button>
                </Card>
              </div>
            ))
          : post.map(({ id, title, category, content }) => (
              <div className="col-sm-4 col-md-3 m-3" key={id}>
                <Card style={{ width: "19rem" }} className="post__card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className="post__edit"
                      onClick={() => handleUpdate(id)}
                    >
                      <BsFillPencilFill />
                    </div>
                    <div
                      className="post__delete"
                      onClick={() => handleDelete(id)}
                    >
                      <BsFillTrashFill />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="post__title">{title}</Card.Title>
                    <Card.Subtitle className="my-2">
                      <span className="post__category">{category}</span>
                    </Card.Subtitle>
                    <Card.Text className="post__content">{content}</Card.Text>
                  </Card.Body>

                  <button type="button" className="btn btn-success">
                    Reviews
                  </button>
                </Card>
              </div>
            ))}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h3 className="text-center">Create Your New Post</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPostTitle">
              <Form.Label className="form__label">Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImageLink">
              <Form.Label className="form__label">Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog category"
                name="category"
                value={category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label className="form__label">Content Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write you stories here"
              style={{ height: "200px" }}
              name="content"
              value={content}
              onChange={handleChange}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit" className="bgColor">
                {editMode ? "Update" : "Post"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Post;
