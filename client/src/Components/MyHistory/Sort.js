import { 
    Container, 
    Box, 
    Typography,
} from '@mui/material';
import { useDispatch } from "react-redux";
import { entriesOldest, entriesNewest } from '../../Redux/Actions/index'


function Sort( { setSort }) {
    const dispatch = useDispatch()

    function handleSortChange(e){
        setSort(e.target.value)

        if(e.target.value === 'default'){
            dispatch(entriesNewest())
        }
        else if(e.target.value === 'oldest'){
            dispatch(entriesOldest())
        }
    }

    return (
        <Box>
            <select onChange={handleSortChange}>
                <option value="default">most recent</option>
                <option value="oldest">oldest</option>
            </select>
        </Box>
    )
}

export default Sort
