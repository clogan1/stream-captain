import {
    Box,
    Grid,
    Typography,
    IconButton,
    Tooltip
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function SearchCard( { item }) {
    
    const { Title, imdbID, Type, Poster} = item

    // console.log(item)

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <img src={Poster} style={{width: '100px'}} />
                </Grid>
                <Grid item xs={4}>
                    <Typography>{Title}</Typography>
                    <Typography>{Type}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Add">
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    </Tooltip>
                </Grid>

            </Grid>
            
        </Box>
    )
}

export default SearchCard



