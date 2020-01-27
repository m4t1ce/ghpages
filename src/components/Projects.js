import React, { Component } from 'react';
import data from '../data/data'
import Project from './Project'
class Projects extends React.Component {
    render() {

      return ( <div>
          <div>
                    {
                    data.projects.map(project =>{
                        return <Project key={project.title} project={project}/>
                    })
                    }
                </div>
      </div>
      )
  }}

export default Projects