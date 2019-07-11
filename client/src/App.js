import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const URL = "http://localhost:3000";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      apiLoaded: false,
      modal: false,
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const resp = await axios.get(`${url}`)
    console.log(resp);
    this.setState({
      posts: resp.data,
      apiLoaded: true
    });
  }
  deletePost = async e => {
    let id = e.target.id;
    await axios.delete(`${url}/posts/${id}`);
    this.getData();
  }
  render() {
    const {
      posts,
      apiLoaded,
      modal,
      contactText,
      titleText,
      imageText,
      descriptionText,
    } = this.state;
    return (
      <div>
      </div>
    )
  }
}

export default App;
