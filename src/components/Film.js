import React from 'react';

class Film extends React.Component {
  render(){
    return (
      <div className="film">
      <h5>{this.props.film}</h5>
      <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Film;
