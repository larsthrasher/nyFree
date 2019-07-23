import React from "react";
import CreatePost from "./CreatePost.js";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="titulo">
          <h1>nyFree
            <br/>
            &nbsp;&nbsp;<span>Hey New York, give it away!</span>
          </h1>
        </div>
          <CreatePost
            onNewPostCreated = {this.props.onNewPostCreated}
            className = "createComponent"
          />
      </div>
    );
  }
}

export default Header;
