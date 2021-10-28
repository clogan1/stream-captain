import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Modal
} from '@mui/material';

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


function EditModal( { openModal, setOpenModal, editEntry }) {

    console.log(editEntry)
    
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
        </Box>
      </Modal>
    )
}

export default EditModal
