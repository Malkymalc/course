import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class PostList extends Component{

  state = { posts: null };

  componentDidMount(){
    this.props.fetchPostsAndUsers();
  }

  renderList(posts){
    return posts.map(post => {
      return(
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      );
    });
  }

  render(){
    console.log(this.props.posts);
    const postList = this.renderList(this.props.posts);

    return(
      <div className='ui relaxed divided list'>
        {postList}
      </div>
    );
  }

}

const mapStateToProps = ({posts}) => {
  return {posts};
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
