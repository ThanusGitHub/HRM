import React, { useState } from 'react';
import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';

const PaySlip = () => {
    const [employeeID, setEmployeeID] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeBankDetails, setEmployeeBankDetails] = useState('');

    const handleGeneratePaySlip = () => {
        // Handle pay slip generation logic here
        console.log('Employee ID:', employeeID);
        console.log('Employee Name:', employeeName);
        console.log('Employee Bank Details:', employeeBankDetails);
    };

    const handleCancel = () => {
        // Reset the form fields
        setEmployeeID('');
        setEmployeeName('');
        setEmployeeBankDetails('');
    };

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="#">HRM</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Payroll</Breadcrumb.Item>
                <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
            </Breadcrumb>

            {/* Instructions Section */}
            <Alert variant="info">
                <Alert.Heading>Payslip Information</Alert.Heading>
            </Alert>

            {/* Payslip Form */}
            <Form>
                <Form.Group controlId="employeeID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                        placeholder="Enter Employee ID"
                    />
                </Form.Group>
                <br></br>
                <Form.Group controlId="employeeName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        placeholder="Enter Employee Name"
                    />
                </Form.Group>
                <br></br>

                <Form.Group controlId="employeeBankDetails">
                    <Form.Label>Employee Bank Details</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeBankDetails}
                        onChange={(e) => setEmployeeBankDetails(e.target.value)}
                        placeholder="Enter Employee Bank Details"
                    />
                </Form.Group>
                <br></br>
                <div className="mt-4">
                    <Button variant="primary" onClick={handleGeneratePaySlip}>
                        Generate PaySlip
                    </Button>
                    <Button variant="secondary" className="ml-2" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PaySlip;
