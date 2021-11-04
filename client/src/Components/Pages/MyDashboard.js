import { useSelector } from "react-redux";
import { 
    Container, 
    Typography
} from '@mui/material';
import Charts from '../MyDashboard/Charts'


function MyDashboard() {
    const user = useSelector((state) => state.user.user);

    return (
        <Container>
            <Typography>hi {user.username}</Typography>
            <Charts />
        </Container>
    )
}

export default MyDashboard
