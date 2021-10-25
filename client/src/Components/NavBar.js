import { useDispatch } from "react-redux";
import { logOutUser } from '../Redux/Actions/index';

function NavBar() {
    const dispatch = useDispatch()

    function handleSignout(){
        dispatch(logOutUser())
    }

    return (
        <div>
            <button onClick={handleSignout}>sign out</button>  
        </div>
    )
}

export default NavBar
