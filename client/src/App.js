import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainFeed from "./components/MainFeed.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"



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
    const resp = await axios.get(`${URL}`)
    console.log(resp);
    this.setState({
      posts: resp.data,
      apiLoaded: true
    });
  }
  deletePost = async e => {
    let id = e.target.id;
    await axios.delete(`${URL}/posts/${id}`);
    this.getData();
  }

  showModal = () => {
    this.setState({modal:true})
  }

  closeModal = () =>{
    this.setState({modal:false})
  }



  render() {
    const {
      posts,
      apiLoaded,
      modal
    } = this.state;
    return (
      <div>
        <Header onNewPostCreated={this.getData}/>
        <MainFeed
          className="mainFeed"
          posts={posts}
          apiLoaded={apiLoaded}
          deletePost={this.deletePost}
          showModal={this.showModal}
          closeModal={this.closeModal}
          modal={modal}
          editPost={this.editPost}
        />
        <br/>
        <Footer/>
      </div>
    )
  }
}

export default App;
