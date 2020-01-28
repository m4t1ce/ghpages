import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Project extends React.Component {
    render() {
        return(
            <Card style={{ width: '30vw',height:'40vh',marginBottom: '1vh',backgroundColor:'rgb(41,44,47)' }}>
            {/* <Card.Img variant="top" src={this.props.project.img} /> */}
            <Card.Body>
                <Card.Title>{this.props.project.title}</Card.Title>
                <Card.Text style={{fontSize: '1.3vw'}}>
                {this.props.project.description}
                </Card.Text>
                <Button variant="dark" href={this.props.project.link}>Navigate to site</Button>
            </Card.Body>
            </Card>
        )
    }
  }
  export default Project
