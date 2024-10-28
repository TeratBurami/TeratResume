import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import InfoIcon from '@mui/icons-material/Info';
import { useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props{
    title:string;
    detail:string;
    date:string;
    image:string;
}

export default function DialogPopup({title,detail,date,image}:Props) {
  const [open, setOpen] = React.useState(false);
  const match_media = useMediaQuery("(min-width:600px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className='font-mono font-bold md:border-2 border-cyan-400 text-cyan-400 p-3 mr-3 md:text-base place-items-center' onClick={handleClickOpen}>
        {match_media? <p><InfoIcon></InfoIcon> Details</p>:<InfoIcon fontSize='large'></InfoIcon>}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='p-2 bg-cyan-200'>
          <button onClick={handleClose} className='float-right'><CloseIcon fontSize='small'></CloseIcon></button>
          <div className='px-8 pb-4'>
            <h1 className='mt-8 text-xl font-bold text-cyan-950'>{title}</h1>
            <p className='text-sky-700 mb-4'>- {date}</p>
            <p className='text-lg font-bold text-cyan-800'>{detail}</p>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
