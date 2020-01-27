import React, { Component } from 'react';
// import animate from './animate'
import '../styles/technologies.css'
import Title from './Title'
import data from '../data/data'
class Technologies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display:"onMouseOver={(ev) => this.",
      technologia:["My experience as web developer contains of few hobby sites such as portfolio for dj, car selling forum (backend(PHP,SQL)). I am capable of using React, es6, CSS3, html5, googleAPIs, gatsby, stripe, firebase and some SEO to build portfolio or eccomerce sites","Python is language of tinkering, I like to learn it because it gives huge possibilities. I created a communicator relaying on database(tkinter&psycopg2)","C language is used for arduino programming where I made quadcopter and some flashy gifts for family"],
    }
  }
  alert1 = (a) => {
    this.setState({display:this.state.technologia[a]})
    // animate(a)
  }
    render() {
      return (
        <div>
        <Title title="Technologies that I'm capable of going in a minute "/>
        <div className="Technologies" style={{animation:`fadeIn 1s`}}>
              <div>
                <p onMouseOver={(ev) => this.alert1(0)} style={{color:"rgb(210,170,122)"}}>Javascript</p>
                <p onMouseOver={(ev) => this.alert1(1)} style={{color:"rgb(127,188,76)"}}>Python</p>
                <p onMouseOver={(ev) => this.alert1(2)} style={{color:"rgb(78,128,173)"}}>C</p>
              </div>
              <div>
                <p>{this.state.display}</p>
              </div>
            <div className="Background"></div>
        </div>
        </div>
        )
    }
  }

export default Technologies
