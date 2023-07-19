import React, { useEffect, useState } from 'react'
import './index.css'
import axios from "axios";

const ResumePage = () => {
    const [resume, setResume] = useState("")
    const [resumeData, setResumeData] = useState([])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const url = `http://localhost:3005/resume`;
        axios
            .put(url, {
                _id: resumeData[0]._id,
                resume: resume,
            })
            .then((res) => console.log(res.data));
        setResume("");
    }

    const fetchingDataFromApi = async () => {
        const response = await fetch(
            "http://localhost:3005/resume"
        );
        const data = await response.json();
        setResumeData(data);
    };

    useEffect(() => {
        fetchingDataFromApi();
    }, []);

    return (
        <div className='add-resume-main-div'>
            <form
                onSubmit={onSubmitHandler}
                className=''>
                <h3>Add Resume Here</h3>
                <input value={resume} className="backend-input-box" onChange={(e) => setResume(e.target.value)} type='text' />
                <div><br /><button className="blue-button" type='submit'>add Resume</button></div>
            </form>
            <br />

        </div>
    )
}

export default ResumePage