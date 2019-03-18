import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends Component{

  state = { posts: null };

  componentDidMount(){
    fetchPosts();
  }

  render(){
    return(
      <div>
        Post List
      </div>
    );
  }

}

// const mapStateToProps = () => {
//   return {posts: posts};
// }

export default connect(null, { fetchPosts })(PostList);
