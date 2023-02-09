import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from '@mui/material/Button';


// common snackbar for reducing the code
const CommonModal=({show,handleClose,message,btnname,btnfn,title,setChange,change})=>{
    return(
        
        <div>
                {/* for pop up message */}
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
          
            <Modal.Footer>
            <Button variant="outlined" onClick={handleClose}>
            Close
            </Button>
            <Button variant="contained" color='error' onClick={btnfn}>
            {btnname} 
            </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CommonModal;