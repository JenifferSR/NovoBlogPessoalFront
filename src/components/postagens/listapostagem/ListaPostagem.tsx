import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './ListaPostagem.css';

function Listapost() {
  
  let navigate = useNavigate();

  const [posts, setPosts] = useState<any[]>([]);

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === '') {
      toast.error('Usuário não autenticado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate('/login');
    }
  }, [token]);

  async function getpost() {
    try {
      await busca('/postagens', setPosts, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }

  useEffect(() => {
    getpost();
  }, [posts.length]);
  
  return (
    <>
      {posts.length === 0 ? (<div className="spinner"></div>) : (
        posts.map((post) => (
          <Box marginX={20} m={2} className="boxPost">
            <Card >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  Postado por: {post.usuario?.nome}
                </Typography>
                <Typography variant="body1" component="p">
                  Data: {Intl.DateTimeFormat('pt-BR', { }).format(new Date(post.data))}
                </Typography>

                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/formularioPostagem/${post.id}`} className="botaoatucan">
                      <Box mx={1} >
                          <ModeEditOutlineOutlinedIcon/>
                      </Box>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className="botaoatucan">
                      <Box  mx={1}>
                          <DeleteIcon />
                      </Box>
                    </Link>
                  </Box>
               
              </CardActions> 
              
             </Card>              
            
              <Link to={`/formularioPostagem`}  >
                <Box>
                  <AddCircleOutlinedIcon className="botaoadicionar"/>
                </Box>
              </Link>
          </Box>
        ))
      )}
    </>
  );
}

export default Listapost;