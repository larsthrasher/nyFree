import React, { Component } from 'react';
import axios from "axios";

class EditModal extends Component {
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
    await axios.put(`${URL}/posts/${this.props.id}`, newItem)
    this.clearForm();
    this.props.closeModal()
  }


  render() {
    const { contactText, titleText, imageText, descriptionText } = this.state;
    return(
        <div className="editModal">
            <div class="modal-content">
                <button class="close" onClick={this.props.closeModal}>close</button>
                <p>Some text in the Modal..</p>
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
                    <input className="handleSubmit" type="submit" onClick={this.handleSubmit} value="Edit Post"/>
                  </form>
                </div>

            </div>
        </div>
    )
  }
}

export default EditModal;
