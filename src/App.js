import React from "react";
import Navbar from "./components/Navbar";
import './components/Navbar.css';
import './components/list.css';
import './components/addingcolleges.css';
import './components/updatecollege.css';
import { Routes,Route } from "react-router-dom";
import ListColleges from "./components/ListColleges";
import AddCollege from "./components/AddCollege";
import UpdateCollege from "./components/UpdateCollege";



function App() {

    return (
        <div>
         <Navbar/>
         <Routes>
            <Route  path="/addcollege"  element={<p/>}/>
            <Route  path="/collectcollge" element={<ListColleges/>}/>
            <Route path="/updatecollege/:id" element={<UpdateCollege />} />
         </Routes>
        </div>
       

    );
    
   
};

export default App;
