import React, { Component } from 'react';

class EditModal extends Component {
  render() {
    return(
        <div className="editModal">
            <div class="modal-content">
                <span class="close" onClick={this.props.closeModal}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
  }
}

export default EditModal;
