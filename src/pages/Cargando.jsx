import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import "../index.css";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
      div:{
        margin:'10',
        marginBottom:'100',
        marginTop:'10'
      }
}));

export default function CircularUnderLoad() {

    const classes = useStyles();

  return (
    <Container maxWidth="xs">
    <div className="div">
     <img src="/logo_sistemas.png" />
    <span className="loader"></span>
    </div>
    </Container>

    // <div className={classes.root}>
    //     
    //     <LinearProgress />
    //   <LinearProgress color="secondary" />
    //  
    // </div>
  );
}




