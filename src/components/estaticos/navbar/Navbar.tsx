import { AppBar, Button, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './Navbar.css';
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Desconectado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
          });
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ''){
        navbarComponent =    
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#B8CAD4", height: "70px" }}>
                <Grid container justifyContent={'flex-start'}>
                            <Box >
                                <img src="./src/assets/image/icon.png" alt="icone" width="70px" height="70px" />
                            </Box>
                        </Grid>
                        <Grid container justifyContent={'space-between'}>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagensportitulo" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens por título
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>
                       </Box>

   </Grid> 
                      
                                <      Box mx={1} className='cursor' onClick={goLogout} justifyContent="end" > 
                            
                                    <Box mx={1} className='cursor'>
                                    <Button variant="outlined" style={{ borderColor: "white",fontWeight: 'bold', backgroundColor: "#EFF8ED", color: "#B8CAD4" }}>Logout</Button>
                                        
                                    </Box>
                                
                                </Box>
                    
                </Toolbar>
            </AppBar>
    }
       return (
        <>
        {navbarComponent}
       </>
    )
}

export default Navbar;