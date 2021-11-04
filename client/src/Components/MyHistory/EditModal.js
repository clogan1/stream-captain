import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Modal
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { updateEntry } from '../../Redux/Actions/index'

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


function EditModal( { openModal, setOpenModal, editEntry, editStatusId, editStreamerId }) {
    const user = useSelector((state) => state.user.user);
    const streamers = useSelector((state) => state.entries.streamers)
    const statuses = useSelector((state) => state.entries.statuses);

    const dispatch = useDispatch()

    const [statusId, setStatusId] = useState(editStatusId)
    const [streamerId, setStreamerId] = useState(editStreamerId)
    const [errors, setErrors] = useState([])
    
    function handleEditSubmit(e){
        e.preventDefault()

        const updatedEntry = {
            streamer_id: streamerId,
            status_id: parseInt(statusId),
        }


        fetch(`/entries/${editEntry.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updatedEntry)
        }).then(res => {
            if(res.ok){
                res.json().then(entry => dispatch(updateEntry(entry)))
                setOpenModal(false)
            } else{
                res.json().then(err => setErrors(err.errors))
            }
        })

        setStatusId('')
        setStreamerId('')
    }
  
    
    return (
        <Modal
            open={openModal}
            onClose={() => {
                    setOpenModal(false)
                    setErrors([])
                }}
        >
        <Box sx={style}>
            <IconButton onClick={()=>setOpenModal(false)}>
                <CloseIcon />
            </IconButton>
            <br></br> 
            <img src={editEntry.poster_url} style={{width: '100px'}} />
            <Typography>{editEntry.title}</Typography>
            <form onSubmit={handleEditSubmit}>
                <select
                name="streamer"
                value={streamerId}
                onChange={(e)=>setStreamerId(e.target.value)}
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
                                onChange={(e) => setStatusId(e.target.value)}
                            />{status.name}
                            </label>
                    )
                })}
                <br></br>
                <button type="submit">update</button>
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

export default EditModal
