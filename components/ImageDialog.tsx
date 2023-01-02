import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Modal from '@mui/material/Modal';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper
} from '@mui/material';
import { flexbox } from '@mui/system';

export interface ImageDialogProps {
  imageUrl: string;
  open: boolean;
  handleClose: () => void;
}
const ImageDialog = ({ imageUrl, open, handleClose }: ImageDialogProps) => {
  console.log('imageulr', imageUrl);

  return (
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby='alert-dialog-title'
    //   aria-describedby='alert-dialog-description'
    //   sx= {{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      fullWidth={true}
      maxWidth='xl'
      PaperProps={{
        sx: {
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
          maxWidth: '100vw',
          maxHeight: '95vh',
          pointerEvents: 'none',
          overflow: 'hidden',
          borderRadius: '10px',
          width: 'max-content',
          margin: '16px'
        }
      }}
      BackdropProps={{
        sx: {
          backgroundColor: '#000000db'
        }
      }}
    >
      <Image
        src={imageUrl}
        alt='bg'
        width={1000}
        height={1000}
        style={{
          objectFit: 'contain',
          pointerEvents: 'all',
          borderRadius: '10px',
          maxWidth: '100vw',
          maxHeight: '95vh'
        }}
      />
      {/* <DialogTitle id='alert-dialog-title'>
        {"Use Google's location service?"}
        </DialogTitle>
        
        <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
        Agree
        </Button>
      </DialogActions> */}
      {/* </Modal> */}
    </Dialog>
  );
};

export default ImageDialog;
