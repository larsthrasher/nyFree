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
        <h1>
          nyFree
          <span className="give">&nbsp;....hey New York, give it away!</span>
        </h1>
        <div className="form">
          <CreatePost onNewPostCreated = {this.props.onNewPostCreated} />
        </div>
      </div>
    );
  }
}

export default Header;
