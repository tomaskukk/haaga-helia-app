import React from 'react'
import Table from 'react-bootstrap/Table'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

const Course = ({ course, deleteCourse }) => {
    return (
        <Table striped>
        <tbody>
            <tr>
                <td>
                <ButtonToolbar>
                    <Button rel="noopener noreferrer" target="_blank" href={course.url} variant="primary">{course.name}
                    </Button>
                    <Button
                    variant="danger"
                    onClick={(event) => {deleteCourse(event, course)}}>
                    Poista
                    </Button>
                </ButtonToolbar>
                </td> 
            </tr>
        </tbody>
        </Table>
        
    )
}

export default Course

