import { 
    Container, 
    Box, 
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import { useSelector } from "react-redux";
import LogItem from '../MyHistory/LogItem'


function MyHistory() {
    const entries = useSelector((state) => state.entries.entries);

    return (
        <Container>
            <Box>
                <Box>
                <Typography>your history</Typography>
                </Box>
                <Box> 
                    <Typography> filter | sort  </Typography>
                </Box>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>preview</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>date added</TableCell>
                            <TableCell>status</TableCell>
                            <TableCell>streamer</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {(entries.length > 0)?
                        entries.map(entry => <LogItem key={entry.id} entry={entry}/>)
                        :
                    null
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default MyHistory
