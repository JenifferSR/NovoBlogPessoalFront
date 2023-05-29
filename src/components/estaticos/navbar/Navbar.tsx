import React from 'react';
import { AppBar, Toolbar, Typography, Grid,Button } from '@material-ui/core';
import {Box, } from '@mui/material';
import {Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static" className='nav'>
                <Toolbar variant="regular">
                        <Grid container justifyContent={'flex-start'}>
                            <Box >
                                <img src="./src/assets/image/icon.png" alt="icone" width="70px" height="70px" />
                            </Box>
                        </Grid>
                        <Grid container justifyContent={'space-between'}>

                            <Box display="flex" justifyContent="start">
                                <Link to='/home' className='text-decorator-none'>
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" >
                                            Home
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/posts" className="text-decorator-none">
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" >
                                            Postagens
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/temas" className="text-decorator-none">
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" >
                                            Temas
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/formularioTema" className="text-decorator-none">
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" >
                                            Cadastrar Tema
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/perfil" className="text-decorator-none">
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" >
                                            Perfil
                                        </Typography>
                                    </Box>
                                </Link>
                                </Box>
                                
                        </Grid> 
                      
                                <Box display="flex" justifyContent="end" > 
                            
                                    <Box mx={1} className='cursor'>
                                    <Button variant="outlined" style={{ borderColor: "white",fontWeight: 'bold', backgroundColor: "#20C2A8", color: "#ffffff" }}>Logout</Button>
                                        
                                    </Box>
                                
                                </Box>
                    
                 </Toolbar> 
                
               
            </AppBar>
        </>
    )
}

export default Navbar;