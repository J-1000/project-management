import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap' 
import login from '../services/api';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);

        const { username, password } = this.state;

        login(username, password).then(data => {
            console.log(data);
            if (data.message) {
                this.setState({
                    message: data.message
                })
            } else {
                this.props.setUser(data);
                this.props.history.push('/');
            }
        });
    }

    render() {
        return (
            <>
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                </Form.Group>
                {this.state.message && <Alert variant="danger"></Alert>}
                <Button type="submit">Login</Button>
            </Form>
            </>
        )
    }
}
