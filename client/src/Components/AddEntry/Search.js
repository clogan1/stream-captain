import { 
   Typography,
   Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function Search( { search, setSearch, handleSearchSubmit }) {
    return (
        <Box>
            <SearchIcon />
            <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input 
                name="search"
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </form>
        </Box>
        
    )
}

export default Search
