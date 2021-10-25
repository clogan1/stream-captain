import {useState} from 'react'
import { useDispatch } from "react-redux";
import { signUpUser } from '../../Redux/Actions/index'
import { 
    Box, 
    Typography 
} from '@mui/material';

function SignupForm() {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch()


    function handleSubmit(e){
        e.preventDefault();
        let newUser = {
            username: username,
            first_name: firstName,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }

        fetch('/signup', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        }).then(res => {
            if(res.ok){
                res.json().then(user => {
                    dispatch(signUpUser(user))
                })
            } else(res.json().then(err => setErrors(err.errors)))
        })
    }

    return (
        <Box>
            <Typography>welcome aboard</Typography>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input
                    type="text"
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label>first name</label>
                <input
                    type="text"
                    name="firstname" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br></br>
                <label>email</label>
                <input
                    type="text"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <label>confirm password</label>
                <input
                    type="password"
                    name="confirmpassword" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br></br>
                <button type="submit">sign up</button>
            </form>
            {(errors.length > 1) ?
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

export default SignupForm
