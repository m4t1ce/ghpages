import React, { Component } from 'react';

class Title extends React.Component {
    render() {
      return (
      <div className="Title" style={{animation:`fadeIn 0.7s`}}>
          <p>{this.props.title}</p>
      </div>
      );
    }
  }

export default Title