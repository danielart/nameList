import React from 'react';

import NameList from './NameList.js'

export default class Container extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nameList : ['raul','juan','paco','kober'],
      secondNameList : ['francesc','driss','hector','dani'],
    }
    this.handleDeleteFirstName = this.handleDeleteFirstName.bind(this);
    this.handleDeleteSecondName = this.handleDeleteSecondName.bind(this);
  }

  handleDeleteFirstName(){
    var newNameList = this.state.nameList;
    newNameList.shift();
    this.setState({nameList : newNameList});
  };

  handleDeleteSecondName(){
    var newNameList = this.state.secondNameList;
    newNameList.shift();
    this.setState({secondNameList : newNameList});
  };

  render() {
    return (
      <div>
        <p>Listado de nombres</p>
        <NameList nameList={this.state.nameList} deleteFirstName={this.handleDeleteFirstName}/>
        <NameList nameList={this.state.secondNameList} deleteFirstName={this.handleDeleteSecondName}/>
      </div>
    );
  }
}
