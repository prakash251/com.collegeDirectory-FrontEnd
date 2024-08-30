import React, { useEffect, useState } from "react";
import CollegeService from "../services/CollegeService.js";
import { useNavigate } from "react-router-dom";

const ListColleges = () => {
  const [colleges, setColleges] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch the list of colleges when the component is mounted
    CollegeService.getColleges()
      .then((response) => {
        setColleges(response.data); // Assuming response is an array of college objects
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Call the deleteCollege method from CollegeService
    CollegeService.deleteCollege(id)
      .then(() => {
        // Filter out the deleted college from the list
        setColleges(colleges.filter((college) => college.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting college:", error);
      });
  };

  const handleUpdate = (id) => {
    // Implement navigation to update form or trigger modal for updating the college
    // This is just a placeholder for now
    navigate(`/updatecollege/${id}`);
    console.log("Update college with id:", id);
    // Navigate to update page or open update modal here
  };

  return (
    <div className="listofcolleges">
      <h2>Colleges List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Courses</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college) => (
            <tr key={college.id}>
              <td>{college.name}</td>
              <td>{college.location}</td>
              <td>{college.courses}</td>
              <td>{college.contact}</td>
              <td>
                <button onClick={() => handleUpdate(college.id)}>Update</button>
                <button onClick={() => handleDelete(college.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListColleges;
