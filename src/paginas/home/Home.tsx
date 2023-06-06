import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
  
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )
  
    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
  navigate("/login")
        }
    }, [token])
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="./src/assets/image/Blog Post.jpg"  alt="" width="600px" height="600px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;