import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box,List,ListItem,ListItemIcon,ListItemText} from '@mui/material';
import {Link,useLocation} from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
   
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              left: 8,
              top: 8,
            }}
          >
            <CloseIcon fontSize="large"/>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const buttonStyle={
    borderRadius:"8px",my:"1%",height:"60px",
   
}
export default function SideMenu({open,close}) {

   
  return (
      <BootstrapDialog
       fullScreen
        sx={{direction:'ltr'}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle  id="customized-dialog-title" onClose={close}>
          <Box className="d-flex justify-content-center align-items-center">
            <Typography variant="h4"  sx={{color:'orange'}}>
                BitMnc
          </Typography>
          </Box>
        </BootstrapDialogTitle>
        <DialogContent>
            <Box >
                <List component="nav" aria-label="main mailbox folders" sx={{py:"16px"}}>
                    <ListItem className="logo" component={Link} to="/" sx={buttonStyle} onClick={close}>
                        BuyCrypto
                    </ListItem>
                    <ListItem className="logo" component={Link} to="/orders" sx={buttonStyle}  onClick={close}>
                        orders
                    </ListItem>
                    <ListItem className="logo" component={Link} to="/trade" sx={buttonStyle}  onClick={close}>
                    Trade
                    </ListItem>
                    <ListItem className="logo" component={Link} to="/login" sx={buttonStyle}  onClick={close}>
                        log in
                    </ListItem>
                    <ListItem className="logo" component={Link} to="/signup" sx={buttonStyle}  onClick={close}>
                    sign up
                    </ListItem>
                </List>
            </Box>
        </DialogContent>
      </BootstrapDialog>
  )
}
