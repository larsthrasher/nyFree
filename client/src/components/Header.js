import React from "react";
import CreatePost from "./CreatePost.js";
import "../App.css";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="header">
          <h1>nyFree</h1>
          <CreatePost
            onNewPostCreated = {this.props.onNewPostCreated}
            className = "createComponent"
          />
      </div>
    );
  }
}

export default Header;
