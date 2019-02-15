import React from 'react'


const Navigation = () => {
    return (
        <div>
            <ul className="navBarList">
                <li><a href="https://hhmoodle.haaga-helia.fi" rel="noopener noreferrer" target="_blank">Moodle</a></li>
                <li><a href="https://kide.app" rel="noopener noreferrer" target="_blank">Kide.app</a></li>
                <li><a href="https://student.home.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">Peppi</a></li>
                <li><a href="http://mymail.haaga-helia.fi" rel="noopener noreferrer" target="_blank">Sähköposti</a></li>
                <li><a href="http://palvelum.me/myybrowser/" rel="noopener noreferrer" target="_blank">Myy search</a></li>
                <li><a href="http://vdi.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">Vdi</a></li>
            </ul>
        </div>
    )
}

export default Navigation