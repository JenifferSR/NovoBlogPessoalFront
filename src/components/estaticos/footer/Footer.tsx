import { Grid, Typography } from '@material-ui/core';
import GitHubIcon  from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    var footerComponent

    if (token !== "") {
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#B8CAD4", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/JenifferSR" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/jeniffer-souza-ribeiro-8323971ab/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#B8CAD4", height: "40px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;