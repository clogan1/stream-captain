import { useState } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Modal
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEntry } from '../../Redux/Actions/index';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function AddModal( { setOpenModal, openModal, show} ) {
    const user = useSelector((state) => state.user.user);
    const streamers = useSelector((state) => state.entries.streamers)
    const statuses = useSelector((state) => state.entries.statuses);
    // const myEntries = useSelector((state) => state.entries.entries);

    const [streamer, setStreamer] = useState('')
    const [status, setStatus] = useState('')
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch()
 
    function submitEntry(e){
        e.preventDefault();

        let newEntry = {
            user_id: user.id,
            streamer_id: parseInt(streamer),
            status_id: parseInt(status),
            title: show.Title,
            imdb_id: show.imdbID,
            show_type: show.Type,
            poster_url: show.Poster,
            rating: rating,
        }

        console.log(newEntry)

        fetch('/entries', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newEntry)
        }).then(res => {
            if(res.ok){
                res.json().then(entry => dispatch(addEntry(entry)))
                setOpenModal(false)
            } else{
                res.json().then(err => setErrors(err.errors))
            }
        })

        setStreamer('')
        setStatus('')
    }

    // console.log("streamer:", streamer)
    // console.log("my entries:", myEntries)

    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
        <Box sx={style}>
            <IconButton onClick={()=>setOpenModal(false)}>
                <CloseIcon />
            </IconButton>
            <br></br>
            <img src={show.Poster} style={{width: '100px'}} />
            <Typography>{show.Title}</Typography>
            <form onSubmit={submitEntry}>
                <select
                name="streamer"
                value={streamer}
                onChange={(e)=>setStreamer(e.target.value)}
                >
                    <option value="0">select a streamer</option>
                    {streamers.map(stream => (<option key={stream.id} value={stream.id} >{stream.name}</option>))
                    }
                </select>
                <br></br>
                {statuses.map(status => {
                    return(
                        <label key={status.id}>
                            <input 
                                type="radio"
                                name="statusname"
                                id={status.name}
                                value={status.id}
                                onChange={(e) => setStatus(e.target.value)}
                            />{status.name}
                            </label>
                    )
                })}
                <br></br>
                <button type="submit">add</button>
            </form>
                {(errors.length > 0)? 
                    errors.map(err => {
                    return (
                    <p key={err}>{err}</p>
                        )
                    })
                    :
                    null
                }
        </Box>
      </Modal>
    )
}

export default AddModal
