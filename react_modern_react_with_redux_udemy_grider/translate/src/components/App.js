import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends Component{

  state = {
    language: 'english',
    colour: ''
  };

  onLanguageChange = newLanguage => this.setState({language: newLanguage});

  render(){
    console.log('App: ', this.state.language);
    return(
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLanguageChange('english')}>USA</i>
          <i className='flag nl' onClick={() => this.onLanguageChange('dutch')}>Netherlands</i>
        </div>
        <ColourContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language} >
            <UserCreate />
          </LanguageContext.Provider>
        </ColourContext.Provider>
      </div>
    );
  }
}

export default App;
