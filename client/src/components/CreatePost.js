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
  
}
