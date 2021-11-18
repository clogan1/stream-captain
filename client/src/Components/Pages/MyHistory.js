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
import EditModal from '../MyHistory/EditModal'
import { useState } from 'react'
import Filter from '../MyHistory/Filter'
import Sort from '../MyHistory/Sort'



function MyHistory() {
    const entries = useSelector((state) => state.entries.entries);
    const [openModal, setOpenModal] = useState(false)
    const [editEntry, setEditEntry] = useState({
        streamer: {id: "placeholder"},
        status: {id: "placeholder"}
    })
    const [editStreamerId, setEditStreamerId] = useState('')
    const [editStatusId, setEditStatusId] = useState('')
    const [sort, setSort] = useState('default')
    const [filter, setFilter] = useState('')



    function handleOpenModal(show){
        setEditEntry(show)
        setEditStreamerId(editEntry.streamer.id)
        setEditStatusId(editEntry.status.id)
        setOpenModal(true)
    }

    return (
        <Container>
            <Box>
                <Box>
                <Typography>your history</Typography>
                </Box>
                <Box> 

                    <Sort setSort={setSort}/>
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
                        entries.map(entry => <LogItem key={entry.id} entry={entry} handleOpenModal={handleOpenModal}/>)
                        :
                    null
                    }
                    </TableBody>
                </Table>
            </TableContainer>

            <EditModal openModal={openModal} setOpenModal={setOpenModal} editEntry={editEntry} editStreamerId={editStreamerId} editStatusId={editStatusId}/>

        </Container>
    )
}

export default MyHistory
