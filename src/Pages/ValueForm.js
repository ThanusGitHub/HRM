import React, { useState } from "react";
import { Breadcrumb, Form, Button, Alert, Row, Col } from 'react-bootstrap';

const ValueForm = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [allowance, setAllowance] = useState("");
  const [bonus, setBonus] = useState("");
  const [overtime, setOvertime] = useState("");
  const [pensionContributions, setPensionContributions] = useState("");
  const [welfareContributions, setWelfareContributions] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Basic Salary:", basicSalary);
    console.log("Allowance:", allowance);
    console.log("Bonus:", bonus);
    console.log("Overtime:", overtime);
    console.log("Pension Contributions:", pensionContributions);
    console.log("Welfare Fund Contributions:", welfareContributions);
  };

  const handleCancel = () => {
    // Handle cancel logic
    setBasicSalary("");
    setAllowance("");
    setBonus("");
    setOvertime("");
    setPensionContributions("");
    setWelfareContributions("");
  };

  return (
    <div className="value-form container mt-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Default Payrun</Breadcrumb.Item>
        <Breadcrumb.Item active>Value</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Payslip</Breadcrumb.Item>
      </Breadcrumb>

     

      {/* Information Alert */}
      <Alert variant="info">
        <Alert.Heading>How Value Works?</Alert.Heading>
        <p>
          1. Enter the the Basic. 
        </p>
        <p>
          2. Enter the the Allowance, Bonus, Overtime for calculate Earnings.
        </p>
        <p>
          3. Enter the the Pension Scheme Contributions, Welfare Fund Contributions for calculate Deductions.
        </p>
        <p>
          4. Eventually you can get Net salary by Generate PaySlip.
        </p>
      </Alert>

      {/* Form */}
      <Form>
        {/* Basic Salary */}
        <Form.Group controlId="basicSalary">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Basic Salary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </Form.Group>

        {/* Earnings Section */}
        <h5 className="mt-4">Earnings</h5>
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Indentation applied here */}
          <Form.Group controlId="allowance">
            <Form.Label>1. Allowance</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Allowance"
              value={allowance}
              onChange={(e) => setAllowance(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="bonus">
            <Form.Label>2. Bonus</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Bonus"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="overtime">
            <Form.Label>3. Overtime</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Overtime"
              value={overtime}
              onChange={(e) => setOvertime(e.target.value)}
            />
          </Form.Group>
        </div>
{/* Deductions Section */}
<h5 className="mt-4">Deductions</h5>
<Row>
  <Col md={6}>
    <Form.Group controlId="pensionContributions">
      <Form.Label>1. Pension Scheme Contributions</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Pension Scheme Contributions"
        value={pensionContributions}
        onChange={(e) => setPensionContributions(e.target.value)}
      />
    </Form.Group>
  </Col>
  <Col md={6}>
    <Form.Group controlId="welfareContributions">
      <Form.Label>2. Welfare Fund Contributions</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Welfare Fund Contributions"
        value={welfareContributions}
        onChange={(e) => setWelfareContributions(e.target.value)}
      />
    </Form.Group>
  </Col>
</Row>
<br />


        {/* Buttons */}
        <div className="mt-4">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" className="ms-2" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ValueForm;
