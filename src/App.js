import React, { Component } from 'react'
import { Container, Form, Button, Row } from 'react-bootstrap'

export class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        address: "",
        bio: ""
      }
    }

    handleFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    handleLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleGender = (e) => {
        this.setState({ gender: e.target.value })
    }

    handleAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    handleBio = (e) => {
        this.setState({ bio: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, gender, address, bio } = this.state;
        const details = {
            firstName, lastName, email, gender, address, bio
        }
        console.log(details);
        return details;
    }

  render() {
      const { firstName, lastName, email, gender, address, bio } = this.state;
      const { handleFirstName, handleLastName, handleEmail, handleGender, handleAddress, handleBio, handleSubmit } = this;

    return (
      <div>
            <Container>
                <div className="text-center">
                    <h3 className="text-primary my-3">Profile</h3>
                </div>
                <Row>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={handleFirstName} placeholder="first name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onChange={handleLastName} placeholder="last name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={handleEmail} placeholder="email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select value={gender} onChange={handleGender} required>
                                    <option></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows={3} value={address} onChange={handleAddress} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bio">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} value={bio} onChange={handleBio} required />
                            </Form.Group>
                            <Button type="submit" className="w-100 mb-3">Submit</Button>
                        </Form>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </Row>
            </Container>
      </div>
    )
  }
}

export default App