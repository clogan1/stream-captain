import {useState} from 'react'
import { 
    Box, 
    Typography 
} from '@mui/material';

function SignupForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        console.log({
            username: username,
            email: email,
            password: password
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
        </Box>
    )
}

export default SignupForm
