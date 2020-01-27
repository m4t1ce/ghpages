import React, { Component } from 'react';
import data from '../data/data'
import Project from './Project'
import CardColumns from 'react-bootstrap/CardColumns'
class Projects extends React.Component {
    render() {

      return ( 
      <div className="Projects">
      <CardColumns>
                {
                    data.projects.map(project =>{
                    return <Project key={project.title} project={project}/>
                })
                }
      </CardColumns>
      </div>
      )
  }}

export default Projects