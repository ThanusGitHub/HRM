import React, { useState } from 'react';
import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
import ValueForm from './ValueForm';  // Ensure the path is correct based on your folder structure
import PaySlip from './PaySlip';  // Ensure the path is correct based on your folder structure


const Payroll = () => {
    const [payrunPeriod, setPayrunPeriod] = useState('');
    const [payrunType, setPayrunType] = useState('');

    const handleSave = () => {
        // Handle save logic here
        console.log('Payrun Period:', payrunPeriod);
        console.log('Payrun Generating Type:', payrunType);
    };

    const handleCancel = () => {
        // Handle cancel logic here
        setPayrunPeriod('');
        setPayrunType('');
    };

    

    return (
        <Tab.Container defaultActiveKey="defaultPayrun">
            <Card>
                {/* Horizontal Navbar in Card.Header */}
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="value">Value</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="payslip">Payslip</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* Default Payrun Content */}
                        <Tab.Pane eventKey="defaultPayrun">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">HRM</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Payroll</Breadcrumb.Item>
                                <Breadcrumb.Item active>Default Payrun</Breadcrumb.Item>
                            </Breadcrumb>

                            <Alert variant="info">
                                <Alert.Heading>How payrun works?</Alert.Heading>
                                <p>1. Pay run is applicable to generate pay slip for  employees </p>
                                <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
                            </Alert>

                            <Form>
                            <Form.Group controlId="payrunPeriod">
                                <Form.Label>Payrun Period</Form.Label>
                                <Form.Control
                                    type="text"  
                                    value={payrunPeriod}
                                    placeholder="Enter Payrun Period"  
                                    onChange={(e) => setPayrunPeriod(e.target.value)}  
                                />
                            </Form.Group>

                                <br>
                                </br>

                                <Form.Group controlId="payrunType">
                                    <Form.Label>Payrun Generating Type</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={payrunType}
                                        onChange={(e) => setPayrunType(e.target.value)}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="hourly">Hourly wise</option>
                                        <option value="salary">Monthly wise</option>
                                    </Form.Control>
                                </Form.Group>

                                <div className="mt-4">
                                    <Button variant="primary" onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button variant="secondary" className="ml-2" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Tab.Pane>

                       
                        {/* Value Content */}
                        <Tab.Pane eventKey="value">
                            <ValueForm /> {/* Include the ValueForm component */}
                        </Tab.Pane>

                        {/* Payslip Content */}
                        <Tab.Pane eventKey="payslip">
                             <PaySlip />  {/* Include the PaySlip component */}
                        </Tab.Pane>

                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Payroll;


