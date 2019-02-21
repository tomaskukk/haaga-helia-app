import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './css/components.css'

const Course = ({ courses, deleteCourse }) => {

   

    return (
        <Table striped bordered hover>
        <tbody>
                    {courses.map(course => 
                        <tr key={course.id}>
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

