import React, { useState } from 'react';
import { Card, Table, Button, Form, Dropdown, Pagination } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs'; // Importing a check mark icon

const Request = () => {
    // Sample table data
    const initialTableData = [
        { profile: 'Jeremy Neigh', punchIn: '9/23/16', punchOut: 'Design', totalHours: '15h 40m', status: 'Success', approved: false },
        { profile: 'Annette Black', punchIn: '7/27/13', punchOut: 'Product', totalHours: '11h 45m', status: 'Busy', approved: false },
        { profile: 'Theresa Webb', punchIn: '11/7/16', punchOut: 'Marketing', totalHours: '10h 25m', status: 'Ready', approved: false },
        { profile: 'Kathryn Murphy', punchIn: '6/19/14', punchOut: 'Support', totalHours: '16h 55m', status: 'Loop', approved: false },
        { profile: 'Courtney Henry', punchIn: '7/11/19', punchOut: 'Operations', totalHours: '15h 45m', status: 'No actions performed', approved: false },
        { profile: 'Jane Cooper', punchIn: '8/2/19', punchOut: 'HR', totalHours: '10h 45m', status: 'Config change', approved: false },
    ];

    const [tableData, setTableData] = useState(initialTableData);
    const [editIndex, setEditIndex] = useState(null);
    const [editedRow, setEditedRow] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    // Handle edit action
    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedRow({ ...tableData[index] });
    };

    // Handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRow((prev) => ({ ...prev, [name]: value }));
    };

    // Save edited row data
    const handleSave = () => {
        const newData = [...tableData];
        newData[editIndex] = { ...editedRow };
        setTableData(newData);
        setEditIndex(null);
    };

    // Toggle approval state of a request
    const handleApprove = (index) => {
        const newData = [...tableData];
        newData[index].approved = !newData[index].approved; // Toggle approval state
        setTableData(newData);
    };

    // Delete a request
    const handleDelete = (index) => {
        const newData = tableData.filter((_, i) => i !== index); // Remove the row at the given index
        setTableData(newData);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter table data based on search term
    const filteredData = tableData.filter((row) => 
        row.profile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.punchIn.includes(searchTerm) ||
        row.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Card className="p-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Request</h5>
                <Button variant="primary">{tableData.length} Req Attendance</Button> {/* Displaying the request count */}
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
                            value={searchTerm} 
                            onChange={handleSearchChange} 
                        />
                    </Form>
                </div>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Employee Names</th>
                            <th>Punch In</th>
                            <th>Punch Out</th>
                            <th>Type</th>
                            <th>Total Hours</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    {row.approved && <BsCheckCircle color="green" />} {row.profile}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="punchIn"
                                            value={editedRow.punchIn}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.punchIn
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="punchOut"
                                            value={editedRow.punchOut}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.punchOut
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="type"
                                            value={editedRow.type}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.punchOut // Assuming "Type" should show "Punched Out"
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="totalHours"
                                            value={editedRow.totalHours}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.totalHours
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="status"
                                            value={editedRow.status}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.status
                                    )}
                                </td>
                                <td className="text-center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="text-dark">
                                            <i className="bi bi-three-dots"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEdit(index)}>Changelog</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleApprove(index)}>
                                                {row.approved ? 'Unapprove' : 'Approve'}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDelete(index)} className="text-danger">Delete</Dropdown.Item>
                                            {editIndex === index && <Dropdown.Item onClick={handleSave}>Save</Dropdown.Item>}
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
                        <Form.Control as="select" defaultValue="10" style={{ width: 'auto' }}>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Request;
