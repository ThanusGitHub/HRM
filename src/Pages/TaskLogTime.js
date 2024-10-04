import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const TaskLogTime = () => {
  // mytsks sample data
  const tasks = [
    {
      id: 1,
      name: "UI Design",
      priority: "High",
      startTime: "09:00 AM",
      endTime: "01:00 PM",
      estimatedTime: "4h",
      deadline: "2024/10/15",
      status: "Completed",
    },
    {
      id: 2,
      name: "API Development",
      priority: "Medium",
      startTime: "10:00 AM",
      endTime: "",
      estimatedTime: "6h",
      deadline: "2024/10/20",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Database Setup",
      priority: "Low",
      startTime: "",
      endTime: "",
      estimatedTime: "2h",
      deadline: "2024/10/18",
      status: "Pending",
    },
    {
      id: 4,
      name: "Frontend Development",
      priority: "High",
      startTime: "02:00 PM",
      endTime: "",
      estimatedTime: "8h",
      deadline: "2024/10/25",
      status: "In Progress",
    },
    {
      id: 5,
      name: "Deployment",
      priority: "Medium",
      startTime: "",
      endTime: "",
      estimatedTime: "3h",
      deadline: "2024/10/30",
      status: "Pending",
    },
  ];

  // for handle actions based on status
  const renderActionButton = (status) => {
    switch (status) {
      case "Completed":
        return <Button variant="primary">View</Button>;
      case "In Progress":
        return <Button variant="success">End Task</Button>;
      case "Pending":
        return <Button variant="warning">Start Task</Button>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h4>Work on Tasks</h4>
      <Card className="p-4 mt-4">
        <h5>My Tasks</h5>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Estimated Time</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td>{task.status === "Pending" ? "" : task.startTime}</td>
                <td>{task.status === "Completed" ? task.endTime : ""}</td>
                <td className='text-center'>{task.estimatedTime}</td>
                <td>{task.deadline}</td>
                <td>{task.status}</td>
                <td>{renderActionButton(task.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TaskLogTime;
