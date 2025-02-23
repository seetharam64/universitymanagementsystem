import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Examinationpage.css'

function Examinationpage(){
    const [selectedCourse, setSelectedCourse] = useState("");
    const [file, setFile] = useState(null);

    const enrolledCourses = ["COSC 5362", "CSCI 5293"];

    //Updates when student selects course
    const handleCourseSelect = (event) => {
        setSelectedCourse(event.target.value);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    return(
        <>
        <div className='header'>
            <h1>Student Management System</h1>
        </div>
        <Container className='course-select-dropdown' >
        <Form.Group controlId='courseSelect'>
            <Form.Label> Select Course</Form.Label>
            <Form.Control as="select" onChange={handleCourseSelect}>
                <option value="">Select Course</option>
                {enrolledCourses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                ))}
            </Form.Control>
        </Form.Group>

        <input
            type='file'
            id='fileinput'
            accept='.pdf, .docx, .txt,. jpg, .png'
            disabled={!selectedCourse}
            style={{display:"none"}}
            onChange={handleFileChange}
        />

        <Button
            variant='primary'
            className='upload-button'
            disabled={!selectedCourse}
            onClick={()=>document.getElementById('fileInput').click()}>
            Upload File
        </Button>

        {file && <p className='file-info'>Selected FIle: {file.name}</p>}

        </Container>

        </>

    )
}
export default Examinationpage;