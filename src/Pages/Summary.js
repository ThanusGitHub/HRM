import React, { useState } from 'react';
import { Card, Button, Table, Form, Pagination, Dropdown } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

const Summary = () => {
    const data = {
        labels: ['Regular Days', 'Early Days', 'Late Days'],
        datasets: [
            {
                data: [12, 12, 12],
                backgroundColor: ['#845EC2', '#FF9671', '#FF6F91'],
                hoverBackgroundColor: ['#6C63FF', '#FF756B', '#FF5A7C'],
                borderWidth: 0,
            }
        ]
    };

    const initialTableData = [
        { employeenames: 'Jeremy Neigh', punchIn: '9/23/16', punchOut: '5:00 PM', totalHours: '15h 40m', status: 'Success', approved: false },
        { employeenames: 'Annette Black', punchIn: '7/27/13', punchOut: '4:30 PM', totalHours: '11h 45m', status: 'Some errors', approved: false },
        { employeenames: 'Theresa Webb', punchIn: '11/7/16', punchOut: '3:45 PM', totalHours: '10h 25m', status: 'Aborted', approved: false },
        { employeenames: 'Kathryn Murphy', punchIn: '6/19/14', punchOut: '6:00 PM', totalHours: '16h 55m', status: 'Loop', approved: false },
        { employeenames: 'Courtney Henry', punchIn: '7/11/19', punchOut: '2:30 PM', totalHours: '15h 45m', status: 'No actions performed', approved: false },
        { employeenames: 'Jane Cooper', punchIn: '8/2/19', punchOut: '1:15 PM', totalHours: '10h 45m', status: 'Config change', approved: false },
    ];

    const [searchInput, setSearchInput] = useState('');
    const [tableData, setTableData] = useState(initialTableData);
    const [editingIndex, setEditingIndex] = useState(null); // Track which row is being edited

    // State for requested attendance count
    const [requestedAttendanceCount, setRequestedAttendanceCount] = useState(99); // Set initial count

    const handleChangeLog = (index) => {
        setEditingIndex(editingIndex === index ? null : index); // Toggle editing index
    };

    const handleApprove = (index) => {
        const newData = [...tableData];
        newData[index].approved = !newData[index].approved; // Toggle approved state
        setTableData(newData);
    };

    const handleDelete = (index) => {
        const newData = tableData.filter((_, i) => i !== index); // Remove the specific row
        setTableData(newData);
    };

    const filteredData = tableData.filter(row =>
        row.employeenames.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <Card className="p-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Summary</h5>
                <div>
                    {/* Show the dynamic requested attendance count */}
                    <Button variant="primary" className="me-2">{requestedAttendanceCount} Req Attendance</Button>
                    <Button variant="outline-secondary">Export</Button>
                </div>
            </Card.Header>

            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-group" role="group">
                        <Button variant="outline-primary" className="me-2">Apply between</Button>
                        <Button variant="outline-primary" className="me-2">Department</Button>
                        <Button variant="outline-primary" className="me-2">Work shift</Button>
                        <Button variant="outline-primary" className="me-2">Rejected</Button>
                        <Button variant="outline-primary">Duration</Button>
                    </div>
                    <Form className="d-flex" style={{ width: '400px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </Form>
                </div>

                <div className="d-flex align-items-start mb-4">
                    <div className="me-5" style={{ width: '200px' }}>
                        <Doughnut data={data} />
                    </div>

                    <div className="d-flex flex-wrap justify-content-start">
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
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    {editingIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={row.employeenames}
                                            onChange={(e) => {
                                                const newData = [...tableData];
                                                newData[index].employeenames = e.target.value; // Update employee name on change
                                                setTableData(newData);
                                            }}
                                        />
                                    ) : (
                                        <>
                                            {row.employeenames}
                                            {row.approved && <span className="text-success ms-2">&#10003;</span>} {/* Show tick mark if approved */}
                                        </>
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={row.punchIn}
                                            onChange={(e) => {
                                                const newData = [...tableData];
                                                newData[index].punchIn = e.target.value; // Update punchIn on change
                                                setTableData(newData);
                                            }}
                                        />
                                    ) : row.punchIn}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={row.punchOut}
                                            onChange={(e) => {
                                                const newData = [...tableData];
                                                newData[index].punchOut = e.target.value; // Update punchOut on change
                                                setTableData(newData);
                                            }}
                                        />
                                    ) : row.punchOut}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={row.totalHours}
                                            onChange={(e) => {
                                                const newData = [...tableData];
                                                newData[index].totalHours = e.target.value; // Update totalHours on change
                                                setTableData(newData);
                                            }}
                                        />
                                    ) : row.totalHours}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <Form.Select
                                            defaultValue={row.status}
                                            onChange={(e) => {
                                                const newData = [...tableData];
                                                newData[index].status = e.target.value; // Update status on change
                                                setTableData(newData);
                                            }}
                                        >
                                            <option value="Success">Success</option>
                                            <option value="Some errors">Some errors</option>
                                            <option value="Aborted">Aborted</option>
                                            <option value="Loop">Loop</option>
                                            <option value="No actions performed">No actions performed</option>
                                            <option value="Config change">Config change</option>
                                        </Form.Select>
                                    ) : (
                                        row.status
                                    )}
                                </td>
                                <td className="text-center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="p-0 text-dark">
                                            <i className="bi bi-three-dots"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleChangeLog(index)}>
                                                {editingIndex === index ? 'Save' : 'Change log'}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleApprove(index)}>
                                                Approve
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDelete(index)}>
                                                Delete
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

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
