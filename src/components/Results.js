import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {reslts:''}
  }

  componentDidMount() {
    axios.get(`https://openaccess-api.clevelandart.org/api/artworks/?q=${this.props.searchTerm}`)
    .then(res => {
      console.log(res.data)
      this.setState({results: res.data})
    })
  }
  
  render() { 
    return (
      <div>
        <h1>placeholder</h1>
      </div>
    );
  }
}
 
export default Results;