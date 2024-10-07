import React, { useState } from 'react';
import { Table, Button, Dropdown, Pagination, Form, Modal } from 'react-bootstrap';

const Att_DailyLog = () => {
    // Example data for the table
    const initialData = [
        { id: 1, profile: 'Jeremy Neigh', punchIn: '9/23/16', hours: '15h 40m', department: 'Design', behavior: 'DebitNoteMckee.jpg', isApproved: false },
        { id: 2, profile: 'Annette Black', punchIn: '7/27/13', hours: '11h 45m', department: 'Product', behavior: 'debitnote_0310.xlsx', isApproved: false },
        { id: 3, profile: 'Theresa Webb', punchIn: '11/7/16', hours: '10h 25m', department: 'Marketing', behavior: 'McKeeDebit01.pdf', isApproved: false },
        { id: 4, profile: 'Kathryn Murphy', punchIn: '6/19/14', hours: '16h 55m', department: 'Support', behavior: 'dealsheet2020.pdf', isApproved: false },
        { id: 5, profile: 'Courtney Henry', punchIn: '7/11/19', hours: '15h 45m', department: 'Operations', behavior: 'debitnote_march.pdf', isApproved: false },
        { id: 6, profile: 'Jane Cooper', punchIn: '8/2/19', hours: '10h 45m', department: 'HR', behavior: 'dealsheet_march.xlsx', isApproved: false },
    ];

    const [data, setData] = useState(initialData);
    const [editIndex, setEditIndex] = useState(null);
    const [editedRow, setEditedRow] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [newAttendance, setNewAttendance] = useState({ profile: '', punchIn: '', hours: '', department: '', behavior: '' });
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedRow(data[index]);
    };

    const handleApprove = (index) => {
        const newData = [...data];
        newData[index].isApproved = !newData[index].isApproved; // Toggle approval state
        setData(newData);
    };

    const handleSave = () => {
        const newData = [...data];
        newData[editIndex] = { ...editedRow }; // Update the edited row
        setData(newData);
        setEditIndex(null); // Exit edit mode
    };

    const handleChange = (e) => {
        setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
    };

    const handleNewAttendanceChange = (e) => {
        setNewAttendance({ ...newAttendance, [e.target.name]: e.target.value });
    };

    const handleAddAttendance = () => {
        setShowModal(true);
    };

    const handleSaveNewAttendance = () => {
        const newData = [
            ...data,
            { id: data.length + 1, ...newAttendance, isApproved: false }, // Add new attendance with auto-incremented ID
        ];
        setData(newData);
        setNewAttendance({ profile: '', punchIn: '', hours: '', department: '', behavior: '' }); // Reset new attendance
        setShowModal(false); // Close modal
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index); // Remove the selected entry
        setData(newData);
    };

    // Filtered data based on the search term
    const filteredData = data.filter((row) =>
        row.profile.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Add Attendance, Import, Export, and Settings Buttons */}
            <div className="d-flex justify-content-between ms-1 mt-2 mb-2">
                <div className=''>
                    <Button variant="success" className="me-2" onClick={handleAddAttendance}>+ Add Attendance</Button>
                    <Button variant="outline-primary" className="me-2">Import</Button>
                    <Button variant="outline-primary" className="">Export</Button>
                </div>
                {/* Search */}
            <Form className="d-flex mb-2" style={{ width: '400px' }}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
            </Form>
            </div>

            {/* Filter Buttons */}
            <div className="ms-1 mt-2 mb-2 ">
                <Button variant="outline-primary" className="me-2">Apply Between</Button>
                <Button variant="outline-primary" className="me-2">Department</Button>
                <Button variant="outline-primary" className="me-2">Work Shift</Button>
                <Button variant="outline-primary" className="me-2">Rejected</Button>
                <Button variant="outline-primary" className="">Duration</Button>
            </div>

           

            {/* Attendance Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Punch In</th>
                        <th>Total Hours</th>
                        <th>Department</th>
                        <th>Behavior</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={row.id} style={{ backgroundColor: row.isApproved ? 'lightgreen' : 'transparent' }}>
                            <td>
                                {editIndex === index ? (
                                    <Form.Control
                                        type="text"
                                        name="profile"
                                        value={editedRow.profile}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <>{row.profile} {row.isApproved && <span style={{ color: 'green', marginLeft: '5px' }}>&#10003;</span>}</>
                                )}
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
                                        name="hours"
                                        value={editedRow.hours}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    row.hours
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <Form.Control
                                        type="text"
                                        name="department"
                                        value={editedRow.department}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    row.department
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <Form.Control
                                        type="text"
                                        name="behavior"
                                        value={editedRow.behavior}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    row.behavior
                                )}
                            </td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        Actions
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {editIndex === index ? (
                                            <Dropdown.Item onClick={handleSave}>Save</Dropdown.Item>
                                        ) : (
                                            <Dropdown.Item onClick={() => handleEdit(index)}>Edit</Dropdown.Item>
                                        )}
                                        <Dropdown.Item onClick={() => handleApprove(index)}>
                                            {row.isApproved ? 'Unapprove' : 'Approve'}
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete(index)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Add Attendance Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Attendance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control type="text" name="profile" value={newAttendance.profile} onChange={handleNewAttendanceChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Punch In</Form.Label>
                            <Form.Control type="text" name="punchIn" value={newAttendance.punchIn} onChange={handleNewAttendanceChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Total Hours</Form.Label>
                            <Form.Control type="text" name="hours" value={newAttendance.hours} onChange={handleNewAttendanceChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" name="department" value={newAttendance.department} onChange={handleNewAttendanceChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Behavior</Form.Label>
                            <Form.Control type="text" name="behavior" value={newAttendance.behavior} onChange={handleNewAttendanceChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSaveNewAttendance}>Save</Button>
                </Modal.Footer>
            </Modal>

            {/* Pagination */}
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    );
};

export default Att_DailyLog;

