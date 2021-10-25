import { useDispatch } from "react-redux";
import { logOutUser } from '../Redux/Actions/index';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    IconButton,
    Tooltip
} from '@mui/material';
import { NavLink } from 'react-router-dom'


function NavBar() {
    const dispatch = useDispatch()

    function handleSignout(){
        dispatch(logOutUser())
    }

    return (
        <div>
            <Tooltip title="home">
            <IconButton component={NavLink} exact to="/">
                <HomeIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="add">
            <IconButton component={NavLink} to="/add">
                <AddCircleIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="my history">
            <IconButton component={NavLink} to="/myhistory">
                <HistoryIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="sign out">
            <IconButton onClick={handleSignout}>
                <LogoutIcon />
            </IconButton>
            </Tooltip>
        </div>
    )
}

export default NavBar
