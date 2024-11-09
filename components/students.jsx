import React, { useState } from "react";
import "../static/student.css";
function students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      course: "Mathematics",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      course: "Science",
    },
    {
      id: 3,
      name: "Carlos Garcia",
      email: "carlos.garcia@example.com",
      phone: "555-123-4567",
      course: "History",
    },
    {
      id: 4,
      name: "Samantha Lee",
      email: "samantha.lee@example.com",
      phone: "444-567-8901",
      course: "Literature",
    },
  ]);
  return (
    <div>
      <h1>Student Information table</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Student Name</th>
            <th className="col">Email</th>
            <th className="col">Phone</th>
            <th className="col">Course Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="col">
                {student.name}
              </td>
              <td className="col">
                {student.email}
              </td>
              <td className="col">
                {student.phone}
              </td>
              <td className="col">
                {student.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default students;
