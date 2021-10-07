import React from 'react';
import { Container, Toast } from 'react-bootstrap';

export default class Dashboard extends React.Component {

    getText() {
        return ['Coca Cola Ltd.','Pepsi Co.','Sprite Co.'];
    }

    render() {
        return (
            <Container>
                <Toast>
                    <Toast.Body>{this.getText()[0]}</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Body>{this.getText()[1]}</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Body>{this.getText()[2]}</Toast.Body>
                </Toast>
            </Container>
        )
    }
} 