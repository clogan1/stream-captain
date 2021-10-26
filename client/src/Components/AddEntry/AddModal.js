import { useState } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Modal
} from '@mui/material';
import { useSelector } from "react-redux";


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
    const streamers = useSelector((state) => state.entries.streamers);
    const statuses = useSelector((state) => state.entries.statuses);

    const [streamer, setStreamer] = useState('')
    const [status, setStatus] = useState('')
    const [rating, setRating] = useState(0)

    function submitEntry(e){
        e.preventDefault();

        let newEntry = {
            user_id: user.id,
            streamer_id: streamer,
            status_id: status,
            title: show.Title,
            imdb_id: show.imdbID,
            show_type: show.Type,
            poster_url: show.Poster,
            rating: rating,
        }
    }

    // console.log("streamer:", streamer)

    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
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

            </form>
        </Box>
      </Modal>
    )
}

export default AddModal
