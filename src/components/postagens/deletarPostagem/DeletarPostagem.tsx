import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import {useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
 
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  
  const [post, setPosts] = useState<Postagem>()
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
    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/postagens')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem deletada com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          }
        
          function nao() {
            navigate('/postagens')
          }
  return (
    <>
      <Box style={{paddingTop:"100px" }} m={2} >
        <Card variant="outlined" className='caixas' >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
          <Typography variant="h4" component="h4">
                    {post?.tema?.descricao}
                  </Typography>
                  <Typography variant="h5" component="h4" gutterBottom>
                    {post?.titulo}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post?.texto}
                  </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="sim">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" className="nao">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;