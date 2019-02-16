import React from 'react'

const CreateAccountForm = ({ username, password,
     handler, passwordConfirmation, createAccountFnc }) => {
    return (
        <div>
            <form onSubmit={createAccountFnc}>
                <div>
                    Käyttäjänimi
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handler}
                    >
                    </input>
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
                <div>
                    Vahvista salasana
                    <input
                    type="password"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={handler}
                    >
                    </input>
                </div>
                <button type="submit">
                Luo käyttäjä
                </button>
            </form>
        </div>
    )
}

export default CreateAccountForm