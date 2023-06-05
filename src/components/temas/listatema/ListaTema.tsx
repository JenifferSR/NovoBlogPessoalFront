import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { UserState } from '../../../store/token/Reducer';


import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import './ListaTema.css';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  let navigate = useNavigate();

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
      navigate("/login")
    }
  }, [token])


  async function getTema() {

    try {
      await busca("/temas", setTemas, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {temas.length === 0 ? (<div className="spinner"></div>) : (
        temas.map((tema) => (
          <Box marginX={20} m={2}>
            <Card variant="outlined" className="cx">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="botaoatcan">
                  <Box mx={1} >
                      <ModeEditOutlineOutlinedIcon />
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${tema.id}`} className="botaoatcan">
                  <Box mx={1}>
                      <DeleteIcon />
                    </Box>
                  </Link>
                </Box>
              </CardActions>
              </Card>
            <Link to={`/formularioTema/`} >
              <Box>
                <AddCircleOutlinedIcon className="botaoadd" />
              </Box>

            </Link>
          </Box>
        ))
      )}
    </>
  );
}


export default ListaTema;