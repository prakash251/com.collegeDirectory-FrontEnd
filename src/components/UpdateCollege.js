import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CollegeService from '../services/CollegeService';

const UpdateCollege = () => {
    const { id } = useParams(); // Get the ID from URL parameters
    const [college, setCollege] = useState({ name: '', location: '', courses: '', contact: '' });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the college details by ID when the component mounts
        CollegeService.getCollegeById(id).then((response) => {
            setCollege(response.data);
        }).catch((error) => {
            console.error("Error fetching college details:", error);
        });
    }, [id]);

    const handleChange = (e) => {
        setCollege({ ...college, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CollegeService.updateCollege(id, college)
            .then(() => {
                console.log('Update successful, navigating to list of colleges...');
                navigate('/collectcollge'); // Redirect to the list of colleges after updating
            })
            .catch((error) => {
                console.error("Error updating college:", error);
            });
    };

    return (
        <div className='container'>
            <h2>Update College</h2>
            <form className='form_container' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={college.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Location:
                    <input type="text" name="location" value={college.location} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Courses:
                    <input type="text" name="courses" value={college.courses} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Contact:
                    <input type="text" name="contact" value={college.contact} onChange={handleChange} required />
                </label>
                <br />
                <button className='button' type="submit">Update College</button>
            </form>
        </div>
    );
};

export default UpdateCollege;
