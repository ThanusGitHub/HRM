import React, { useState } from 'react';
import { Table, Button, Form, InputGroup, Pagination, Breadcrumb, Modal } from 'react-bootstrap';

const Appointment = () => {
    const [appointments, setAppointments] = useState([
        {
            profile: 'Jeremy Neigh',
            id: 'A0B1C028',
            status: 'Part-time',
            department: 'Support',
            shift: '8h-17h',
            joiningDate: '9/23/16',
            role: 'Tax Officer',
            statusVariant: 'warning',
        },
        {
            profile: 'Annette Black',
            id: 'A0B1C086',
            status: 'On-contract',
            department: 'QA',
            shift: '8h-13h',
            joiningDate: '7/27/13',
            role: 'Branch Manager',
            statusVariant: 'primary',
        },
        {
            profile: 'Theresa Webb',
            id: 'A0B1C025',
            status: 'Seasonal',
            department: 'People Ops',
            shift: '13h-22h',
            joiningDate: '11/7/16',
            role: 'Regional Manager',
            statusVariant: 'secondary',
        },
        {
            profile: 'Kathryn Murphy',
            id: 'A0B1C044',
            status: 'Part-time',
            department: 'IT',
            shift: '17h-22h',
            joiningDate: '6/19/14',
            role: 'Trust Administrator',
            statusVariant: 'warning',
        },
        {
            profile: 'Courtney Henry',
            id: 'A0B1C099',
            status: 'Full-time',
            department: 'Customer Success',
            shift: '8h-17h',
            joiningDate: '7/11/19',
            role: 'Vice President',
            statusVariant: 'success',
        },
        {
            profile: 'Jane Cooper',
            id: 'A0B1C095',
            status: 'Full-time',
            department: 'Product',
            shift: '8h-17h',
            joiningDate: '8/2/19',
            role: 'Trust Office',
            statusVariant: 'success',
        },
    ]);

    const [editModal, setEditModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Placeholder function for Update (Edit) action
    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setEditModal(true);
    };

    const handleDelete = (employeeId) => {
        if (window.confirm(`Are you sure you want to delete employee with ID: ${employeeId}?`)) {
            setAppointments(appointments.filter(employee => employee.id !== employeeId));
        }
    };

    const handleModalClose = () => {
        setEditModal(false);
        setSelectedEmployee(null);
    };

    const handleSave = () => {
        if (selectedEmployee) {
            setAppointments(appointments.map(emp => (emp.id === selectedEmployee.id ? selectedEmployee : emp)));
            handleModalClose();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedEmployee(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="appointment-page">
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="#">Employee</Breadcrumb.Item>
                <Breadcrumb.Item active>Appointment</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4">Appointment</h1>

            {/* Search and Add Employee Section */}
            <div className="d-flex justify-content-between mb-4">
                <InputGroup className="search-bar w-50">
                    <Form.Control type="text" placeholder="Search" />
                </InputGroup>
                <div>
                    <Button variant="primary" className="me-2">
                        + Add Employee
                    </Button>
                    <Button variant="outline-primary">Invite</Button>
                </div>
            </div>

            {/* Designation Section */}
            <h4 className="mb-3">Designation</h4>
            <Table striped bordered hover responsive className="align-middle">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Department</th>
                        <th>Shift</th>
                        <th>Joining Date</th>
                        <th>Role</th>
                        <th>Actions</th> {/* New column for Actions */}
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((employee, index) => (
                        <tr key={index}>
                            <td className="d-flex align-items-center">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                                    alt={employee.profile}
                                    className="rounded-circle mr-2"
                                    width="40"
                                    height="40"
                                />{' '}
                                <span>{employee.profile}</span>
                            </td>
                            <td>{employee.id}</td>
                            <td>
                                <Button variant={employee.statusVariant} size="sm" className="px-3">
                                    {employee.status}
                                </Button>
                            </td>
                            <td>{employee.department}</td>
                            <td>{employee.shift}</td>
                            <td>{employee.joiningDate}</td>
                            <td>{employee.role}</td>
                            <td>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(employee)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDelete(employee.id)}
                                >
                                    Delete
                                </Button>
                            </td> {/* Added Update and Delete buttons */}
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={editModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedEmployee && (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Profile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="profile"
                                    value={selectedEmployee.profile}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="status"
                                    value={selectedEmployee.status}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Department</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="department"
                                    value={selectedEmployee.department}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Shift</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="shift"
                                    value={selectedEmployee.shift}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Joining Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="joiningDate"
                                    value={selectedEmployee.joiningDate}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="role"
                                    value={selectedEmployee.role}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Pagination Section */}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <Pagination>
                    <Pagination.Prev>Prev</Pagination.Prev>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                </Pagination>
                <div>
                    Page: <Form.Control type="number" value="1" style={{ display: 'inline', width: '60px' }} readOnly /> of 100
                </div>
                <Form.Control as="select" defaultValue="10" style={{ width: '100px' }}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Control>
            </div>
        </div>
    );
};

export default Appointment;
