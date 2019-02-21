import React from 'react'
import Table from 'react-bootstrap/Table'


const Otherlinks = () => {
    
  return (
   <Table striped bordered hover className="commonLinks" responsive="lg">
     <tbody>
       <tr>
        <th>Common links</th>
       </tr>
        <tr>
          <td><a className="cool-link" rel="noopener noreferrer" target="_blank" href="http://www.haaga-helia.fi/fi/opinto-opas">Students' guide</a></td>
          </tr>
       <tr>
          <td><a className="cool-link" rel="noopener noreferrer" target="_blank" href="https://startupschool.fi/">Startup-school</a></td>
        </tr>
          <tr>
          <td><a className="cool-link" rel="noopener noreferrer" target="_blank" href="https://haagahelia.rekrytointi.com/paikat/?o=A_LOJ&list=1">Laura jobs</a></td>
          </tr>
          <tr>
          <td><a className="cool-link" rel="noopener noreferrer" target="_blank" href="https://haaga-helia.finna.fi/">HH-Finna</a></td>
          </tr>
          <tr>
          <td><a className="cool-link" rel="noopener noreferrer" target="_blank" href="https://hahe.moveon4.com//publisher/1/eng">Moveon</a></td>
          </tr>
          </tbody>
  </Table>
)
}

export default Otherlinks