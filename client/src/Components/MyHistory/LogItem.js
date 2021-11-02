import { 
    TableCell,
    TableRow,
    IconButton,
    Tooltip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { editEntry, deleteEntry} from '../../Redux/Actions/index'


function LogItem( { entry, handleOpenModal }) {
    const { id, poster_url, show_type, status, title, streamer, created_at } = entry
    const dispatch = useDispatch()

    let dateCreated = Date.parse(created_at)
    dateCreated = new Intl.DateTimeFormat('en-US').format(dateCreated)

    function handleDeleteEntry(){
        fetch(`/entries/${id}`, { 
            method: 'DELETE', 
            headers: { Accept: 'application/json'}
        }).then(dispatch(deleteEntry(entry)))
    }

    function handleEditEntry(){
        handleOpenModal(entry)
    }

    return (
        <TableRow>
            <TableCell>
                <img src={poster_url} style={{width: '50px'}} />
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{dateCreated}</TableCell>
            <TableCell>{status.name}</TableCell>
            <TableCell>{streamer.name}</TableCell>
            <TableCell>
                <Tooltip title="edit">
                <IconButton onClick={handleEditEntry}>
                    <EditIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title="delete">
                <IconButton onClick={handleDeleteEntry}>
                    <DeleteIcon />
                </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )
}

export default LogItem
