import React, { useState } from "react";
import CollegeService from "../services/CollegeService";
import { useNavigate } from "react-router-dom";

const AddCollege = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [courses, setCourses] = useState("");
    const [contact, setContact] = useState("");
    const navigate=useNavigate();

    const saveCollege = (e) => {
        e.preventDefault();
        const college = { name, location, courses, contact };

        CollegeService.createCollege(college).then((response) => {

            console.log("College created successfully", response);
            resetForm();
        });
    };

    const resetForm = () => {
        setName("");
        setLocation("");
        setCourses("");
        setContact("");
    };

    const handleAddOneMore = (e) => {
        e.preventDefault();
        saveCollege(e);
    };

    const handleBackToList = () => {
        navigate('/collectcollge'); // Adjust this route to match your list of colleges route
    };

    return (
        <form className="form-continer">
            <div className="field">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div  className="field">
                <label>Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div  className="field">
                <label>Courses</label>
                <input type="text" value={courses} onChange={(e) => setCourses(e.target.value)} />
            </div>
            <div  className="field">
                <label>Contact</label>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <div className="button-container">
               <button className="button" onClick={saveCollege}>submit</button>
                <button className="button" onClick={handleAddOneMore}>Add One More</button>
                <button className="button" onClick={handleBackToList}>Back to List</button>
                </div>
            
        </form>
    );
};

export default AddCollege;
