import { useSelector } from "react-redux";
import { 
    Container, 
    Box, 
    Typography
} from '@mui/material';

function MyDashboard() {
    const user = useSelector((state) => state.user.user);

    return (
        <Container>
            <Typography>hi {user.username}</Typography>
        </Container>
    )
}

export default MyDashboard
