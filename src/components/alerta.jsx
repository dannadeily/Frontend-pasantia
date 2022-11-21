
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? <Alert severity="error"></Alert>
        : <Alert severity="success"></Alert>} 
        bg-gradient-to-br text-center p-3 rounded-xl
         uppercase text-white font-bold text-sm my-10`}>

            {alerta.msg}

        </div>
    )
}

export default Alerta