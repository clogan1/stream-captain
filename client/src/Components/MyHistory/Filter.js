import { 
    Container, 
    Box, 
    Typography,
} from '@mui/material';
import { useSelector } from "react-redux";

function Filter() {
    const streamers = useSelector((state) => state.entries.streamers)

    return (
        <Box>
            {streamers.map(streamer => 
                <input 
                    
                    value={streamer.name}    
                />
            )
            }   
        </Box>
    )
}

export default Filter
