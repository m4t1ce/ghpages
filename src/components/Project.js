import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Project extends React.Component {
    render() {
        return(
            <Card style={{ width: '18rem',marginBottom: '1vh',backgroundColor:'rgb(41,44,47)' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{this.props.project.title}</Card.Title>
                <Card.Text>
                {this.props.project.description}
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
            </Card>
        )
    }
  }
  export default Project
