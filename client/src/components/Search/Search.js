import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

// default state
const initialState = {
  title: "",
  category: "",
  content: "",
};

const api = "/posts";

const Search = ({ searchItems }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(initialState);

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
    axios.post(api, state);
    // restore the form input to default with no data
    setState({ title: "", category: "", content: "" });
    // close modal after sucessfull submission
    handleClose();
  }

  return (
    <div className="d-flex justify-content-between align-itemms-center">
      <div>
        <Button variant="secondary" onClick={handleShow}>
          Create New Post
        </Button>
      </div>
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
                Post
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Search;
