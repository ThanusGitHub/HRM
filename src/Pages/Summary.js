import React from 'react';
import { Card, Button, Table, Form, Pagination, Dropdown } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
// Import necessary chart.js components
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
} from 'chart.js';

// Register chart.js components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

const Summary = () => {
    // Chart data
    const data = {
        labels: ['Regular Days', 'Early Days', 'Late Days'],
        datasets: [
            {
                data: [12, 12, 12],
                backgroundColor: ['#845EC2', '#FF9671', '#FF6F91'],
                hoverBackgroundColor: ['#6C63FF', '#FF756B', '#FF5A7C'],
                borderWidth: 0, // Smooth out the borders for a cleaner look
            }
        ]
    };

    // Sample table data
    const tableData = [
        { employeenames: 'Jeremy Neigh', punchIn: '9/23/16', punchOut: '5:00 PM', totalHours: '15h 40m', status: 'Success' },
        { employeenames: 'Annette Black', punchIn: '7/27/13', punchOut: '4:30 PM', totalHours: '11h 45m', status: 'Some errors' },
        { employeenames: 'Theresa Webb', punchIn: '11/7/16', punchOut: '3:45 PM', totalHours: '10h 25m', status: 'Aborted' },
        { employeenames: 'Kathryn Murphy', punchIn: '6/19/14', punchOut: '6:00 PM', totalHours: '16h 55m', status: 'Loop' },
        { employeenames: 'Courtney Henry', punchIn: '7/11/19', punchOut: '2:30 PM', totalHours: '15h 45m', status: 'No actions performed' },
        { employeenames: 'Jane Cooper', punchIn: '8/2/19', punchOut: '1:15 PM', totalHours: '10h 45m', status: 'Config change' },
    ];

    const handleAction = (action, employeenames) => {
        // Placeholder action handler - you can implement your logic here
        alert(`${action} clicked for ${employeenames}`);
    };

    return (
        <Card className="p-4">
            {/* Header with title and action buttons */}
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Summary</h5>
                <div>
                    <Button variant="primary" className="me-2">99 Req Attendance</Button>
                    <Button variant="outline-secondary">Export</Button>
                </div>
            </Card.Header>

            <Card.Body>
                {/* Filters Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-group" role="group">
                        <Button variant="outline-primary" className="me-2">Apply between</Button>
                        <Button variant="outline-primary" className="me-2">Department</Button>
                        <Button variant="outline-primary" className="me-2">Work shift</Button>
                        <Button variant="outline-primary" className="me-2">Rejected</Button>
                        <Button variant="outline-primary">Duration</Button>
                    </div>
                    <Form className="d-flex" style={{ width: '300px' }}>
                        <Form.Control type="search" placeholder="Search" className="me-2" />
                    </Form>
                </div>

                {/* Donut Chart and Summary Stats */}
                <div className="d-flex align-items-start mb-4">
                    <div className="me-5" style={{ width: '200px' }}>
                        {/* Doughnut chart component */}
                        <Doughnut data={data} />
                    </div>

                    <div className="d-flex flex-wrap justify-content-start">
                        {/* Summary Stat Cards */}
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Schedule Hour</h6>
                            <p className="h4">12</p>
                        </Card>
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Leave Hour</h6>
                            <p className="h4">45 hr</p>
                        </Card>
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Work</h6>
                            <p className="h4">890 hrs</p>
                        </Card>
                        <Card className="p-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Active</h6>
                            <p className="h4">312 days</p>
                        </Card>
                    </div>
                </div>

                {/* Attendance Table */}
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Employee Names</th>
                            <th>Punch In</th>
                            <th>Punch Out</th>
                            <th>Total hours</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.employeenames}</td>
                                <td>{row.punchIn}</td>
                                <td>{row.punchOut}</td>
                                <td>{row.totalHours}</td>
                                <td>{row.status}</td>
                                <td className="text-center">
                                    {/* Action Dropdown */}
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="p-0 text-dark">
                                            <i className="bi bi-three-dots"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleAction('Change log', row.employeenames)}>
                                                Change log
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleAction('Approve', row.employeenames)}>
                                                Approve
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleAction('Reject', row.employeenames)}>
                                                Reject
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Pagination and Page Size Control */}
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

export default Summary;
