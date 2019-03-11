import React, { Component } from 'react';



class Search extends Component {

  state = {
    term: ''
  };

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render(){
    return(
      <div className='search ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor="">Video Search: </label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }


}

export default Search;
