import React from 'react';
import { Card, Table, Button, Form, Pagination } from 'react-bootstrap';

const AttendanceDetails = () => {
    const data = [
        { profile: 'Jeremy Neigh', january: '15.30', february: '10.30', march: '20.00', april: '08.00', may: ['11.00', '13.00', '12.30', '19.00', '11.30', '19.30', '13.30', '18.00'] },
        { profile: 'Annette Black', january: '14.30', february: '08.30', march: '13.30', april: '08.30', may: ['15.00', '14.00', '09.00', '13.30', '12.00', '17.00', '15.30', '15.00'] },
        { profile: 'Theresa Webb', january: '08.00', february: '08.00', march: '18.30', april: '16.00', may: ['08.30', '19.30', '20.30', '10.00', '20.30', '17.00', '09.30', '20.00'] },
        { profile: 'Kathryn Murphy', january: '17.00', february: '09.30', march: '20.30', april: '09.30', may: ['12.30', '17.00', '10.00', '17.30', '20.30', '11.30', '14.30', '10.30'] },
        { profile: 'Courtney Henry', january: '20.30', february: '18.30', march: '15.30', april: '10.30', may: ['18.00', '10.00', '17.30', '10.00', '17.00', '17.30', '13.30', '10.00'] },
        { profile: 'Jane Cooper', january: '09.00', february: '16.30', march: '12.30', april: '08.30', may: ['08.30', '17.00', '13.00', '19.00', '19.30', '09.30', '12.00', '19.00'] }
    ];

    return (
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Attendance Details</h5>
                <div>
                    <Button variant="primary" className="me-2">99 Req Attendance</Button>
                    <Button variant="outline-secondary">Setting</Button>
                </div>
            </Card.Header>
            <Card.Body>
                {/* Filters */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <Button variant="outline-primary" className="me-2">Apply between</Button>
                        <Button variant="outline-primary" className="me-2">Department</Button>
                        <Button variant="outline-primary" className="me-2">Work shift</Button>
                        <Button variant="outline-primary" className="me-2">Rejected</Button>
                        <Button variant="outline-primary" className="me-2">Duration</Button>
                    </div>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" />
                    </Form>
                </div>

                {/* Table */}
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Employee Names</th>
                            <th>January</th>
                            <th>February</th>
                            <th>March</th>
                            <th>April</th>
                            <th>May</th>
                            {/* Add additional columns for May, as shown in the screenshot */}
                            {Array.from({ length: 7 }, (_, i) => <th key={i}>May</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.profile}</td>
                                <td>{row.january}</td>
                                <td>{row.february}</td>
                                <td>{row.march}</td>
                                <td>{row.april}</td>
                                {/* Render May columns dynamically */}
                                {row.may.map((val, i) => (
                                    <td key={i}>{val}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Pagination */}
                <div className="d-flex justify-content-between align-items-center">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                    <Form.Group controlId="formPageSize" className="d-flex align-items-center">
                        <Form.Label className="me-2 mb-0">Page:</Form.Label>
                        <Form.Control as="select" defaultValue="1" style={{ width: 'auto' }}>
                            <option>1</option>
                            <option>10</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AttendanceDetails;
