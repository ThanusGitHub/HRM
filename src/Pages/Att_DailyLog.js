import React, { useState } from 'react';
import { Table, Button, Dropdown, Pagination, Form } from 'react-bootstrap';

const Att_DailyLog = () => {
    // Example data for the table
    const data = [
        { profile: 'Jeremy Neigh', punchIn: '9/23/16', hours: '15h 40m', department: 'Design', behavior: 'DebitNoteMckee.jpg' },
        { profile: 'Annette Black', punchIn: '7/27/13', hours: '11h 45m', department: 'Product', behavior: 'debitnote_0310.xlsx' },
        { profile: 'Theresa Webb', punchIn: '11/7/16', hours: '10h 25m', department: 'Marketing', behavior: 'McKeeDebit01.pdf' },
        { profile: 'Kathryn Murphy', punchIn: '6/19/14', hours: '16h 55m', department: 'Support', behavior: 'dealsheet2020.pdf' },
        { profile: 'Courtney Henry', punchIn: '7/11/19', hours: '15h 45m', department: 'Operations', behavior: 'debitnote_march.pdf' },
        { profile: 'Jane Cooper', punchIn: '8/2/19', hours: '10h 45m', department: 'HR', behavior: 'dealsheet_march.xlsx' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Filter Buttons */}
            <div className="mb-3">
                <Button variant="outline-primary" className="m-2">Apply Between</Button>
                <Button variant="outline-primary" className="m-2">Department</Button>
                <Button variant="outline-primary" className="m-2">Work Shift</Button>
                <Button variant="outline-primary" className="m-2">Rejected</Button>
                <Button variant="outline-primary" className="m-2">Duration</Button>
            </div>

            {/* Search */}
            <Form className="mb-3">
                <Form.Control type="text" placeholder="Search" />
            </Form>

            {/* Attendance Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Empolyee NumberNames</th>
                        <th>Punch In</th>
                        <th>Geolocation</th>
                        <th>Punched Out</th>
                        <th>Behavior</th>
                        <th>Total Hours</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.profile}</td>
                            <td>{row.punchIn}</td>
                            <td>{row.hours}</td>
                            <td>{row.department}</td>
                            <td>{row.behavior}</td>
                            <td>{row.hours}</td>
                            <td>
                                {/* Action Dropdown */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        Actions
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#">Approve</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>

            {/* Add Attendance, Import, Export, and Settings Buttons */}
            <div className="d-flex justify-content-between mt-3">
                <div>
                    <Button variant="primary">+ Add Attendance</Button>
                    <Button variant="outline-primary" className="ml-2">Import</Button>
                    <Button variant="outline-primary" className="ml-2">Export</Button>
                </div>
                <Button variant="outline-secondary">Settings</Button>
            </div>
        </div>
    );
};

export default Att_DailyLog;
