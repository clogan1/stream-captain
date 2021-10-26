import {useState} from 'react'
import { Box, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { logInUser } from '../../Redux/Actions/index'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault();
        let newLogin = {
            username: username,
            password: password
        }

        fetch('/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                },
            body: JSON.stringify(newLogin)
        }).then(res => {
            if(res.ok){
                res.json().then(user => {
                    dispatch(logInUser(user))
                })
            } else{
                res.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <Box>
            <Typography>welcome back</Typography>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input
                    type="text"
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label>password</label>
                <input
                    type="password"
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <button type="submit">log in</button>
            </form>
            {(errors.length > 0) ?
                errors.map(err => {
                    return (
                    <p key={err}>{err}</p>
                    )
                })
            : 
            null
            }
        </Box>
    )
}

export default LoginForm
