import React from 'react'

const login = ({ loginFnc, username, password, handler, user }) => {
    
    return (
        <form onSubmit={loginFnc}>
            <div>
                Käyttäjätunnus
                <input
                type="text"
                name="username"
                value={username}
                onChange={handler}
                ></input>
            </div>
            <div>
                Salasana
                <input
                type="password"
                name="password"
                value={password}
                onChange={handler}
                >
                </input>
            </div>
            <button type="submit">Kirjaudu</button>
        </form>
    )
}

export default login