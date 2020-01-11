import "../styles/App.css"
import LinkedIn from "../images/LinkedIn.png"
import Git from "../images/git.png"
import Facebook from "../images/fb.png"
import React, { Component } from 'react';

class SocialMedia extends React.Component {
    render() {
    return (
        <div className="SocialMedia">
            <div ><a href="www.linkedin.com/in/mati-ce-01716b196"><img src={LinkedIn} alt="alt"></img></a></div>
            <div ><a href="https://github.com/m4t1ce"><img src={Git} alt="alt"></img></a></div>
            <div ><a href="https://www.facebook.com/mateusz.berserk.35"><img src={Facebook} alt="alt"></img></a></div>
        </div>
      );
    }
  }

export default SocialMedia