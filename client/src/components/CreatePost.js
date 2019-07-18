import React, { Component } from "react";
import axios from "axios";


const URL = "http://localhost:3000";

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactText: "",
      titleText: "",
      imageText: "",
      descriptionText: ""
    }
  }
  handleChangeContact = e => {
    this.setState({ contactText: e.target.value })
  };

  handleChangeTitle = e => {
    this.setState({ titleText: e.target.value })
  };

  handleChangeImage = e => {
    this.setState({ imageText: e.target.value })
  };

  handleChangeDescription = e => {
    this.setState({ descriptionText: e.target.value })
  };

  clearForm = () => {
    this.setState({
      contactText: "",
      titleText: "",
      imageText: "",
      descriptionText: ""
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (
      !this.state.contactText.length ||
      !this.state.titleText.length ||
      !this.state.imageText.length ||
      !this.state.descriptionText.length
    ) {
      return alert("Enter some stuff");
    }
    const newItem = {
      contact: this.state.contactText,
      title: this.state.titleText,
      image: this.state.imageText,
      description: this.state.descriptionText
    }
    const resp = await axios.post(`${URL}/posts`, newItem);
    await this.props.onNewPostCreated();
    this.clearForm();
  }

  render(){
    const { contactText, titleText, imageText, descriptionText } = this.state;
    return (
      <div className="CreatePost">
        <form onSubmit={this.handleSubmit}>
          <input
            id="contact"
            onChange={this.handleChangeContact}
            value={contactText}
            placeholder="Contact Info"
          />
          <input
            id="title"
            onChange={this.handleChangeTitle}
            value={titleText}
            placeholder="Item Title"
          />
          <input
            id="image"
            onChange={this.handleChangeImage}
            value={imageText}
            placeholder="Image Address"
          />
          <input
            id="description"
            onChange={this.handleChangeDescription}
            value={descriptionText}
            placeholder="Item Description"
          />
          <input className="submit" type="submit" value="Add Post"/>
        </form>
      </div>
    )
  }
}

export default CreatePost;
