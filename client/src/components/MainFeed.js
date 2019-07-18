import React, { Component } from "react";
import axios from "axios";
import "../App.css";


class MainFeed extends Component {
  constructor(props){
    super(props);
  }

  mainFeed(){
    return this.props.posts.map(post => {
      return (
            <div className="post" key={post.id}>
                <h2 className="title">{post.title}</h2>
                <img alt={`Something for donation ${post.id}`} className="image" src={post.image} width="100%"/>
                <p className="description">{post.description}</p>
                <a href="#" className="contact">{post.contact}</a>
                <br/>
                <button className="delete" id={post.id} onClick={this.props.deletePost}>delete</button>
                <button className="edit" id={post.id}>edit</button>
            </div>
      );
    });
  }

  render() {
    return (
      <div className="mainFeed">
        {this.props.apiLoaded ? this.mainFeed() : <p>Loading...</p>}
      </div>
    );
  }
}

export default MainFeed;