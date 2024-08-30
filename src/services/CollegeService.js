import axios from "axios";

const API_URL = "http://localhost:9090/api/colleges";

class CollegeService {
    // Fetch all colleges
    async getColleges() {
        try {
            const response = await axios.get(`${API_URL}/getallcolleges`);
            console.log(response)
            return response;
        } catch (error) {
            console.error("Error fetching colleges:", error);
            throw error; // Propagate the error to be handled by the calling code
        }
    }

    // Create a new college
    async createCollege(college) {
        try {
            const response = await axios.post(`${API_URL}/createcollege`, college);

            return response;
        } catch (error) {
            console.error("Error creating college:", error);
            throw error;
        }
    }

    // Update an existing college by ID
    async updateCollege(id, college) {
        try {
            const response = await axios.put(`${API_URL}/updatecollegebyid/${id}`, college);
            return response;
        } catch (error) {
            console.error("Error updating college:", error);
            throw error;
        }
    }

    // Delete a college by ID
    async deleteCollege(id) {
        try {
            const response = await axios.delete(`${API_URL}/deletecollegebyid/${id}`);
            return response;
        } catch (error) {
            console.error("Error deleting college:", error);
            throw error;
        }
    }

    // Get a college by ID
    async getCollegeById(id) {
        try {
            const response = await axios.get(`${API_URL}/getcollegebyid/${id}`);
            return response;
        } catch (error) {
            console.error("Error fetching college by ID:", error);
            throw error;
        }
    }
}

export default new CollegeService();
