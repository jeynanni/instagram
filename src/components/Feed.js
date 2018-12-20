import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Feed extends Component {
    static propTypes= {
        accessToken: PropTypes.string
    }
    constructor (props) {
        super(props)
            this.state = {
             media: []
             }
   }
   componentDidMount() {
       this.fetchMedia()
   }
   async fetchMedia() {
       const response = await fetch("https://api.instagram.com/v1/users/self" + "/media/recent/?access_token=" + this.props.accessToken);
       const posts = await response.json();
       this.setState({media: posts.data});
   }
   
  render() {
    return (
      <div className="Feed">
      {this.state.media.map((item,index) =>(<div><img src={item.images.standard_resolution.url}/></div>))}
      ciao sono il feed
      </div>
    );
  }
}

