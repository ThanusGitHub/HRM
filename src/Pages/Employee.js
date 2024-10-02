import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import AllEmployees from './AllEmployees';  // Correct component name
import Appointment from './Appointment';  // Correct component name

const Employee = () => {
    return (
        <Tab.Container defaultActiveKey="AllEmployees"> {/* Corrected defaultActiveKey */}
            <Card>
                {/* Horizontal Navbar in Card.Header */}
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="AllEmployees">All Employees</Nav.Link>  {/* Corrected eventKey */}
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Appointment">Appointment</Nav.Link>  {/* Corrected eventKey */}
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* All Employees Content */}
                        <Tab.Pane eventKey="AllEmployees">  {/* Corrected eventKey */}
                            <AllEmployees />  {/* Corrected component name */}
                        </Tab.Pane>

                        {/* Appointment Content */}
                        <Tab.Pane eventKey="Appointment">  {/* Corrected eventKey */}
                            <Appointment />  {/* Corrected component name */}
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Employee;
