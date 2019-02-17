import React from 'react'
import Table from 'react-bootstrap/Table'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import './css/components.css'

const Course = ({ courses, deleteCourse }) => {

    const tableStyle = {
        marginTop: '15px'
    }

    return (
        <Table striped bordered hover style={tableStyle}>
        <tbody>
                    {courses.map(course => 
                        <tr key={course._id}>
                        <td>
                        <Button rel="noopener noreferrer" target="_blank" href={course.url} variant="primary">{course.name}
                        </Button>
                        </td>
                        <td>
                        <Button
                        variant="danger"
                        onClick={(event) => {deleteCourse(event, course)}}>
                        Delete
                        </Button>
                        </td>
                        </tr>
                    )}
        </tbody>
        </Table>
        
    )
}

export default Course

