import React, {
  PropTypes,
} from 'react';


export default class NameList extends React.Component {
  render() {

    return (

        <span>
          <ul>
            {this.props.nameList.map((name) =>
              <li key={name}> {name}</li>
            )}
          </ul>
          <button onClick={this.props.deleteFirstName}> Borrar primero </button>
        </span>

    );
  }
}

NameList.propTypes = {
  nameList : PropTypes.string,
  deleteFirstName: PropTypes.func
};

NameList.defaultProps = {};
