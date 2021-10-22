import { useState } from 'react'
import LoginForm from '../Login/LoginForm'
import SignupForm from '../Login/SignupForm'
import { Container, Box, Typography } from '@mui/material';


function Login() {
    const [toggleLogin, setToggleLogin] = useState(true)

    function handleToggle(){
        setToggleLogin(!toggleLogin)
    }

    return (
        <Container>
            <Box>
                <p>[logo placeholder]</p>
                <h3>Stream Captain</h3>
                <ol>
                    <li>log streaming activity</li>
                    <li>visualize your trends</li>
                    <li>make informed decisions</li>
                </ol>
            </Box>
            <Box>
                {toggleLogin ? 
                    <>
                    <LoginForm />
                    <Typography>are you new here? <span onClick={handleToggle}> sign up </span></Typography>
                    </>
                    :
                    <>
                    <SignupForm />
                    <Typography>already have an account? <span onClick={handleToggle}> log in </span></Typography>
                    </>
                }
            </Box>
            

        </Container>
    )
}

export default Login
