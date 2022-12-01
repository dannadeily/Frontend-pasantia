
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alerta = ({alerta}) => {


  if(alerta.error === true){
    <Alert severity="error" ></Alert>
  }
  else {
    <Alert severity="success"></Alert>
  }
  return (

    <div >
        {alerta.msg}
    </div>
  )
}

export default Alerta